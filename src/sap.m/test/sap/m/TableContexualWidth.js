	sap.ui.define([
		"sap/ui/model/json/JSONModel",
		"sap/m/ColumnListItem",
		"sap/ui/core/Icon",
		"sap/m/Label",
		"sap/m/Toolbar",
		"sap/m/Text",
		"sap/m/Table",
		"sap/m/Column",
		"sap/ui/layout/ResponsiveSplitter",
		"sap/ui/layout/PaneContainer",
		"sap/ui/layout/SplitPane",
		"sap/m/NavContainer",
		"sap/m/Page",
		"sap/m/Button",
		"sap/m/OverflowToolbar",
		"sap/ui/layout/Splitter",
		"sap/m/App"
	], function(
		JSONModel,
		ColumnListItem,
		Icon,
		Label,
		Toolbar,
		Text,
		Table,
		Column,
		ResponsiveSplitter,
		PaneContainer,
		SplitPane,
		NavContainer,
		Page,
		Button,
		OverflowToolbar,
		Splitter,
		App
	) {
		"use strict";

		// JSON sample data
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "data", {
			configurable: "false",
			writable: "true",

			value: {
				teamMembers:[
					{firstName:"John", lastName:"Doe",birthDate:"1986-05-11",gender:"Male"},
					{firstName:"Harry", lastName:"Potter",birthDate:"1976-05-19",gender:"Male"},
					{firstName:"Heinz", lastName:"Piper",birthDate:"1989-08-08",gender:"Male"},
					{firstName:"Indiana", lastName:"Jones",birthDate:"1991-12-03",gender:"Male"},
					{firstName:"Darth", lastName:"Vader",birthDate:"1977-02-24",gender:"Male"}
				]}
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
		oModel.setData(data);

		// set the model to the core
		sap.ui.getCore();


		// define the row template
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oItemTemplate", {
			configurable: "false",
			writable: "true",

			value: new ColumnListItem({
				tooltip: "Gender icon chosen because no better suitable icon is available... no discrimination of any gender intended",
				cells : [
					new Icon({
						decorative: false,
						src : {
							path: "gender",
							formatter: function(sGender) {
								return (sGender === "Male" ? "sap-icon://wrench" : "sap-icon://show");
							}
						}
					}),
					new Label({
						text : "{firstName}"
					}),
					new Label({
						text: "{lastName}"
					}),
					new Label({
						text: "{birthDate}"
					}),
					new Label({
						text: "{gender}"
					})
				]
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oInfoToolbar1", {
			configurable: "false",
			writable: "true",

			value: new Toolbar({
				active : true,
				content : [
					new Text({
						text : "move the splitter to see the container based popin behaviour in dynamic width",
						wrapping : false
					})
				]
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oInfoToolbar2", {
			configurable: "false",
			writable: "true",

			value: new Toolbar({
				active : true,
				content : [
					new Text({
						text : "move the splitter to see the container based popin behaviour in dynamic width",
						wrapping : false
					})
				]
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oAutoTable1", {
			configurable: "false",
			writable: "true",

			value: new Table({
				contextualWidth: "auto",
				infoToolbar: oInfoToolbar1,
				popinLayout: "GridSmall",
				headerText : "Team Members",
				columns : [
					new Column({
						width : "2rem",
						hAlign : "Center",
						mergeFunctionName : "getSrc"
					}),
					new Column({
						header : new Label({
							text : "First Name"
						})
					}),
					new Column({
						header : new Label({
							text : "Last Name"
						}),
						demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						minScreenWidth : "Phone",
						demandPopin : true,
						popinDisplay : "Inline",
						header : new Label({
							text : "Birth Date"
						}),
						 demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						width : "4rem",
						demandPopin : true,
						minScreenWidth : "Tablet",
						popinDisplay : "Inline",
						header : new Label({
							text : "Gender"
						}),
						 demandPopin: true
					})
				],
				updateStarted : function(e) {
					console.log("updateStarted", e.getParameters(), Date.now());
				},
				updateFinished : function(e) {
					console.log("updateFinished", e.getParameters(), Date.now());
				}
			})
		});

		oAutoTable1.bindAggregation("items", {
			path: "/teamMembers",
			template: oItemTemplate
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oAutoTable2", {
			configurable: "false",
			writable: "true",

			value: new Table({
				infoToolbar: oInfoToolbar2,
				contextualWidth: "auto",
				popinLayout: "GridSmall",
				headerText : "Team Members",
				columns : [
					new Column({
						width : "2rem",
						hAlign : "Center",
						mergeFunctionName : "getSrc"
					}),
					new Column({
						header : new Label({
							text : "First Name"
						})
					}),
					new Column({
						header : new Label({
							text : "Last Name"
						}),
						demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						minScreenWidth : "Phone",
						demandPopin : true,
						popinDisplay : "Inline",
						header : new Label({
							text : "Birth Date"
						}),
						 demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						width : "4rem",
						demandPopin : true,
						minScreenWidth : "Tablet",
						popinDisplay : "Inline",
						header : new Label({
							text : "Gender"
						}),
						 demandPopin: true
					})
				],
				updateStarted : function(e) {
					console.log("updateStarted", e.getParameters(), Date.now());
				},
				updateFinished : function(e) {
					console.log("updateFinished", e.getParameters(), Date.now());
				}
			})
		});

		oAutoTable2.bindAggregation("items", {
			path: "/teamMembers",
			template: oItemTemplate
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oResponsiveSplitter", {
			configurable: "false",
			writable: "true",

			value: new ResponsiveSplitter({
				height: "100%",
				rootPaneContainer: new PaneContainer({
					panes: [new SplitPane({
						requiredParentWidth: 500,
						content: new NavContainer({
							pages: new Page({
								content: [oAutoTable1]
							})
						})
					}),
					new SplitPane({
						requiredParentWidth: 400,
						content: new NavContainer({
							pages: new Page({
								content: [oAutoTable2]
							})
						})
					})
					]
				})
			})
		});

		//-----------------------------------------------------------------------------------

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oButton1", {
			configurable: "false",
			writable: "true",

			value: new Button({
				text: "fixed Width"
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oOverflowtoolbar1", {
			configurable: "false",
			writable: "true",

			value: new OverflowToolbar({
				content: oButton1
			})
		});

		// static use for splitter
		// init table
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "table1", {
			configurable: "false",
			writable: "true",

			value: new Table({
				popinLayout: "GridSmall",
				headerText : "Team Members",
				columns : [
					new Column({
						width : "2rem",
						hAlign : "Center",
						mergeFunctionName : "getSrc"
					}),
					new Column({
						header : new Label({
							text : "First Name"
						})
					}),
					new Column({
						header : new Label({
							text : "Last Name"
						}),
						demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						minScreenWidth : "Phone",
						demandPopin : true,
						popinDisplay : "Inline",
						header : new Label({
							text : "Birth Date"
						}),
						 demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						width : "4rem",
						demandPopin : true,
						minScreenWidth : "Tablet",
						popinDisplay : "Inline",
						header : new Label({
							text : "Gender"
						}),
						 demandPopin: true
					})
				],
				updateStarted : function(e) {
					console.log("updateStarted", e.getParameters(), Date.now());
				},
				updateFinished : function(e) {
					console.log("updateFinished", e.getParameters(), Date.now());
				}
			})
		});


		table1.bindAggregation("items", {
			path: "/teamMembers",
			template: oItemTemplate
		});


		// spliter table
		// init table
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "table2", {
			configurable: "false",
			writable: "true",

			value: new Table({
				popinLayout: "GridLarge",
				headerText : "Team Members",
				columns : [
					new Column({
						width : "2rem",
						hAlign : "Center",
						mergeFunctionName : "getSrc"
					}),
					new Column({
						header : new Label({
							text : "First Name"
						})
					}),
					new Column({
						header : new Label({
							text : "Last Name"
						}),
						demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						minScreenWidth : "Phone",
						demandPopin : true,
						popinDisplay : "Inline",
						header : new Label({
							text : "Birth Date"
						}),
						demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						width : "4rem",
						demandPopin : true,
						minScreenWidth : "Tablet",
						popinDisplay : "Inline",
						header : new Label({
							text : "Gender"
						}),
						demandPopin: true
					})
				],
				updateStarted : function(e) {
					console.log("updateStarted", e.getParameters(), Date.now());
				},
				updateFinished : function(e) {
					console.log("updateFinished", e.getParameters(), Date.now());
				}
			})
		});


		table2.bindAggregation("items", {
			path: "/teamMembers",
			template: oItemTemplate

		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oSplitter", {
			configurable: "false",
			writable: "true",

			value: new Splitter({
				height: "100%",
				contentAreas: [table1, table2],
				resize: function(e) {
					table1.setContextualWidth(e.getParameter("newSizes")[0]);
					table2.setContextualWidth(e.getParameter("newSizes")[1]);
				}
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oButton2", {
			configurable: "false",
			writable: "true",

			value: new Button({
				text: "fixed width"
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oOverflowtoolbar2", {
			configurable: "false",
			writable: "true",

			value: new OverflowToolbar({
				content: oButton2
			})
		});

		//-------------------------------------------------------------------------------------------------------------

		//contextualWidth: number
		//fixed container
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oInfoToolbar3", {
			configurable: "false",
			writable: "true",

			value: new Toolbar({
				active : true,
				content : [
					new Text({
						text : "container based popin behaviour in static width: 200px",
						wrapping : false
					})
				]
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oTable3", {
			configurable: "false",
			writable: "true",

			value: new Table({
				contextualWidth: "200px",
				infoToolbar: oInfoToolbar3,
				growing : true,
				growingThreshold : 5,
				headerText : "Team Members",
				columns : [
					new Column({
						width : "2rem",
						hAlign : "Center",
						mergeFunctionName : "getSrc"
					}),
					new Column({
						header : new Label({
							text : "First Name"
						})
					}),
					new Column({
						header : new Label({
							text : "Last Name"
						}),
						demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						minScreenWidth : "Phone",
						demandPopin : true,
						popinDisplay : "Inline",
						header : new Label({
							text : "Birth Date"
						}),
						demandPopin: true
					}),
					new Column({
						hAlign : "Right",
						width : "4rem",
						demandPopin : true,
						minScreenWidth : "Tablet",
						popinDisplay : "Inline",
						header : new Label({
							text : "Gender"
						}),
						demandPopin: true
					})
				],
				updateStarted : function(e) {
					console.log("updateStarted", e.getParameters(), Date.now());
				},
				updateFinished : function(e) {
					console.log("updateFinished", e.getParameters(), Date.now());
				}

			})
		});

		oTable3.bindAggregation("items", {
			path: "/teamMembers",
			template: oItemTemplate
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "page", {
			configurable: "false",
			writable: "true",

			value: new Page({
				title : "test page for table API: contexualWidth",
				content: [oResponsiveSplitter, oOverflowtoolbar1, oSplitter, oOverflowtoolbar2, oTable3]
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oApp", {
			configurable: "false",
			writable: "true",

			value: new App({
				pages : [page]
			}).placeAt("content")
		});
	});