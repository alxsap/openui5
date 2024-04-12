sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"composites/DeepBinding2",
	"sap/m/Panel",
	"sap/m/HBox",
	"sap/m/Button",
	"test-resources/sap/ui/core/internal/samples/composite/xmlcomposite/forwarding/composites/DeepBinding2",
	"sap/m/VBox"
], function(JSONModel, DeepBinding2, Panel, HBox, Button, CompositesDeepBinding2, VBox) {
	"use strict";

	// create some dummy JSON data
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "data", {
		configurable: "false",
		writable: "true",

		value: {
			groups:
			[{
				title: "Group 0",
				content: [
					{ firstName: "Christian", lastName: "Mueller" },
					{ firstName: "Petra", lastName: "Maier" }
				]
			},
			{
				title: "Group 1",
				content: [
					{ firstName: "Thomas", lastName: "Smith" },
					{ firstName: "John", lastName: "Williams" },
					{ firstName: "Maria", lastName: "Jones" }
				]
			}]

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

	oPanel = new Panel({ id: "panel" });
	oPanel.setHeaderText("Standard control...");
	oPanel.bindAggregation("content", {
		path: "/groups",
		template: new Panel({
			headerText: "{title}",
			content: new HBox({
				items: {
					path: "content",
					template: new Button({ text: "{firstName} {lastName}" })
				}
			})
		})
	});

	oPanel2 = new Panel({ id: "panel2" });
	oPanel2.setHeaderText("XMLComposite control ...");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oDeepBinding", {
		configurable: "false",
		writable: "true",
		value: new CompositesDeepBinding2({ id: "deepBinding" })
	});

	oDeepBinding.bindAggregation("fcItems", {
		path: "/groups",
		template: new Panel({
			headerText: "{title}",
			content: new HBox({
				items: {
					path: "content",
					template: new Button({ text: "{firstName} {lastName}" })
				}
			})
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vBox", {
		configurable: "false",
		writable: "true",
		value: new VBox()
	});

	vBox.addItem(oPanel);
	vBox.addItem(oPanel2.addContent(oDeepBinding));
	vBox.placeAt("content");
});