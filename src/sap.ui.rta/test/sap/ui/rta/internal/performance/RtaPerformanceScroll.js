var __sPathPrefix = document.location.pathname.match(/(.*)\/test-resources\//)[1];

window["sap-ui-config"] = window["sap-ui-config"] || {};
window["sap-ui-config"].onInit = "module:rta/performance/scroll/main";
window["sap-ui-config"].async = "true";
window["sap-ui-config"].libs = "sap.ui.rta, sap.ui.dt, sap.m, sap.ui.layout, sap.ui.fl, sap.uxap";
window["sap-ui-config"].resourceroots = {
	"rta.performance": "./",
	"dt.performance": "../../../../../sap/ui/dt/internal/performance/",
	"test-resources": "../../../../../../test-resources"
};
window["sap-ui-config"].flexibilityServices = '[{"connector": "SessionStorageConnector"}]';

document.write('<script src="' + __sPathPrefix + '/resources/sap-ui-core.js"><' + '/script>');

function startScrollTest() {
	sap.ui.require([
		"dt/performance/PerformanceTestUtil"
	], function(
		DtPerformanceTestUtil
	) {
		DtPerformanceTestUtil.measureApplyStylePerformance("applyStylesScroll", 2000);

		let iStartWidth = 0;
		const aWidthsToTest = [1000, 0, 100, 200, 300, 400, 50];
		const iStep = 5;

		(function fnRecursiveLoop(aWidthsToTest) {
			const iTargetWidth = aWidthsToTest.shift();
			let iNewWidth = iStartWidth;
			if (iTargetWidth !== undefined) {
				do {
					iNewWidth = (iTargetWidth > iStartWidth) ? iNewWidth + iStep : iNewWidth - iStep;
					setTimeout(function() {
						document.getElementById("opLayout-opwrapper").scrollTop = iNewWidth;
					}, 0);
				} while (iNewWidth !== iTargetWidth);

				iStartWidth = iTargetWidth
				setTimeout(fnRecursiveLoop.bind(null, aWidthsToTest), 500);
			}
		}) (aWidthsToTest);
	});
}