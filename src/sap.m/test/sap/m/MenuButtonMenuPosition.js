	var oMenu = new sap.m.Menu({
		title: "random 7",
		itemSelected: function(oEvent) {
			var oItem = oEvent.getParameter("item"),
				sItemPath = "";
			while (oItem instanceof sap.m.MenuItem) {
				sItemPath = oItem.getText() + " > " + sItemPath;
				oItem = oItem.getParent();
			}

			sItemPath = sItemPath.substr(0, sItemPath.lastIndexOf(" > "));

			sap.m.MessageToast.show("itemSelected: " + sItemPath);
		},
		items: [
			new sap.m.MenuItem({
				text: "responde now"
			}),
			new sap.m.MenuItem({
				text: "before sending"
			}),
			new sap.m.MenuItem({
				text: "Do not send"
			})
		]
	});

	var oMenuButton = new sap.m.MenuButton("posMenuId", {
		width: "16rem",
		text: "Menu position",
		menuPosition: sap.ui.core.Popup.Dock.BeginBottom,
		menu: oMenu
	});

	var i = 0;
	var oButton = new sap.m.Button("posButtonId", {
		text: "Change menuPosition",
		press: function() {
				i++;
				switch (i) {
				case 1:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.BeginTop);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.BeginTop);
					break;
				case 2:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.BeginCenter);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.BeginCenter);
					break;
				case 3:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.LeftTop);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.LeftTop);
					break;
				case 4:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.LeftCenter);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.LeftCenter);
					break;
				case 5:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.LeftBottom);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.LeftBottom);
					break;
				case 6:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.CenterTop);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.CenterTop);
					break;
				case 7:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.CenterCenter);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.CenterCenter);
					break;
				case 8:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.CenterBottom);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.CenterBottom);
					break;
				case 9:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.RightTop);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.RightTop);
					break;
				case 10:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.RightCenter);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.RightCenter);
					break;
				case 11:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.RightBottom);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.RightBottom);
					break;
				case 12:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.EndTop);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.EndTop);
					break;
				case 13:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.EndCenter);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.EndCenter);
					break;
				case 14:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.EndBottom);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.EndBottom);
					break;
				default:
				case 0:
					oMenuButton.setMenuPosition(sap.ui.core.Popup.Dock.BeginBottom);
					oSelect.setSelectedKey(sap.ui.core.Popup.Dock.BeginBottom);
					break;
			}
		}
	});

	var oSelect = new sap.m.Select('select_position', {
		items: [
			new sap.ui.core.Item({
				text: 'BeginBottom',
				key: sap.ui.core.Popup.Dock.BeginBottom
			}),
			new sap.ui.core.Item({
				text: 'BeginTop',
				key: sap.ui.core.Popup.Dock.BeginTop
			}),
			new sap.ui.core.Item({
				text: 'BeginCenter',
				key: sap.ui.core.Popup.Dock.BeginCenter
			}),
			new sap.ui.core.Item({
				text: 'LeftTop',
				key: sap.ui.core.Popup.Dock.LeftTop
			}),
			new sap.ui.core.Item({
				text: 'LeftCenter',
				key: sap.ui.core.Popup.Dock.LeftCenter
			}),
			new sap.ui.core.Item({
				text: 'LeftBottom',
				key: sap.ui.core.Popup.Dock.LeftBottom
			}),
			new sap.ui.core.Item({
				text: 'CenterTop',
				key: sap.ui.core.Popup.Dock.CenterTop
			}),
			new sap.ui.core.Item({
				text: 'CenterCenter',
				key: sap.ui.core.Popup.Dock.CenterCenter
			}),
			new sap.ui.core.Item({
				text: 'CenterBottom',
				key: sap.ui.core.Popup.Dock.CenterBottom
			}),
			new sap.ui.core.Item({
				text: 'RightTop',
				key: sap.ui.core.Popup.Dock.RightTop
			}),
			new sap.ui.core.Item({
				text: 'RightCenter',
				key: sap.ui.core.Popup.Dock.RightCenter
			}),
			new sap.ui.core.Item({
				text: 'RightBottom',
				key: sap.ui.core.Popup.Dock.RightBottom
			}),
			new sap.ui.core.Item({
				text: 'EndTop',
				key: sap.ui.core.Popup.Dock.EndTop
			}),
			new sap.ui.core.Item({
				text: 'EndCenter',
				key: sap.ui.core.Popup.Dock.EndCenter
			}),
			new sap.ui.core.Item({
				text: 'EndBottom',
				key: sap.ui.core.Popup.Dock.EndBottom
			})
		],
		change: function(oEvent) {
			var sPosition = oEvent.getParameter('selectedItem').getKey();
			oMenuButton.setMenuPosition(sPosition);
		}
	});

	oButton.placeAt("ctr_cont");
	oSelect.placeAt("ctr_cont");

	var oPage = new sap.m.Page("page0", {
		showHeader: false,
		content: [
			new sap.m.FlexBox({
				height: "300px",
				width: "600px",
				justifyContent: "Center",
				alignItems: "Center",
				items: oMenuButton
			})
		]
	});

	var oApp = new sap.m.App({
		initialPage: "page0",
		pages: [
			oPage
		]
	});

oApp.placeAt("menu_cont");