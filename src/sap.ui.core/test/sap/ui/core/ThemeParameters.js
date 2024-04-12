sap.ui.define(
	["sap/ui/core/theming/Parameters", "sap/ui/commons/ListBox", "sap/ui/core/ListItem"],
	function(Parameters, ListBox, ListItem) {
		"use strict";
		sap.ui.reuire(["sap/ui/core/Theming"], function(Theming) {
			try{
				sap.ui.getCore().loadLibrary("sap.ui.commons");
			}catch(e){
				alert("This test page requires the library 'sap.ui.commons' which is not available.");
				throw(e);
			}

			var oListBox = new ListBox({
				height : "480px",
				displaySecondaryValues: true
			}).placeAt("content");


			function fetchParameters() {
				var mAllParameters = Parameters.get();

				oListBox.destroyItems();
				for (var name in mAllParameters) {
					oItem = new ListItem();
					oItem.setText(name);
					oItem.setAdditionalText(mAllParameters[name]);
					oListBox.addItem(oItem);
				}
			}


			// react on theme change
			Theming.attachApplied(function(evt){
				fetchParameters();
			});


			fetchParameters();
		});
	}
);