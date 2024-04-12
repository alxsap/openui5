	function addToPage(oContent, oPage){
		oPage.addContent(oContent);
		oPage.addContent(oContent.addStyleClass("sapUiSmallMarginTopBottom"));
	}

// ObjectAttribute inside ObjectHeader static and responsive
	var oAttrs = [ new sap.m.ObjectAttribute({
		title: "Some title",
		text : "Contract #D1234567890 Ñagçyfox",
		active : true,
		press : function() {
			oAttrs[0].setText("Ñagçyfox #D1234567890 Contract");
		}
	}), new sap.m.ObjectAttribute({
		text : "John Doe Ñagçyfox",
		active : true,
		press : function() {
			oAttrs[0].setText("Ñagçyfox Contract #D1234567890");
		}
	}), new sap.m.ObjectAttribute({
		title: "Custom content",
		customContent: new sap.m.Link ({
			text:"test",
			press: function() {alert("you press me")}
		})
	}), new sap.m.ObjectAttribute({
		text : "John Doe Ñagçyfox"
	}), new sap.m.ObjectAttribute({
		title: "Created by",
		text : "John Doe Ñagçyfox"
	}) ];

	var oAttrs2 = [ new sap.m.ObjectAttribute({
		title: "Some title",
		text : "Contract #D1234567890 Ñagçyfox",
		active : true,
		press : function() {
			oAttrs2[0].setText("Ñagçyfox #D1234567890 Contract");
		}
	}), new sap.m.ObjectAttribute({
		text : "John Doe Ñagçyfox",
		active : true,
		press : function() {
			oAttrs2[0].setText("Ñagçyfox Contract #D1234567890");
		}
	}), new sap.m.ObjectAttribute({
		title: "Custom content",
		customContent: new sap.m.Link ({
			text:"test",
			press: function() {alert("you press me")}
		})
	}), new sap.m.ObjectAttribute({
		text : "John Doe Ñagçyfox"
	}), new sap.m.ObjectAttribute({
		title: "Created by",
		text : "John Doe Ñagçyfox"
	}) ];

	var oOh = new sap.m.ObjectHeader("oh", {
		title : "Static ObjectHeader with attributes",
		number : "3.628.000",
		numberUnit : "EUR",
		attributes : oAttrs
	});

	var oOh2 = new sap.m.ObjectHeader("oh2", {
		title : "Responsive ObjectHeader with attributes",
		number : "3.628.000",
		numberUnit : "EUR",
		responsive: true,
		attributes : oAttrs2
	});

// ObjectAttribute inside ObjectListItem
	var oAttrs3 = [ new sap.m.ObjectAttribute({
		title: "Some title",
		text : "Contract #D1234567890 Ñagçyfox",
		active : true,
		press : function() {
			oAttrs3[0].setText("Ñagçyfox #D1234567890 Contract");
		}
	}), new sap.m.ObjectAttribute({
		text : "John Doe Ñagçyfox",
		active : true,
		press : function() {
			oAttrs3[0].setText("Ñagçyfox Contract #D1234567890");
		}
	}), new sap.m.ObjectAttribute({
		title: "Custom content",
		customContent: new sap.m.Link ({
			text:"test",
			press: function() {alert("you press me")}
		})
	}), new sap.m.ObjectAttribute({
		text : "John Doe Ñagçyfox"
	}), new sap.m.ObjectAttribute({
		title: "Created by",
		text : "John Doe Ñagçyfox"
	}) ];

	var oList = new sap.m.List("test_list", {
		headerText: "Object List Items"
	});

	var listItemId = "worst_case";
	var oOli = new sap.m.ObjectListItem({
		type: "Active",
		title: "ObjectListItem with attributes",
		number: "Ñ999999999",
		numberUnit: "Euro",
		attributes: oAttrs3,
		firstStatus: new sap.m.ObjectStatus({text: "Positive Ñagçyfox", state: "Success", tooltip: "Status tip"}),
		showMarkers: true,
		markFavorite: true
	});
	oList.addItem(oOli);

// ObjectAttribute inside ObjectPage
	var oOP = new sap.uxap.ObjectPageLayout({
		showHeaderContent:true,
		showTitleInHeaderContent:true,
		headerTitle: new sap.uxap.ObjectPageHeader({
			isActionAreaAlwaysVisible:true,
			isObjectSubtitleAlwaysVisible:false,
			isObjectTitleAlwaysVisible:false,
			objectTitle: 'ObjectPage with ObjectAttributes inside the HeaderContent and inside the Sections',
			showPlaceholder:true
		}),
		headerContent:[
			new sap.m.ObjectAttribute({
				title: "Some title",
				text : "Contract #D1234567890 Ñagçyfox",
				active : true,
				press : function() {
					new sap.m.MessageToast.show("you click me");
				}
			}), new sap.m.ObjectAttribute({
				text : "John Doe Ñagçyfox",
				active : true,
				press : function() {
					new sap.m.MessageToast.show("you click me");
				}
			}), new sap.m.ObjectAttribute({
				title: "Custom content",
				customContent: new sap.m.Link ({
					text:"test",
					press: function() {alert("you press me")}
				})
			}), new sap.m.ObjectAttribute({
				text : "John Doe Ñagçyfox"
			}), new sap.m.ObjectAttribute({
				title: "Created by",
				text : "John Doe Ñagçyfox"
			})],
		sections: [
			new sap.uxap.ObjectPageSection({
				title: 'Section 1',
				subSections: [
					new sap.uxap.ObjectPageSubSection({
						blocks: [
							new sap.m.ObjectAttribute({
								title: "Some title",
								text : "Contract #D1234567890 Ñagçyfox",
								active : true,
								press : function() {
									new sap.m.MessageToast.show("you click me");
								}
							}), new sap.m.ObjectAttribute({
								title: "Custom content",
								customContent: new sap.m.Link ({
									text:"test",
									press: function() {alert("you press me")}
								})
							}), new sap.m.ObjectAttribute({
								text : "John Doe Ñagçyfox",
								active : true,
								press : function() {
									new sap.m.MessageToast.show("you click me");
								}
							}), new sap.m.ObjectAttribute({
								text : "John Doe Ñagçyfox"
							}), new sap.m.ObjectAttribute({
								title: "Created by",
								text : "John Doe Ñagçyfox"
							})
						]
					})
				]
			})
		]
	});

// Object Attribute inside Table
	var data = aNotificationTypesSettings = [{
		NotificationTypeId: "type1"
		}, {
		NotificationTypeId: "type2",
	}];
	var oModel = new sap.ui.model.json.JSONModel();
	oModel.setProperty("/rows", data);

	var oVBox = new sap.m.VBox();

	oNotificationTypeTable = new sap.m.Table("notificationSettingsTable", {
		backgroundDesign: sap.m.BackgroundDesign.Transparent,
		showSeparators: sap.m.ListSeparators.All,
		columns: [
			new sap.m.Column({
				header: new sap.m.Text({
					text : "Active objectAttribute with title and text"
				})
			}),
			new sap.m.Column({
				header: new sap.m.Text({
					text : "Active objectAttribute with only text"
				})
			}),
			new sap.m.Column({
				header: new sap.m.Text({
					text : "objectAttribute with only text"
				})
			}),
			new sap.m.Column("disableTypeColumn", {
				header: new sap.m.Text("xxx", {
					text : "objectAttribute with title and text"
				})
			})
		]
	});


		// Arrange the table columns according to the cells content width
		oNotificationTypeTable.setFixedLayout(false);

		oTableRowTemplate = new sap.m.ColumnListItem({
			cells : [
				new sap.m.ObjectAttribute({
						title: "Some title",
						text : "Contract #D1234567890 Ñagçyfox",
						active : true,
						press : function() {
							new sap.m.MessageToast.show("you click me");
						}
					}), new sap.m.ObjectAttribute({
						title: "Custom content",
						customContent: new sap.m.Link ({
							text:"test link",
							press: function() {alert("you press me")}
						})
					}), new sap.m.ObjectAttribute({
						text : "JohnDoeÑagçyfox@JohnDoeÑagçyfox.com",
						active : true,
						press : function() {
							new sap.m.MessageToast.show("you click me");
						}
					}), new sap.m.ObjectAttribute({
						text : "John Doe Ñagçyfox"
					}), new sap.m.ObjectAttribute({
						title: "Created by",
						text : "John Doe Ñagçyfox"
					})
			]
		});

		oNotificationTypeTable.bindAggregation("items", {
				path : "/rows",
				template: oTableRowTemplate
		});
		oNotificationTypeTable.setModel(oModel);

	oVBox.addItem(oNotificationTypeTable);


	var oPage = new sap.m.Page("testPage", {
		showHeader : false,
		enableScrolling : true
	});
	new sap.m.App({
		pages: [oPage]
	}).placeAt("body");


	// Object Attribute standalone cases
	addToPage(new sap.m.ObjectAttribute({
		text : "Ñagçyfox Contract #D1234567890"
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		title: "Custom content",
		customContent: new sap.m.Link ({
			text:"test",
			press: function() {alert("you press me")}
		})
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		text : "Very long not active attribute containing only text Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John DoeÑagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe Ñagçyfox Created by John Doe"
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		title: "ObjectAttribute with title Ñagçyfox",
		text : "and some text April 9, 2013 Ñagçyfox"
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		title: "ObjectAttribute with very long title and text going on two lines and that will start to truncate from the text which will disapear at some point",
		text : "Here starts the TEXT and Very long text that will begin to truncate from the text which will disapear at some point text April 9, 2013 Ñagçyfox"
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		text : "Ñagçyfox Contract #D1234567890",
		active: true
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		title : "Active attribute with only title which therefore can't be clicked",
		active: true
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		text : "Very long not active attribute containing only text Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John DoeÑagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe",
		active: true
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		title: "ObjectAttribute with title Ñagçyfox",
		text : "and some text April 9, 2013 Ñagçyfox",
		active: true
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		title: "ObjectAttribute with very long title and text going on two lines and that will start to truncate from the text which will disapear at some point",
		text : "Here starts the TEXT and Very long text that will begin to truncate from the text which will disapear at some point text April 9, 2013 Ñagçyfox",
		active: true
	}), oPage);


	addToPage(oOh, oPage);
	addToPage(oOh2, oPage);

	addToPage(oList, oPage);

	addToPage(oOP, oPage);

	addToPage(oVBox, oPage);

	addToPage(new sap.m.ObjectAttribute({
		title: "רכיבים",
		text: "מים, קמח, (Additive) תרכיז 2% חלב"
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		textDirection: "RTL",
		title: "רכיבים",
		text: "מים, קמח, (Additive) תרכיז 2% חלב"
	}), oPage);

	addToPage(new sap.m.ObjectAttribute({
		active: true,
		textDirection: "RTL",
		title: "רכיבים",
		text: "מים, קמח, (Additive) תרכיז 2% חלב"
	}), oPage);

	addToPage(new sap.m.Text({ text: "===== not OK, explicit textDirection is required =====" }), oPage);

	addToPage(new sap.m.ObjectAttribute({
		active: true,
		title: "רכיבים",
		text: "מים, קמח, (Additive) תרכיז 2% חלב"
	}), oPage);