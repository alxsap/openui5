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

		var iStartWidth = 0,
			aWidthsToTest = [1000, 0, 100, 200, 300, 400, 50],
			iJumpsInPxls = 5,
			iNextWidth = iStartWidth - (iStartWidth % iJumpsInPxls);

		(function fnRecursiveloop(aWidthsToTest) {
			var iTargetWidth = aWidthsToTest.shift();
			if (iTargetWidth !== undefined) {
				for(iNextWidth = iStartWidth - (iStartWidth % iJumpsInPxls); iNextWidth !== iTargetWidth; iNextWidth = (iTargetWidth > iStartWidth) ? iNextWidth + iJumpsInPxls : iNextWidth - iJumpsInPxls) {
					setTimeout(function(iNextWidth) { document.getElementById("opLayout-opwrapper").pageYOffset = iNextWidth; }, 0, iNextWidth);
				}
				iStartWidth = iNextWidth;
				setTimeout(function() {
					document.getElementById("opLayout-opwrapper").pageYOffset = iNextWidth;
					fnRecursiveloop(aWidthsToTest, iStartWidth, iJumpsInPxls);
				}, 500);
			}
		}) (aWidthsToTest, iStartWidth, iJumpsInPxls);
	});
}