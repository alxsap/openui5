sap.ui.define([
	'sap/ui/core/util/MockServer',
	'sap/ui/model/odata/v2/ODataModel',
	'sap/ui/model/Filter',
	'sap/ui/layout/ResponsiveSplitter',
	'sap/ui/layout/SplitPane',
	'sap/ui/layout/PaneContainer',
	'sap/ui/layout/VerticalLayout',
	'sap/ui/layout/HorizontalLayout',
	'sap/m/Column',
	'sap/m/ColumnListItem',
	'sap/m/Text',
	'sap/ui/layout/form/SimpleForm',
	'sap/m/Button',
	'sap/m/Panel',
	'sap/m/Input',
	'sap/m/Label',
	'sap/m/Table',
	'sap/ui/model/json/JSONModel'
], function(MockServer, ODataModel, Filter, ResponsiveSplitter, SplitPane, PaneContainer, VerticalLayout, HorizontalLayout, Column, ColumnListItem, Text, SimpleForm, Button, Panel, Input, Label, Table, JSONModel) {
	"use strict";

	var sServiceUri = "/SalesOrderSrv/";
	var sDataRootPath = "qunit/testdata/SalesOrder/";

	var oMockServer = new MockServer({
		rootUri: sServiceUri
	});
	oMockServer.simulate("qunit/testdata/SalesOrder/metadata.xml", sDataRootPath);

	var aRequests = oMockServer.getRequests();

	var oMessageSO1 = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "('0500000000')",
	};
	var oMessageSO2 = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "('0500000001')",
	};
	var oMessageSO1_SOI1 = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "('0500000000')/ToLineItems(SalesOrderID='0500000000',ItemPosition='0000000010')"
	};
	var oMessageSO1_SOI2 = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "('0500000000')/ToLineItems(SalesOrderID='0500000000',ItemPosition='0000000040')"
	};
	var oMessageSO2_SOI1 = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "('0500000001')/ToLineItems(SalesOrderID='0500000001',ItemPosition='0000000030')"
	};
	var oMessageSO2_SOI2 = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "('0500000001')/ToLineItems(SalesOrderID='0500000001',ItemPosition='0000000070')"
	};
	// --> ToLineItems
	var oMessageSO1_SOI1_ = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "(SalesOrderID='0500000000',ItemPosition='0000000010')"
	};
	var oMessageSO1_SOI2_ = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "(SalesOrderID='0500000000',ItemPosition='0000000040')"
	};
	var oMessageSO2_SOI1_ = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "(SalesOrderID='0500000001',ItemPosition='0000000030')"
	};
	var oMessageSO2_SOI2_ = {
		code: "MESSAGE/CODE",
		message: "Fatal error!",
		severity: "error",
		target: "(SalesOrderID='0500000001',ItemPosition='0000000070')"
	};
	// Product
	var oMessagePrice = {
		code: "MESSAGE/CODE",
		message: "Bad price!",
		severity: "error",
		target: "Price",
	};
	var oMessageName = {
		code: "MESSAGE/CODE",
		message: "Bad name!",
		severity: "warning",
		target: "Name",
	};

	var oMessageProduct = Object.assign({ details: [oMessagePrice, oMessageName] }, oMessagePrice);

	aRequests.forEach(function (oRequest) {
		var fnOrginalResponse;
		var sPath = String(oRequest.path);

		if (sPath.indexOf("$") == -1) {

			fnOrginalResponse = oRequest.response;
			oRequest.response = function (oXhr) {
				var fnOrignalXHRRespond = oXhr.respond;
				var sUrl = oXhr.url;
				oXhr.respond = function (status, headers, content) {
					var oMessages;

					if (sUrl.indexOf("SalesOrderSet('0500000000')/ToLineItems") >= 0) {
						oMessages = {
							code: "MESSAGE/CODE",
							message: "Fatal error!",
							severity: "warning",
							target: "",
							details: [
								oMessageSO1_SOI1_,
								oMessageSO1_SOI2_
							]
						};
					} else if (sUrl.indexOf("SalesOrderSet('0500000001')/ToLineItems") >= 0) {
						oMessages = {
							code: "MESSAGE/CODE",
							message: "Fatal error!",
							severity: "warning",
							target: "",
							details: [
								oMessageSO2_SOI1_,
								oMessageSO2_SOI2_
							]
						};
					} else if (sUrl.indexOf("SalesOrderSet") >= 0 && sUrl.indexOf("SalesOrderSet(") == -1) {
						oMessages = {
							code: "MESSAGE/CODE",
							message: "Fatal error!",
							severity: "warning",
							target: "",
							details: [
								oMessageSO1,
								oMessageSO2,
								oMessageSO1_SOI1,
								oMessageSO1_SOI2,
								oMessageSO2_SOI1,
								oMessageSO2_SOI2
							]
						};
					} else if (sUrl.indexOf("/SalesOrderLineItemSet(SalesOrderID='0500000000',ItemPosition='0000000010')/ToProduct") >= 0) {
						oMessages = oMessageProduct;
					}
					if (oMessages) {
						headers["sap-message"] = JSON.stringify(oMessages);
					}
					fnOrignalXHRRespond.apply(this, arguments);
				};
				fnOrginalResponse.apply(this, arguments);
			};
		}
	});
	oMockServer.start();

	var onFocus = function (oEvent) {
		var oControl = oEvent.srcControl;
		var sDeepPath = oControl.getBindingContext().sDeepPath + "/" + oControl.getBinding("value").getPath();
		filterMessageTable(sDeepPath);
	};

	var filterMessageTable = function (sFilterPath) {
		oTableMMFiltered.getBinding("items").filter(new Filter("fullTarget", "StartsWith", sFilterPath));
	};

	new ODataModel(sServiceUri, {
		defaultCountMode: "None",
		canonicalRequests: true
	});

	sap.ui.getCore();

	sap.ui.getCore();
	var oTableMM = new Table({
		items: {
			path: 'message>/',
			sorter: {
				path: 'id'
			},
			template: new ColumnListItem({
				cells: [
					new Text({
						text: "{message>id}"
					}),
					new Text({
						text: "{message>target}"
					}),
					new Text({
						text: "{message>fullTarget}"
					})
				]
			})
		},
		columns: [
			new Column({
				header: new Text({
					text: "id"
				})
			}),
			new Column({
				header: new Text({
					text: "target"
				})
			}),
			new Column({
				header: new Text({
					text: "fullTarget"
				})
			})
		]
	});

	var oTableMMFiltered = new Table({
		items: {
			path: 'message>/',
			sorter: {
				path: 'id'
			},
			template: new ColumnListItem({
				cells: [
					new Text({
						text: "{message>id}"
					}),
					new Text({
						text: "{message>target}"
					}),
					new Text({
						text: "{message>fullTarget}"
					})
				]
			})
		},
		columns: [
			new Column({
				header: new Text({
					text: "id"
				})
			}),
			new Column({
				header: new Text({
					text: "target"
				})
			}),
			new Column({
				header: new Text({
					text: "fullTarget"
				})
			})
		]
	});


	var oSplitter = new ResponsiveSplitter({
		rootPaneContainer: new PaneContainer({
			panes: [
				new SplitPane({
					content:
						oTableMMFiltered
				}),
				new SplitPane({
					content: oTableMM
				})
			]
		})
	});


	var oPanel = new Panel({
		headerText: "SalesOrder"
	});
	var oSalesTable = new Table({
		growing: true,
		growingThreshold: 2,
		growingScrollToLoad: false,
		items: {
			path: '/SalesOrderSet',
			parameters: {
			},
			sorter: {
				path: 'id'
			},
			template: new ColumnListItem({
				cells: [
					new Text({
						text: "{SalesOrderID}"
					}),
					new Text({
						text: "{Note}"
					}),
					new Text({
						text: "{CustomerID}"
					}),
					new Text({
						text: "{GrossAmount}"
					}),
				],
				type: "Navigation"
			})
		},
		columns: [
			new Column({
				header: new Text({
					text: "Id"
				})
			}),
			new Column({
				header: new Text({
					text: "Note"
				})
			}),
			new Column({
				header: new Text({
					text: "Customer"
				})
			}),
			new Column({
				header: new Text({
					text: "GrossAmount"
				})
			}),
		],
		itemPress: function (oEvent) {
			var oItem = oEvent.getParameter("listItem");
			var oContext = oItem.getBindingContext();
			oItemsTable.setBindingContext(oContext);
			filterMessageTable(oContext.sDeepPath);
		}
	});
	oPanel.addContent(oSalesTable);
	var oPanel2 = new Panel({
		headerText: "SalesOrderItems"
	});
	var oItemsTable = new Table({
		growing: true,
		growingThreshold: 2,
		growingScrollToLoad: false,
		items: {
			path: "ToLineItems",
			sorter: {
				path: 'id'
			},
			template: new ColumnListItem({
				cells: [
					new Text({
						text: "{ItemPosition}"
					}),
					new Text({
						text: "{ProductID}"
					}),
					new Text({
						text: "{Note}"
					}),
					new Text({
						text: "{GrossAmount}"
					}),
				],
				type: "Navigation"
			})
		},
		columns: [
			new Column({
				header: new Text({
					text: "Position"
				})
			}),
			new Column({
				header: new Text({
					text: "ProductID"
				})
			}),
			new Column({
				header: new Text({
					text: "Note"
				})
			}),
			new Column({
				header: new Text({
					text: "GrossAmount"
				})
			}),
		],
		itemPress: function (oEvent) {
			var oItem = oEvent.getParameter("listItem");
			var oContext = oItem.getBindingContext();
			oPanel3.setBindingContext(oContext);
			filterMessageTable(oContext.sDeepPath);
		}
	});
	oPanel2.addContent(oItemsTable);


	var oInputPrice = new Input({ value: "{Name}" });
	var oInputName = new Input({ value: "{Price}" });

	oInputPrice.addEventDelegate({
		onfocusin: onFocus
	}, oInputPrice);

	oInputName.addEventDelegate({
		onfocusin: onFocus
	}, oInputName);

	var oForm = new SimpleForm({
		content: [
			new Button({
				text: "to Details",
				press: function (oEvent) {
					var oContext = oEvent.oSource.getBindingContext();
					if (oContext) {
						filterMessageTable(oContext.sDeepPath);
					}
				}
			}),
			new Label({
				text: "Name"
			}), oInputPrice,
			new Label({
				text: "Price"
			}), oInputName,
			new Label({
				text: "but me"
			})
		]
	});
	var oPanel3 = new Panel({
		headerText: "Product"
	});
	oPanel3.addContent(oForm);
	oForm.bindElement("ToProduct");

	var oPanel4 = new Panel({
		headerText: "Messages",
		content: [oSplitter]
	});
	oPanel.placeAt("content");
	oPanel2.placeAt("content");
	oPanel3.placeAt("content");
	oPanel4.placeAt("content");
});