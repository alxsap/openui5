sap.ui.define(function () {

	"use strict";
	return {
		name: "TestSuite for Support Assistant Rules",
		defaults: {
			qunit: {
				version: 2
			},
			ui5: {
				support: "silent",
				noConflict: true,
				debug: true,
				libs: "sap.m, sap.ui.support"
			}
		},
		tests: {
			"config/modelPreloadAndEarlyRequests": {
				title: "QUnit Tests for 'modelPreloadAndEarlyRequests' rules",
				ui5 : {
					language : "en"
				},
				loader: {
					paths: {
						"samples/components/config/modelPreloadAndEarlyRequests":
							"test-resources/sap/ui/core/samples/components/config/"
							+ "modelPreloadAndEarlyRequests/"
					}
				}
			},

			"app/controllerExtension": {
				title: "QUnit Tests for controller extensions",
				loader: {
					paths: {
						"mvc": "test-resources/sap/ui/core/qunit/mvc"
					}
				}
			},

			"app/lowerCaseControlsInViews": {
				title: "QUnit Tests for 'xmlViewLowerCaseControl' rule",
				loader: {
					paths: {
						"testdata": "test-resources/sap/ui/core/qunit/rule/testdata"
					}
				}
			},

			"misc/silentEventBus": {
				title: "QUnit Tests for 'silent event bus usage' rules"
			},

			"model/modelSupport": {
				title: "QUnit Tests for model rules"
			}
		}
	};
});
