sap.ui.define(["sap/ui/core/Core", "sap/ui/core/Element", "sap/base/security/URLListValidator", "sap/ui/core/library", "sap/ui/core/ListItem", "sap/ui/commons/TextField", "sap/ui/commons/Label", "sap/ui/commons/ListBox", "sap/ui/commons/Button", "sap/ui/commons/library", "sap/ui/layout/VerticalLayout", "sap/ui/commons/layout/MatrixLayoutRow", "sap/ui/commons/layout/MatrixLayout", "sap/ui/commons/layout/MatrixLayoutCell"],function(Core, Element, URLListValidator, coreLibrary, ListItem, TextField, Label, ListBox, Button, commonsLibrary, VerticalLayout, MatrixLayoutRow, MatrixLayout, MatrixLayoutCell) {
	"use strict";

	// shortcut for sap.ui.commons.ButtonStyle
	const ButtonStyle = commonsLibrary.ButtonStyle;

	// shortcut for sap.ui.core.ValueState
	const ValueState = coreLibrary.ValueState;

	try{
		Core.loadLibrary("sap.ui.commons");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}
	var URLListValidator = sap.ui.require("sap/base/security/URLListValidator");

	Core.ready().then(function () {
		function onChange(oEvent){
			var oInput = Element.getElementById("Input1");
			var sUrl = oInput.getValue();
			var sValid = URLListValidator.validate(sUrl);

			if (sValid){
				oInput.setValueState(ValueState.Success);
			}else{
				oInput.setValueState(ValueState.Error);
			}
		}

		function onLiveChange(oEvent){
			var oInput = oEvent.oSource;

			if (oEvent.getParameter("liveValue") != oInput.getValue()){
				// only during typing
				oInput.setValueState(ValueState.None);
			}
		}

		function fillListBox(){
			var aAllowlist = URLListValidator.entries();
			var oListBox = Element.getElementById("ListBox1");
			oListBox.removeAllItems();

			if (aAllowlist instanceof Array && aAllowlist.length > 0){
				for(var i=0; i<aAllowlist.length; i++){
					if (aAllowlist[i] instanceof Object){
						oListBox.addItem(new ListItem({text: aAllowlist[i].protocol +"|"+ aAllowlist[i].host +"|"+ aAllowlist[i].port +"|"+ aAllowlist[i].path}));
					}
				}
			}
		}

		function addToAllowlist(oEvent){
			var oProtocol = Element.getElementById("Protocol");
			var oHost = Element.getElementById("Host");
			var oPort = Element.getElementById("Port");
			var oPath = Element.getElementById("Path");
			var oListBox = Element.getElementById("ListBox1");
			var sNewUrl = oProtocol.getValue() +"|"+ oHost.getValue() +"|"+ oPort.getValue() +"|"+ oPath.getValue();
			oListBox.addItem(new ListItem({text: sNewUrl}));
			URLListValidator.add(oProtocol.getValue(), oHost.getValue(), oPort.getValue(), oPath.getValue());
			oProtocol.setValue("");
			oHost.setValue("");
			oPort.setValue("");
			oPath.setValue("");
			onChange(oEvent);
		}

		function removeFromAllowlist(oEvent){
			var oListBox = Element.getElementById("ListBox1");
			var iIndex = oListBox.getSelectedIndex();
			var oItem = oListBox.getSelectedItem();
			oListBox.removeItem(oItem);
			oItem.destroy();
			URLListValidator._delete(URLListValidator.entries()[iIndex]);
			onChange(oEvent)
		}

		function clearAllowlist(oEvent){
			var oListBox = Element.getElementById("ListBox1");
			URLListValidator.clear();
			oListBox.destroyItems();
			onChange(oEvent)
		}

		var oInput = new TextField('Input1',{
			width: "50em",
			change: onChange,
			liveChange: onLiveChange,
		});
		var oLabel = new Label({ text: "URL: ", labelFor: oInput});
		oLabel.placeAt("target0");
		oInput.placeAt("target0");

		// allowlist
		oLabel = new Label({ text: "Allowlist: "});
		oLabel.placeAt("target1");
		var oListBox = new ListBox("ListBox1",{
			width: "50em",
			visibleItems: 10,
			editable: true
		}).placeAt("target1");
		fillListBox();

		oLabel.setLabelFor(oListBox);
		var oButton = new Button("Button1",{
			text: "Refresh",
			width: "7em",
			press: fillListBox
		});
		var oButton2 = new Button("Button2",{
			text: "Remove",
			width: "7em",
			style: ButtonStyle.Reject,
			press: removeFromAllowlist
		});
		var oButton3 = new Button("Button3",{
			text: "Clear",
			width: "7em",
			style: ButtonStyle.Reject,
			press: clearAllowlist
		});

		new VerticalLayout("Layout1", {
			content: [oButton, oButton2, oButton3]
		}).placeAt("target1");

		var oRow1 = new MatrixLayoutRow("Row1");
		var oRow2 = new MatrixLayoutRow("Row2");

		new MatrixLayout("AllowlistEntry",{
			colums: 5,
			widths: ["6em", "16em", "5em", "31em", "auto"],
			rows: [oRow1, oRow2]
			}).placeAt("target2");

		oInput = new TextField('Protocol',{width: "5em"});
		oRow2.addCell(new MatrixLayoutCell({content: oInput}));
		oLabel = new Label({ text: "Protocol:", labelFor: oInput});
		oRow1.addCell(new MatrixLayoutCell({content: oLabel}));

		oInput = new TextField('Host',{width: "15em"});
		oRow2.addCell(new MatrixLayoutCell({content: oInput}));
		oLabel = new Label({ text: "Host:", labelFor: oInput});
		oRow1.addCell(new MatrixLayoutCell({content: oLabel}));

		oInput = new TextField('Port',{width: "4em"});
		oRow2.addCell(new MatrixLayoutCell({content: oInput}));
		oLabel = new Label({ text: "Port:", labelFor: oInput});
		oRow1.addCell(new MatrixLayoutCell({content: oLabel}));

		oInput = new TextField('Path',{width: "30em"});
		oRow2.addCell(new MatrixLayoutCell({content: oInput}));
		oLabel = new Label({ text: "Path:", labelFor: oInput});
		oRow1.addCell(new MatrixLayoutCell({content: oLabel}));

		var oButton = new Button("Button4",{
			text: "Add",
			style: ButtonStyle.Accept,
			press: addToAllowlist
		});
		oRow2.addCell(new MatrixLayoutCell({content: oButton}));
	});
});