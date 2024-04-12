sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/m/App",
	"sap/m/Page",
	"sap/m/Bar",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/StandardListItem",
	"sap/m/List",
	"sap/ui/core/CustomData",
	"sap/ui/thirdparty/jquery"
], function(JSONModel, App, Page, Bar, Button, mobileLibrary, StandardListItem, List, CustomData, jQuery) {
	"use strict";

	// shortcut for sap.m.ListMode
	const ListMode = mobileLibrary.ListMode;

	// shortcut for sap.m.ListType
	const ListType = mobileLibrary.ListType;

	// ================================================================================


	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",
		value: new App("myApp")
	});

	//alert((app.isLandscape() ? "Landscape" : "Portrait"));

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "listOverview", {
		configurable: "false",
		writable: "true",

		value: new Page("listOverview", {
			title : "Growing List Testpage (JSON)",
			subHeader: new Bar({
				contentLeft: [],
				contentMiddle:[ new Button({text:"Data 1", press: switchData1}),
								new Button({text:"Data 2", press: switchData2}) ],
				contentRight: []
			}),
			footer : new Bar({
				contentMiddle : []
			})
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "nav", {
		configurable: "false",
		writable: "true",
		value: new Array()
	});

	for ( var i = 0; i < 1000; i++) {
		nav[i] = {};
		nav[i].title = "Data 1 No: " + i;
		nav[i].description = "Description Text";
		nav[i].type = ListType.Detail;
		nav[i].press = "Content pressed";
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "dataOverview1", {
		configurable: "false",
		writable: "true",

		value: {
			navigation : nav
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "nav2", {
		configurable: "false",
		writable: "true",
		value: new Array()
	});

	for ( var i = 0; i < 18; i++) {
		nav2[i] = {};
		nav2[i].title = "Data 2 No: " + i;
		nav2[i].description = "Description Text";
		nav2[i].type = ListType.Detail;
		nav2[i].press = "Content pressed";
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "dataOverview2", {
		configurable: "false",
		writable: "true",

		value: {
			navigation : nav2
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oItemTemplate", {
		configurable: "false",
		writable: "true",

		value: new StandardListItem({
			title : "{test>title}",
			description : "{test>description}",
			icon : "images/travel_expend.png",
			activeIcon : "images/travel_expend_grey.png",
			iconInset : false,
			type : "{test>type}",
			unread : true,
			counter : 99,
			selected : false
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oList", {
		configurable: "false",
		writable: "true",

		value: new List({
			growing : true,
			headerText : "Growing List",
			inset : false,
			footerText : "List Footer",
			growingThreshold : 5,
			'delete' : deleteItem,
			mode : ListMode.Delete,
			growingTriggerText : "",
			showNoData: true,
			scrollToLoad: false
		})
	});


	function deleteItem(oEvent) {
		var model = oEvent.mParameters.listItem.getModel("test");
		if (model) {
			var deleteId = model.getProperty("", oEvent.mParameters.listItem.getBindingContext("test"));
			var data = model.getData().navigation;
			jQuery.each(data,function(iIndex, oEntry){
				if (oEntry == deleteId) {
					data.splice(iIndex, 1);
					return false;
				}
		  });
		  model.updateBindings();
		}
	}


	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});


	function bindListData1(data, itemTemplate, list) {
		var oModel = new JSONModel();
		oModel.setData(data);
		// set the model to the list
		list.setModel(oModel, "test");
		//sap.ui.getCore().setModel(oModel);

		// create a CustomData template, set its key to "answer" and bind its value to the answer data
		var oDataTemplate = new CustomData({
			key : "xyz"
		});
		oDataTemplate.bindProperty("value", "press");

		// add the CustomData template to the item template
		itemTemplate.addCustomData(oDataTemplate);

		// bind Aggregation
		list.bindAggregation("items", "test>/navigation", itemTemplate);
	}


	function bindListData2(data, itemTemplate, list) {
		// set the model to the list
		list.setModel(oModel, "test");
		//sap.ui.getCore().setModel(oModel);

		// create a CustomData template, set its key to "answer" and bind its value to the answer data
		var oDataTemplate = new CustomData({
			key : "xyz"
		});
		oDataTemplate.bindProperty("value", "press");

		// add the CustomData template to the item template
		itemTemplate.addCustomData(oDataTemplate);

		// bind Aggregation
		list.bindAggregation("items", "test>/navigation", itemTemplate);
	}
	//bindListData2(dataOverview2, oItemTemplate, oList);


	window.setTimeout(function(){
		bindListData1(dataOverview1, oItemTemplate, oList);
		oModel.setData(dataOverview1);
	}, 3000);


	function switchData1() {
		bindListData1(dataOverview1, oItemTemplate, oList);
		oModel.setData(dataOverview1);
	}


	function switchData2() {
		bindListData2(dataOverview2, oItemTemplate, oList);
		oModel.setData(dataOverview2);
	}


	/*
	window.setTimeout(function() {
		bindListData(dataAgain, oItemTemplate, list);
		oModel.setData(dataAgain);
		alert("binding changed")
	}, 5000);
	*/

	listOverview.addContent(oList);
	app.addPage(listOverview)

	app.placeAt("body");
});