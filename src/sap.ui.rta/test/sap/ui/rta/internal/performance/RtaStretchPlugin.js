var __sPathPrefix = document.location.pathname.match(/(.*)\/test-resources\//)[1];

window["sap-ui-config"] = window["sap-ui-config"] || {};
window["sap-ui-config"].onInit = "module:rta/performance/stretch/main";
window["sap-ui-config"].async = "true";
window["sap-ui-config"].libs = "sap.ui.rta, sap.ui.dt, sap.m, sap.ui.layout";
window["sap-ui-config"].resourceroots = {
	"rta.performance": "./",
	"dt.performance": "../../../../../sap/ui/dt/internal/performance/",
	"test-resources": "../../../../../../test-resources"
};
window["sap-ui-config"].flexibilityServices = '[{"connector": "SessionStorageConnector"}]';

document.write('<script src="' + __sPathPrefix + '/resources/sap-ui-core.js"><' + '/script>');

window.measureApplyStylesAfterStartUpWithStretchPlugin = function() {
	sap.ui.require([
		"rta/performance/RtaPerformanceTestUtil",
		"sap/ui/core/Element",
		"sap/ui/dt/OverlayRegistry",
		"sap/base/util/restricted/_debounce",
		"sap/base/Log"
	], function(
		RtaPerformanceTestUtil,
		Element,
		OverlayRegistry,
		_debounce,
		BaseLog
	) {
		var aStack = [];
		aStack.push(new Date().getTime());

		RtaPerformanceTestUtil.startRta(Element.getElementById("visibleLayout")).then(function() {
			var iCountCall = 0;
			var bMeasurementDone = false;

			var fnDebouncedFn = _debounce(function () {
				if (!bMeasurementDone) {
					bMeasurementDone = true;
					window.wpp.customMetrics.applyStylesAfterStartWithStretch = aStack[aStack.length - 1] - aStack[0];
					BaseLog.info("ApplyStylesAfterStart = " + window.wpp.customMetrics.applyStylesAfterStartWithStretch + "ms");
					BaseLog.info("Count call = " + iCountCall);
				} else {
					BaseLog.error("Some applyStyles() calculation exceeded timeout of 2000ms");
					window.wpp.customMetrics.applyStylesAfterStartWithStretch = 10000;
				}
			}, 2000);

			OverlayRegistry.getOverlays().forEach(function (oElementOverlay) {
				oElementOverlay.attachGeometryChanged(function () {
					aStack.push(new Date().getTime());
					iCountCall++;
					setTimeout(fnDebouncedFn);
				});
			});
		});
	});
}

window.measureApplyStylesAfterStartUpWithoutStretchPlugin = function() {
	sap.ui.require([
		"rta/performance/RtaPerformanceTestUtil",
		"sap/ui/core/Element",
		"sap/ui/dt/OverlayRegistry",
		"sap/base/util/restricted/_debounce",
		"sap/base/Log"
	], function(
		RtaPerformanceTestUtil,
		Element,
		OverlayRegistry,
		_debounce,
		BaseLog
	) {
		var aStack = [];
		aStack.push(new Date().getTime());

		RtaPerformanceTestUtil.startRtaWithoutStretch(Element.getElementById("visibleLayout")).then(function() {
			aStack.push(new Date().getTime());
			var iCountCall = 0;
			var bMeasurementDone = false;

			var fnDebouncedFn = _debounce(function () {
				if (!bMeasurementDone) {
					bMeasurementDone = true;
					window.wpp.customMetrics.applyStylesAfterStartWithoutStretch = aStack[aStack.length - 1] - aStack[0];
					BaseLog.info("ApplyStylesAfterStartWithoutStretch = " + window.wpp.customMetrics.applyStylesAfterStartWithoutStretch + "ms");
					BaseLog.info("Count call = " + iCountCall);
				} else {
					BaseLog.error("Some applyStyles() calculation exceeded timeout of 2000ms");
					window.wpp.customMetrics.applyStylesAfterStartWithoutStretch = 10000;
				}
			}, 2000);

			OverlayRegistry.getOverlays().forEach(function (oElementOverlay) {
				oElementOverlay.attachGeometryChanged(function () {
					aStack.push(new Date().getTime());
					iCountCall++;
					setTimeout(fnDebouncedFn);
				});
			});
			setTimeout(fnDebouncedFn, 100);
		});
	});
}