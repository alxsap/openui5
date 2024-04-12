sap.ui.define([
	"sap/m/Text",
	"sap/m/Button",
	"sap/ui/unified/ShellHeader",
	"sap/ui/unified/ShellLayout",
	"sap/ui/unified/ShellHeadItem",
	"sap/ui/unified/ShellHeadUserItem",
	"sap/m/Input",
	"sap/m/CheckBox"
], function(Text, Button, ShellHeader, ShellLayout, ShellHeadItem, ShellHeadUserItem, Input, CheckBox) {
	"use strict";
	function createContent(sText){
		var aContent = [];
		aContent.push(new Text({text: sText}));
		aContent.push(new Button({
			text: "Pane",
			press: function(){
				oShell.setShowPane(!oShell.getShowPane());
			}
		}));
		aContent.push(new Button({
			text: "CurtainPane",
			press: function(){
				oShell.setShowCurtainPane(!oShell.getShowCurtainPane());
			}
		}));
		aContent.push(new Button({
			text: "HeaderHiding",
			press: function(){
				oShell.setHeaderHiding(!oShell.getHeaderHiding());
			}
		}));
		aContent.push(new Button({
			text: "Curtain",
			press: function(){
				oShell.setShowCurtain(!oShell.getShowCurtain());
			}
		}));
		aContent.push(new Button({
			text: "HeaderVisible",
			press: function(){
				oShell.setHeaderVisible(!oShell.getHeaderVisible());
			}
		}));
		return aContent;
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oHeader", {
		configurable: "false",
		writable: "true",
		value: new ShellHeader()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oShell", {
		configurable: "false",
		writable: "true",

		value: new ShellLayout({
			header: oHeader,
			content: createContent("Content"),
			paneContent: createContent("Pane")
		})
	});

	oShell.placeAt("content");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aContent", {
		configurable: "false",
		writable: "true",
		value: createContent("Curtain")
	});

	for(var i=0; i<aContent.length; i++){
		oShell.addCurtainContent(aContent[i]);
	}
	aContent = createContent("CurtainPane");
	for(var i=0; i<aContent.length; i++){
		oShell.addCurtainPaneContent(aContent[i]);
	}

	//*******************

	function itemPressed(oEvent) {
		alert("Item pressed");
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oAddItem", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Add Header Item",
			press: function(){
				oHeader.addHeadItem(new ShellHeadItem({
					icon: oImage.getSelected() ? "../images/icon.gif" : "sap-icon://search",
					press: itemPressed
				}));
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oAddEndItem", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Add Header End Item",
			press: function(){
				oHeader.addHeadEndItem(new ShellHeadItem({
					icon: oImage.getSelected() ? "../images/icon.gif" : "sap-icon://search",
					press: itemPressed
				}));
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oAddUserItem", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Add User Item",
			press: function(){
				if(oHeader.getUser()){
					oHeader.destroyUser();
				}
				oHeader.setUser(new ShellHeadUserItem({
					image: oImage.getSelected() ? "../images/person.jpg" : "sap-icon://person-placeholder",
					username: oUsername.getValue(),
					tooltip: "User item tooltip",
					press: itemPressed
				}));
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oSetLogo", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Set Logo",
			press: function(){
				oHeader.setLogo("images/testlogo_200x50.png");
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oSetSearch", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Set Search",
			press: function(){
				if(!oHeader.getSearch()){
					oHeader.setSearch(createTestSearchField("search", function(){alert("Search triggered")}));
				}
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oUsername", {
		configurable: "false",
		writable: "true",

		value: new Input({
			value: "Karl Mustermann",
			width: "200px",
			change: function(){
				if(oHeader.getUser()){
					oHeader.getUser().setUsername(oUsername.getValue());
				}
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oImage", {
		configurable: "false",
		writable: "true",
		value: new CheckBox({text: "Use Image"})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oClear", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Clear",
			press: function(){
				oHeader.destroyUser();
				oHeader.destroySearch();
				oHeader.destroyHeadEndItems();
				oHeader.destroyHeadItems();
				oHeader.setLogo("");
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aAdditionalContent", {
		configurable: "false",
		writable: "true",

		value: [oAddItem, oAddEndItem, oAddUserItem,
								  oSetLogo, oSetSearch,
								  oUsername, oImage, oClear]
	});

	for(var i=0; i<aAdditionalContent.length; i++){
		oShell.addContent(aAdditionalContent[i]);
	}
});