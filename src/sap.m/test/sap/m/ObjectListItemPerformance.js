/*
// monkey patch
jQuery.sap.require("sap.m.ObjectListItem");
sap.m.ObjectListItem.prototype._getTitleText = function() {
	if(!this._oTitleText) {
		this._oTitleText = new sap.m.Text(this.getId() + "-titleText", {
			maxLines: 2
		});
	}
	return this._oTitleText;
};*/

var onLoadList = function () {

	// set model
	var title = (this.getId().indexOf("-S") !== -1) ? "Short Title" : "This is my title which is kind of very long and needs a second line in the very worst case and it could be even long if you do not take care.";
	var oData = { items : [] };
	var iLength = parseInt(sap.ui.getCore().byId("input")/*Not inside AMD call*/.getValue());
	for (var i=0 ; i < iLength ; i++) {
		oData.items.push({
			title: title,
			number: "00000000" + (i + 1)
		});
	}
	var oModel = new sap.ui.model.json.JSONModel(oData);
	oModel.setSizeLimit(iLength);
	sap.ui.getCore();

	// get item template
	var oItemTemplate;
	if (this.getId().indexOf("STD") !== -1) {
		oItemTemplate = new sap.m.StandardListItem({
			type: "Active",
			title: "{title}"
		})
	} else {
		oItemTemplate = new sap.m.ObjectListItem({
			type: "Active",
			title: "{title}",
			number: "{number}",
			numberUnit: "Euro",
			attributes: [
				new sap.m.ObjectAttribute({text: "Attribute 1"}),
				new sap.m.ObjectAttribute({text: "Attribute 2"})
			],
			firstStatus: new sap.m.ObjectStatus({text: "Status 1", state: "Success"}),
			secondStatus: new sap.m.ObjectStatus({text: "Status 2", state: "Error"})
		})
	}

	// add list
	var oList = new sap.m.List({
		items : {
			path : "/items",
			template : oItemTemplate
		}
	});
	sap.ui.getCore().byId("page")/*Not inside AMD call*/.addContent(oList);
};

var onReset = function () {
	sap.ui.getCore().byId("page")/*Not inside AMD call*/.removeAllContent();
};

// create ui
new sap.m.App({
	pages : [
		new sap.m.Page({
			id: "page",
			title: "Object List Item Performance",
			subHeader : new sap.m.Bar("footerBar", {
				contentLeft : [
					new sap.m.Input({
						id : "input",
						value : "200"
					})
				],
				contentRight : [
					new sap.m.Button({
						id : "STD",
						text : "Std",
						press : onLoadList
					}),
					new sap.m.Button({
						id : "OBJ-S",
						text : "Obj S",
						press : onLoadList
					}),
					new sap.m.Button({
						id : "OBJ-L",
						text : "Obj L",
						press : onLoadList
					}),
					new sap.m.Button({
						icon : "sap-icon://undo",
						press : onReset
					})
				]
			}),
			content: []
		})
	]
}).placeAt("content");