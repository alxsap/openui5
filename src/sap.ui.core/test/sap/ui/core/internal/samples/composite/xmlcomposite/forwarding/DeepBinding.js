sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/Item",
	"composites/DeepBinding",
	"composites/MySelect",
	"composites/MySelect2",
	"composites/MySelect3",
	"composites/MySelectWrapper",
	"sap/m/Panel",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/DeepBinding",
	"sap/m/Button",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/MySelect",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/MySelect2",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/MySelect3",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/MySelectWrapper"
], function(
	JSONModel,
	Item,
	DeepBinding,
	MySelect,
	MySelect2,
	MySelect3,
	MySelectWrapper,
	Panel,
	CompositesDeepBinding,
	Button,
	CompositesMySelect,
	CompositesMySelect2,
	CompositesMySelect3,
	CompositesMySelectWrapper
) {
	"use strict";

	// create some dummy JSON data
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "data", {
		configurable: "false",
		writable: "true",

		value: {
			names: [
				{ firstName: "Christian", lastName: "1st" },
				{ firstName: "Petra", lastName: "2nd" },
				{ firstName: "Thomas", lastName: "3rd" },
				{ firstName: "John", lastName: "4th" },
				{ firstName: "Maria", lastName: "5th" }
			]
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "model", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	model.setData(data);
	sap.ui.getCore();

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oDeepBinding", {
		configurable: "false",
		writable: "true",
		value: new CompositesDeepBinding({ id: "deepBinding" })
	});

	oDeepBinding.setText("Hello !");
	oDeepBinding.bindAggregation("fcItems", {
		path: "/names",
		template: new Panel({
			headerText: "{$this>/text}",
			content: new Button({ text: "{lastName}" })
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPanelDeepBinding", {
		configurable: "false",
		writable: "true",
		value: new Panel({ expandable: true, expanded: false, content: oDeepBinding, headerText: "Ex A. Deep template example" })
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMySelect", {
		configurable: "false",
		writable: "true",
		value: new CompositesMySelect({ id: "mySelect" })
	});

	oMySelect.bindAggregation("myItems", {
		path: "/names",
		template: new Item({
			text: "{lastName}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPanelMySelect", {
		configurable: "false",
		writable: "true",
		value: new Panel({ expandable: true, expanded: false, content: oMySelect, headerText: "Ex B. One level list forwarding" })
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMySelect2", {
		configurable: "false",
		writable: "true",
		value: new CompositesMySelect2({ id: "mySelect2" })
	});

	oMySelect2.bindAggregation("myItems", {
		path: "/names",
		template: new Item({
			text: "{lastName}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPanelMySelect2", {
		configurable: "false",
		writable: "true",
		value: new Panel({ expandable: true, expanded: false, content: oMySelect2, headerText: "Ex C. One level list forwarding with SelectList" })
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMySelect3", {
		configurable: "false",
		writable: "true",
		value: new CompositesMySelect3({ id: "mySelect3" })
	});

	oMySelect3.bindAggregation("myItems", {
		path: "/names",
		template: new Item({
			text: "{lastName}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPanelMySelect3", {
		configurable: "false",
		writable: "true",
		value: new Panel({ expandable: true, expanded: false, content: oMySelect3, headerText: "Ex D. One level (in reality two) list forwarding with Select" })
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMySelectWrapper", {
		configurable: "false",
		writable: "true",
		value: new CompositesMySelectWrapper({ id: "mySelectWrapper" })
	});

	oMySelectWrapper.bindAggregation("fcItems", {
		path: "/names",
		template: new Item({
			text: "{lastName}"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPanelMySelectWrapper", {
		configurable: "false",
		writable: "true",
		value: new Panel({ expandable: true, expanded: false, content: oMySelectWrapper, headerText: "Ex E. Two level list forwarding" })
	});

	oPanelDeepBinding.placeAt("content");
	oPanelMySelect.placeAt("content");
	oPanelMySelect2.placeAt("content");
	oPanelMySelect3.placeAt("content");
	oPanelMySelectWrapper.placeAt("content");
});