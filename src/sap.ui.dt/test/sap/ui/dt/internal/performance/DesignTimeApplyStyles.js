window.wpp = {
	customMetrics: {}
};
window.fnResolve;
window.onAppReady = new Promise(function (fnResolve) {
	window.fnResolve = fnResolve;
});

sap.ui.define([
	"dt/performance/PerformanceTestUtil",
	"sap/m/Panel",
	"sap/m/Button",
	"sap/ui/core/Core",
	"sap/ui/qunit/utils/nextUIUpdate"
], function(
	PerformanceTestUtil,
	Panel,
	Button,
	Core,
	nextUIUpdate
) {
	"use strict";
	Core.ready().then(async () => {
		var oPanel = new Panel("Panel", {
			width: "2000px",
			height: "2000px"
		});
		oPanel.placeAt("content");
		var oLastElement = new Button("button", {text: "sampleButton"});
		PerformanceTestUtil.createNestedPanels(oPanel, "content", 50, oLastElement);
		await nextUIUpdate();
		fnResolve(PerformanceTestUtil.startDesignTime(oPanel, "button"));
	});
});

window.measureApplyStylesSync = function () {
	sap.ui.require([
		"sap/ui/dt/OverlayRegistry",
		"sap/base/Log"
	], function(
		OverlayRegistry,
		BaseLog
	){
		var oRootOverlay = OverlayRegistry.getOverlay("Panel");

		oRootOverlay.attachEventOnce("geometryChanged", function () {
			performance.mark("applyStyles.stop");
			performance.measure("ApplyStylesSync", "applyStyles.start", "applyStyles.stop");
			window.wpp.customMetrics.applyStylesSync = performance.getEntriesByName("ApplyStylesSync")[0].duration;
			BaseLog.info("ApplyStylesSync = ", window.wpp.customMetrics.applyStylesSync + "ms");
		});

		oRootOverlay.attachEventOnce("beforeGeometryChanged", function () {
			performance.mark("applyStyles.start");
		});

		oRootOverlay.getElement().setWidth("2500px");
	});
}

window.measureApplyStylesAsync = function () {
	sap.ui.require([
		"sap/ui/dt/OverlayRegistry",
		"sap/base/Log"
	], function (
		OverlayRegistry,
		BaseLog
	) {
		var oRootOverlay = OverlayRegistry.getOverlay("Panel");
		oRootOverlay.attachEventOnce("geometryChanged", function () {
			oRootOverlay.attachEventOnce("beforeGeometryChanged", function () {
				performance.mark("applyStyles.start");
			});
			oRootOverlay.getElement().$('content').get(0).scrollTop = 200;
			oRootOverlay.getElement().setWidth("2100px");
			oRootOverlay.attachEventOnce("geometryChanged", function() {
				performance.mark("applyStyles.stop");
				performance.measure("ApplyStylesAsync", "applyStyles.start", "applyStyles.stop");
				window.wpp.customMetrics.applyStylesAsync = performance.getEntriesByName("ApplyStylesAsync")[0].duration;
				BaseLog.info("ApplyStylesAsync = ", window.wpp.customMetrics.applyStylesAsync + "ms");
			});
		});

		oRootOverlay.getElement().getContent()[0].setHeight("2500px");
	});
}