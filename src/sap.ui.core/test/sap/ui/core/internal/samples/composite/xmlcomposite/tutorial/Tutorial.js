sap.ui.define([
	"composites/SimpleText",
	"composites/TextButton",
	"composites/TextList",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/tutorial/composites/SimpleText",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/tutorial/composites/TextButton",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/tutorial/composites/TextList",
	"sap/ui/core/Item",
	"sap/m/Button",
	"sap/m/Link"
], function(SimpleText, TextButton, TextList, CompositesSimpleText, CompositesTextButton, CompositesTextList, Item, Button, Link) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oSimpleText", {
		configurable: "false",
		writable: "true",
		value: new CompositesSimpleText({text : "Hello World"})
	});

	oSimpleText.placeAt("simpleText");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTextButton", {
		configurable: "false",
		writable: "true",
		value: new CompositesTextButton({text : "green"})
	});

	oTextButton.placeAt("textButton");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTextList", {
		configurable: "false",
		writable: "true",
		value: new CompositesTextList()
	});

	oTextList.addText(new Item({text: "Text Item 1"}));
	oTextList.addText(new Item({text: "Text Item 2"}));
	oTextList.addText(new Item({text: "Text Item 3"}));
	oTextList.addText(new Item({text: "Item 4"}));
	oTextList.setOuterButton(new Button({text: "Add another Item", press:function() {
		oTextList.addText(new Item({text: "Text Item " + oTextList.getTexts().length}));
	}}));
	oTextList.placeAt("textList");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTextList2", {
		configurable: "false",
		writable: "true",
		value: new CompositesTextList()
	});

	oTextList2.addText(new Item({text: "Text Item 1"}));
	oTextList2.addText(new Item({text: "Text Item 2"}));
	oTextList2.addText(new Item({text: "Text Item 3"}));
	oTextList2.addText(new Item({text: "Item 4"}));
	oTextList2.addOuterLink(new Link({text: "Link 1"}));
	oTextList2.addOuterLink(new Link({text: "Link 2"}));
	oTextList2.addOuterLink(new Link({text: "Link 3"}));
	oTextList2.addOuterLink(new Link({text: "Add another Link", press:function() {
	 	oTextList2.insertOuterLink(new Link({text: "Link " + oTextList2.getOuterLinks().length}), oTextList2.getOuterLinks().length - 1);
	 }}));
	oTextList2.placeAt("textListWithLinks");
});