/*global QUnit */
/*eslint no-undef:1, no-unused-vars:1, strict: 1 */
sap.ui.define([
	"sap/ui/qunit/utils/createAndAppendDiv",
	"sap/ui/core/Core",
	"sap/ui/qunit/utils/nextUIUpdate",
	"sap/ui/webc/main/CheckBox"
], function(createAndAppendDiv, Core, nextUIUpdate, CheckBox) {
	"use strict";

	createAndAppendDiv("uiArea");

	QUnit.module("Rendering", {
		beforeEach: async function() {
			this.oCheckBox = new CheckBox({
				text: "Some text...",
				valueState: "Warning",
				change: function(oEvent) {
					// console.log("Event change fired for CheckBox with parameters: ", oEvent.getParameters());
				}
			});
			this.oCheckBox.placeAt("uiArea");
			await nextUIUpdate();
		},
		afterEach: function() {
			this.oCheckBox.destroy();
			this.oCheckBox = null;
		}
	});

	QUnit.test("Should render", function(assert) {
		assert.ok(this.oCheckBox.$(), "Rendered");
	});
});