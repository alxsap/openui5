sap.ui.define([
	'sap/ui/core/Messaging',
	'sap/ui/core/util/MockServer',
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/layout/ResponsiveSplitter',
	'sap/ui/layout/SplitPane',
	'sap/ui/layout/PaneContainer',
	'sap/ui/layout/VerticalLayout',
	'sap/ui/layout/HorizontalLayout',
	'sap/ui/core/Item',
	'sap/m/Column',
	'sap/m/ColumnListItem',
	'sap/m/Text',
	'sap/m/Input',
	'sap/m/Label',
	'sap/m/Select',
	'sap/m/Button',
	'sap/m/Table',
	'sap/m/Panel',
	'sap/ui/model/json/JSONModel',
	'sap/ui/codeeditor/CodeEditor'
], function (Messaging, MockServer, ODataModel, ResponsiveSplitter, SplitPane, PaneContainer, VerticalLayout, HorizontalLayout, Item, Column, ColumnListItem, Text, Input, Label, Select, Button, Table, Panel, JSONModel, CodeEditor) {
	"use strict";

	// 1. Mocking
	var sServiceUri = "/SalesOrderSrv/";
	var sDataRootPath = "qunit/testdata/SalesOrder/";

	var oMockServer = new MockServer({
		rootUri: sServiceUri
	});
	oMockServer.simulate("qunit/testdata/SalesOrder/metadata.xml", sDataRootPath);

	var aRequests = oMockServer.getRequests();

	var oMessages = {
		code: "MYCODE/111",
		message: "Bad SalesOrder description!",
		severity: "info",
		target: "/SalesOrderSet('0500000000')/Description",
		details: [
			{
				code: "MYCODE/222",
				message: "Gross amount too high!",
				target: "/SalesOrderSet('0500000000')/GrossAmount",
				severity: "error"
			},
			{
				code: "MYCODE/333",
				message: "Gross amount too high!",
				target: "ToLineItems(SalesOrderID='0500000000',ItemPosition='0000000010')/GrossAmount",
				severity: "error"
			}
		]
	};
	new JSONModel(oMessages);
	sap.ui.getCore();

	aRequests.forEach(function (oRequest) {
		var fnOrginalResponse;
		if (String(oRequest.path).indexOf("Set") > 0) {
			fnOrginalResponse = oRequest.response;
			oRequest.response = function (oXhr) {
				var fnOrignalXHRRespond = oXhr.respond;
				oXhr.respond = function (status, headers, content) {

					var oObject = null.getObject("/");
					if(oObject){
						headers["sap-message"] = JSON.stringify(oObject);
					}

					var aHistoryModel = null;
					var aHistory = aHistoryModel.getObject("/");
					aHistory.push({url: oXhr.url.replace("/SalesOrderSrv", "")});
					aHistoryModel.setData(aHistory);

					fnOrignalXHRRespond.apply(this, arguments);
				};
				fnOrginalResponse.apply(this, arguments);
			};
		}
	});
	oMockServer.start();

	// 2. Show back-end message container

	var oResponseEditor = new CodeEditor({
		editable: true,
		type: "json",
		width: "500px",
		height: "500px",
		value: {
			path: "bMessages>/",
			formatter: function(oValue){
				return JSON.stringify(oValue, undefined, 2);
			}
		}
	});

	var oResponsePanel = new Panel({
		headerText: "Response Message Container",
		content: [oResponseEditor]
	});

	var oEntityLabel = new Label({
		text: "ODataModel.read('<Path>'):"
	});

	var oEntitySelect = new Select({
		items: [
			new Item({text: "/SalesOrderSet('0500000000')"}),
			new Item({text: "/SalesOrderSet('0500000000')/ToLineItems"}),
			new Item({text: "/SalesOrderLineItemSet(SalesOrderID='0500000000',ItemPosition='0000000010')"}),
			new Item({text: "/SalesOrderLineItemSet(SalesOrderID='0500000000',ItemPosition='0000000010')/ToProduct"}),
			new Item({text: "/ProductSet('HT-1000')"})
	]
	});

	var oRequestPanel = new Panel({
		headerText: "Trigger Request",
		content: [oEntityLabel, oEntitySelect]
	});

	// 3. OData V2 Model + Requests
	var oODataModel = new ODataModel(sServiceUri, {});

	var oButtonSend = new Button({
		text: "Call ODataModel.read",
		icon: "sap-icon://paper-plane",
		press: function(){
			if (oResponseEditor.getValue()){
				null.setData(JSON.parse(oResponseEditor.getValue()));
			} else {
				null.setData(undefined);
			}
			oODataModel.read(oEntitySelect.getSelectedItem().getText());
		}
	});

	var oButtonRemoveAll = new Button({
		text: "Clear history",
		icon: "sap-icon://delete",
		press: function(){
			Messaging.removeAllMessages();
			var aHistoryModel = null;
			aHistoryModel.setData([]);
		}
	});


	// 4. Show front-end messages
	sap.ui.getCore();

	var oTableMM = new Table({
		items: {
			path: 'message>/',
			sorter: {path: 'id'},
			template: new ColumnListItem({
				cells: [
					new Text({text:"{message>id}"}),
					new Text({text:"{message>target}"}),
					new Text({text:"{message>message}"}),
					new Text({text:"{message>code}"}),
					new Text({text:"{message>persistent}"}),
					new Text({text:"{message>type}"}),
					new Text({text:"{message>fullTarget}"})
				]
			})
		},
		columns: [
			new Column({header: new Text({text: "id"})}),
			new Column({header: new Text({text: "target"})}),
			new Column({header: new Text({text: "message"})}),
			new Column({header: new Text({text: "status code"})}),
			new Column({header: new Text({text: "persistent"})}),
			new Column({header: new Text({text: "type"})}),
			new Column({header: new Text({text: "full target"})})
		]
	});

	var oMessageModelPanel = new Panel({
		headerText: "UI Message Model",
		content: [oTableMM]
	});


	new JSONModel([]);
	sap.ui.getCore();

	var oHistoryTable = new Table({
		items: {
			path: 'history>/',
			template: new ColumnListItem({
				cells: [
					new Text({text:"{history>url}"})
				]
			})
		},
		columns: [
			new Column({header: new Text({text: "Request URL"})})
		]
	});

	var oHistoryPanel = new Panel({
		headerText: "Request history",
		content: oHistoryTable
	});


	// 6. Add content
	var oSplitter = new ResponsiveSplitter({
		rootPaneContainer: new PaneContainer({
			panes: [
				new SplitPane({content:
					new VerticalLayout({content: [
						oRequestPanel, oResponsePanel, oButtonSend
					]})
				}),
				new SplitPane({content:
					new VerticalLayout({content: [
						oHistoryPanel, oButtonRemoveAll
					]})
				}),
				new SplitPane({content: oMessageModelPanel})
			]
		})
	});
	oSplitter.placeAt("content");
});