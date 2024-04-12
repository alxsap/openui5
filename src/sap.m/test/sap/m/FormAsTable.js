var page = new sap.m.Page({
	title : "Form Table",
	enableScrolling : true,
	content : [form = new sap.m.Table({
		inset : false,
		showUnread : true,
		scrollToLoad : true,
		headerText : "Personal Info",
		columns : [
			new sap.m.Column({
				styleClass : "key",
				valign : "Center",
				width : "35%",
				hAlign : "Right"
			}),
			new sap.m.Column({
				minScreenWidth : "Medium",
				demandPopin : true
			})
		],
		items : [
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Name",
						required : true
					}),
					new sap.m.Input({
						placeholder : "Tom Roy"
					})
				]
			}),
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Email",
						required : true
					}),
					new sap.m.Input({
						placeholder : "me@sap.com",
						type : "Email"
					})
				]
			}),
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Birthday"
					}),
					new sap.m.DateTimeInput({
						displayFormat : "dd-mm-yyyy",
						placeholder : "dd-mm-yyyy",
						valueFormat : "dd-mm-yyyy"
					})
				]
			}),
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Size"
					}),
					new sap.m.Select({
						width : "100%",
						items : [
							new sap.ui.core.Item({
								text: "Small"
							}),
							new sap.ui.core.Item({
								text: "Medium"
							}),
							new sap.ui.core.Item({
								text: "Large"
							})
						]
					})
				]
			}),
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Favorite Colors"
					}),
					new sap.m.HBox({
						items : [
							new sap.m.CheckBox({
								text : "Blue"
							}),
							new sap.m.CheckBox({
								text : "Red"
							}),
							new sap.m.CheckBox({
								text : "Green"
							})
						]
					})

				]
			}),
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Gender"
					}),
					new sap.m.HBox({
						items : [
							new sap.m.RadioButton({
								text : "Male"
							}),
							new sap.m.RadioButton({
								text : "Female"
							})
						]
					})
				]
			}),
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Length"
					}),
					new sap.m.HBox({
						items : [
							new sap.m.Slider({
								min : 150,
								max : 250,
								value : 170,
							}).attachLiveChange(function(e) {
								sap.ui.getCore().byId("length")/*Not inside AMD call*/.setValue(e.getParameter("value") + " cm");
							}),
							new sap.m.Input("length", {
								width : "70px",
								editable : false,
								value : "170 cm"
							})
						]
					}).addStyleClass("width100Percent")
				]
			}),
			new sap.m.ColumnListItem({
				cells : [
					new sap.m.Label({
						text : "Notes"
					}),
					new sap.m.TextArea({
						rows : 3,
						width : "100%",
						maxLength : 255,
						placeholder : "Max Length 255"
					}).attachLiveChange(function(e) {
						// growing textarea
						var $ta = jQuery(this.getFocusDomRef());
						if (!$ta.data("first")) {
							$ta.data("first", true).css({
								"min-height" : $ta.outerHeight(),
								"overflow-y" : "hidden"
							});
						}
						$ta.height(0).height($ta[0].scrollHeight);
					})
				]
			})
		]
	}).addStyleClass("sapMForm")]
});

new sap.m.App().addPage(page).placeAt("body");