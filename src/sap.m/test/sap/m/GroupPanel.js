sap.ui.define([
	"sap/m/P13nConditionPanel",
	"sap/ui/layout/Grid",
	"sap/m/Dialog",
	"sap/m/Button",
	"sap/ui/model/json/JSONModel",
	"sap/m/P13nGroupPanel",
	"sap/m/MessageToast",
	"sap/m/P13nItem",
	"sap/m/P13nGroupItem",
	"sap/m/Input",
	"sap/m/CheckBox",
	"sap/ui/thirdparty/jquery"
], function(
	P13nConditionPanel,
	Grid,
	Dialog,
	Button,
	JSONModel,
	P13nGroupPanel,
	MessageToast,
	P13nItem,
	P13nGroupItem,
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
	Object.defineProperty(globalThis, "oGroupPanel", {
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
			text: "show bound GroupPanel",
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
					"groupItems" : [ {
						"key" : "g0",
						"columnKey" : "c1",
						"operation" : "GroupAscending",
						"showIfGrouped" : true
					}, {
						"key" : "g1",
						"columnKey" : "c0",
						"operation" : "GroupDescending",
						"showIfGrouped" : false
					} ]
				};

				oModel = new JSONModel(oData);

				oGroupPanel = new P13nGroupPanel({
					removeGroupItem: function(oEvent) {
						var params = oEvent.getParameters();
						var oData = oModel.getData();
						oData.groupItems.forEach(function(oItem, iIndex) {
							if (oItem.key === params.key) {
								oData.groupItems.splice(iIndex, 1);
								oModel.setData(oData, true);

								MessageToast.show("removeGroupItem ---> " + params.key + " #" + oModel.getData().groupItems.length);
								return;
							}
						});
					},
					addGroupItem: function(oEvent) {
						var params = oEvent.getParameters();
						var oData = oModel.getData();
						var oGroupItem = {
							key : params.key,
							columnKey : params.groupItemData.getColumnKey(),
							operation : params.groupItemData.getOperation(),
							showIfGrouped : params.groupItemData.getShowIfGrouped()
						};
						if (params.index) {
							oData.groupItems.splice(params.index, 0, oGroupItem);
						} else {
							oData.groupItems.push(oGroupItem);
						}
						oModel.setData(oData, true);

						MessageToast.show("addGroupItem ---> " + params.key + " #" + oModel.getData().groupItems.length);
					}
				});
				oGroupPanel.setModel(oModel);
				oGroupPanel.bindItems("/items", new P13nItem({
					columnKey : "{key}",
					text : "{text}",
					tooltip : "{tooltip}"
				}));
				oGroupPanel.bindGroupItems("/groupItems", new P13nGroupItem({
					key : "{key}",
					operation : "{operation}",
					columnKey : "{columnKey}",
					showIfGrouped : "{showIfGrouped}"
				}));

				show(oGroupPanel, "Group");

				oFieldKey.setModel(oModel);
				oFieldKey.bindValue("/groupItems/0/key");
				oFieldKeyField.setModel(oModel);
				oFieldKeyField.bindValue("/groupItems/0/columnKey");
				oFieldOperation.setModel(oModel);
				oFieldOperation.bindValue("/groupItems/0/operation");
				oFieldShowIfGrouped.setModel(oModel);
				oFieldShowIfGrouped.bindValue("/groupItems/0/showIfGrouped");
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
				MessageToast.show("validate= "+oGroupPanel.validateConditions());
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
				oGroupPanel.removeValidationErrors();
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
				oGroupPanel.removeInvalidConditions();
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
				aConditions = oGroupPanel._getConditions();

				var sConditions= "";
				for (i = 0; i < aConditions.length; i++) {
					var oCondition = aConditions[i];
					sConditions+= "'" + oCondition.text + "' ";
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
				oData.groupItems.push({
						"key" : "s" + iCount++,
						"columnKey" : "c0",
						"operation" : "Ascending",
						"showIfGrouped" : true
				});
				oModel.setData(oData, true);

				MessageToast.show("add GroupItem into Model" + " #" + oModel.getData().groupItems.length);
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
				oData.groupItems.splice(0,0,{
						"key" : "s" + iCount++,
						"columnKey" : "c0",
						"operation" : "Ascending",
						"showIfGrouped" : true
				});
				oModel.setData(oData, true);

				MessageToast.show("insert GroupItem @0 into Model" + " #" + oModel.getData().groupItems.length);
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
				oData.groupItems.splice(0, 1);
				oModel.setData(oData, true);

				MessageToast.show("remove GroupItem from Model"+ " #" + oModel.getData().groupItems.length);
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
	Object.defineProperty(globalThis, "oFieldShowIfGrouped", {
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
	oFieldShowIfGrouped.placeAt("content2");
	btnAddCondition.placeAt("content2");
	btnInsertCondition.placeAt("content2");
	btnRemoveCondition.placeAt("content2");
	theCompactMode.placeAt("content");
	theDialogMode.placeAt("content");
});