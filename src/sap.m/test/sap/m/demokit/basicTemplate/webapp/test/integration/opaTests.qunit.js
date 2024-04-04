/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function() {
	"use strict";

	sap.ui.require([
		"sap/ui/demo/basicTemplate/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
}));
