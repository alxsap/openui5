sap.ui.define(["sap/m/P13nPanel", "sap/ui/core/mvc/XMLView"], function(P13nPanel) {
	"use strict";

	QUnit.module("sap.m.P13nPanel: Initialization via JS", {
		beforeEach: function () {
		},
		afterEach: function () {
		}
	});
	QUnit.test("Test", function (assert) {
		assert.ok(new P13nPanel(), "Note: currently it is allowed to create an abstract class");
	});

	QUnit.module("sap.m.P13nPanel: Initialization via XML", {
		beforeEach: function () {
		},
		afterEach: function () {
		}
	});
	QUnit.test("Test", function (assert) {
		var sXml = [
			'<core:View xmlns:core="sap.ui.core" xmlns:m="sap.m" xmlns="http://www.w3.org/1999/xhtml">',
			'	<m:P13nPanel/>',
			'</core:View>'
		].join('');
		return sap.ui.xmlview({
			async: false,
			viewContent: sXml
		}).loaded().then(function (oView) {
			assert.ok(oView);
			assert.ok(oView.getContent()[0], "Note: currently it is allowed to create an abstract class");
			assert.equal(oView.getContent()[0].getMetadata().getName(), "sap.m.P13nPanel");
		});
	});

});