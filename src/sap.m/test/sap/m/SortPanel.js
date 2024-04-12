sap.ui.define([
	"sap/m/P13nConditionPanel",
	"sap/ui/layout/Grid",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/ui/model/json/JSONModel",
	"sap/m/P13nSortPanel",
	"sap/m/MessageToast",
	"sap/m/P13nItem",
	"sap/m/P13nSortItem",
	"sap/m/Input",
	"sap/m/CheckBox",
	"sap/ui/thirdparty/jquery"
], function(
	P13nConditionPanel,
	Grid,
	Dialog,
	Button,
	JSONModel,
	P13nSortPanel,
	MessageToast,
	P13nItem,
	P13nSortItem,
	Input,
	CheckBox,
	jQuery
) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aConditions", {
		configurable: "false",
		writable: "true",
		value: []
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oSortPanel", {
		configurable: "false",
		writable: "true"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "iCount", {
		configurable: "false",
		writable: "true",
		value: 100
	});

	show= function(oPanel, sTitle) {
		if (theDialogMode.getSelected()) {
			oPanel.setContainerQuery(true);
			//oPanel.setLayoutMode("Desktop");

			var oDialog = new Dialog({title: sTitle, draggable: true, resizable: true, content: [oPanel], contentWidth: "1600px"});
			if (this.$().closest(".sapUiSizeCompact").length > 0) { // check if the Token field runs in Compact mode
				oDialog.addStyleClass("sapUiSizeCompact");
			}
			oDialog.setBeginButton(new Button({
				text: "Close",
				press: function() {
					oDialog.close();
				}
			}));

			oDialog.open();
		} else {
			oPanel.placeAt("contentPanel", "only");
		}
	};


	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnShow", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "show bound SortPanel",
			press: function() {
				var oData = {
					"items" : [ {
						"key" : null,
						"text" : "(none)",
						"tooltip" : "nix"
					},  {
						"key" : "c0",
						"text" : "Name"
					}, {
						"key" : "c1",
						"text" : "Color"
					}, {
						"key" : "c2",
						"text" : "Number"
					}],
					"sortItems" : [{
						"key" : "s0",
						"columnKey" : "c1",
						"operation" : "Ascending"
					}, {
						"key" : "s1",
						"columnKey" : "c0",
						"operation" : "Descending"
					}]
				};

				oModel = new JSONModel(oData);

				oSortPanel = new P13nSortPanel({
					removeSortItem: function(oEvent) {
						var params = oEvent.getParameters();
						var oData = oModel.getData();
						oData.sortItems.forEach(function(oItem, iIndex) {
							if (oItem.key === params.key) {
								oData.sortItems.splice(iIndex, 1);
								oModel.setData(oData, true);

								MessageToast.show("removeSortItem ---> " + params.key + " #" + oModel.getData().sortItems.length);
								return;
							}
						});
					},
					addSortItem: function(oEvent) {
						var params = oEvent.getParameters();
						var oData = oModel.getData();
						var oSortItem = {
							key : params.key,
							columnKey : params.sortItemData.getColumnKey(),
							operation : params.sortItemData.getOperation()
						};
						if (params.index) {
							oData.sortItems.splice(params.index, 0, oSortItem);
						} else {
							oData.sortItems.push(oSortItem);
						}
						oModel.setData(oData, true);

						MessageToast.show("addSortItem ---> " + params.key + " #" + oModel.getData().sortItems.length);
					}
				});
				oSortPanel.setModel(oModel);
				oSortPanel.bindItems("/items", new P13nItem({
					columnKey : "{key}",
					text : "{text}",
					tooltip : "{tooltip}"
				}));
				oSortPanel.bindSortItems("/sortItems", new P13nSortItem({
					key : "{key}",
					operation : "{operation}",
					columnKey : "{columnKey}"
				}));

				show(oSortPanel, "Sort");

				oFieldKey.setModel(oModel);
				oFieldKey.bindValue("/sortItems/0/key");
				oFieldKeyField.setModel(oModel);
				oFieldKeyField.bindValue("/sortItems/0/columnKey");
				oFieldOperation.setModel(oModel);
				oFieldOperation.bindValue("/sortItems/0/operation");
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnValidate", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "validate",
			press: function() {
				MessageToast.show("validate= "+oSortPanel.validateConditions());
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnClearErrors", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Clear Errors",
			press: function() {
				oSortPanel.removeValidationErrors();
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnRemoveInvalidConditions", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Remove Invalid Conditions",
			press: function() {
				oSortPanel.removeInvalidConditions();
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnConditions", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "get Conditions",
			press: function() {
				aConditions = oSortPanel._getConditions();

				var sConditions= "";
				for (i = 0; i < aConditions.length; i++) {
					var oCondition = aConditions[i];
					sConditions+= "'"+oCondition.text + "' ";
				}

				MessageToast.show("Conditions= "+sConditions);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnAddCondition", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "add",
			press: function() {
				var oData= oModel.getData();
				oData.sortItems.push({
						"key" : "s" + iCount++,
						"columnKey" : "c0",
						"operation" : "Ascending"
				});
				oModel.setData(oData, true);

				MessageToast.show("add SortItem into Model" + " #" + oModel.getData().sortItems.length);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnInsertCondition", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "insert",
			press: function() {
				var oData= oModel.getData();
				oData.sortItems.splice(0,0,{
						"key" : "s" + iCount++,
						"columnKey" : "c0",
						"operation" : "Ascending"
				});
				oModel.setData(oData, true);

				MessageToast.show("insert SortItem @0 into Model" + " #" + oModel.getData().sortItems.length);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "btnRemoveCondition", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "remove",
			press: function() {
				var oData= oModel.getData();
				oData.sortItems.splice(0, 1);
				oModel.setData(oData, true);

				MessageToast.show("remove SortItem from Model"+ " #" + oModel.getData().sortItems.length);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFieldKey", {
		configurable: "false",
		writable: "true",

		value: new Input({
			width: "100px"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFieldKeyField", {
		configurable: "false",
		writable: "true",

		value: new Input({
			width: "100px"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFieldOperation", {
		configurable: "false",
		writable: "true",

		value: new Input({
			width: "100px"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "theCompactMode", {
		configurable: "false",
		writable: "true",

		value: new CheckBox({
			selected: true,
			text: "compactMode",
			select : function() {
				jQuery("body").toggleClass("sapUiSizeCompact");
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "theDialogMode", {
		configurable: "false",
		writable: "true",

		value: new CheckBox({
			selected: false,
			text: "show on dialog",
			select : function() {
			}
		})
	});


	btnShow.placeAt("content");
	btnValidate.placeAt("content");
	btnClearErrors.placeAt("content");
	btnRemoveInvalidConditions.placeAt("content");
	btnConditions.placeAt("content");
	oFieldKey.placeAt("content2");
	oFieldKeyField.placeAt("content2");
	oFieldOperation.placeAt("content2");
	btnAddCondition.placeAt("content2");
	btnInsertCondition.placeAt("content2");
	btnRemoveCondition.placeAt("content2");
	theCompactMode.placeAt("content");
	theDialogMode.placeAt("content");
});