sap.ui.define(["xml/WrapperLayouter", "sap/ui/core/XMLComposite"], function(WrapperLayouter, XMLComposite) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "Wrapper", {
		configurable: "false",
		writable: "true",

		value: XMLComposite.extend("Wrapper", {
			constructor: function (sId, mSettings) {
				XMLComposite.apply(this, arguments);
			},
			fragment: "xml.wrapper",
			renderer: "sap.ui.core.XMLCompositeRenderer"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oWrapper", {
		configurable: "false",
		writable: "true",
		value: new Wrapper("layout")
	});

	//	oWrapper.addStyleClass("heigth100percent");
	oWrapper.setHeight("100%");
	oWrapper.placeAt("body");

	// two inline-block
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oWrapper2", {
		configurable: "false",
		writable: "true",
		value: new Wrapper("layout2")
	});

	oWrapper2.setWidth("200px");
	oWrapper2.setDisplayBlock(false);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oWrapper3", {
		configurable: "false",
		writable: "true",
		value: new Wrapper("layout3")
	});

	oWrapper3.setWidth("200px");
	oWrapper3.setDisplayBlock(false);

	// the next two will be block elements
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oWrapper4", {
		configurable: "false",
		writable: "true",
		value: new Wrapper("layout4")
	});

	oWrapper4.setWidth("200px");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oWrapper5", {
		configurable: "false",
		writable: "true",
		value: new Wrapper("layout5")
	});

	oWrapper5.setWidth("200px");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oo", {
		configurable: "false",
		writable: "true",
		value: new WrapperLayouter()
	});

	oo.addItem(oWrapper2).addItem(oWrapper3).addItem(oWrapper4).addItem(oWrapper5);
	oo.placeAt("body");
});