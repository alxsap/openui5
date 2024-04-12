var __sPathPrefix = document.location.pathname.match(/(.*)\/test-resources\//)[1];

window["sap-ui-config"] = window["sap-ui-config"] || {};
window["sap-ui-config"].onInit = "module:rta/performance/dragAndDrop/main";
window["sap-ui-config"].async = "true";
window["sap-ui-config"].libs = "sap.ui.rta, sap.ui.dt, sap.m, sap.ui.layout, sap.ui.fl";
window["sap-ui-config"].resourceroots = {
	"rta.performance": "./",
	"dt.performance": "../../../../../sap/ui/dt/internal/performance/",
	"test-resources": "../../../../../../test-resources"
};
window["sap-ui-config"].flexibilityServices = '[{"connector": "SessionStorageConnector"}]';

document.write('<script src="' + __sPathPrefix + '/resources/sap-ui-core.js"><' + '/script>');

function startDragAndDrop() {
	sap.ui.require([
		"dt/performance/PerformanceTestUtil"
	], function(
		DtPerformanceTestUtil
	) {
		jQuery.get("./dragAndDrop/dragDropEvents.json")
		.done(function(aEvents) {
			DtPerformanceTestUtil.measureApplyStylePerformance("applyStylesDragDrop", 3000);

			(function fnRecursiveloop(aEvents) {
				var aEvent = aEvents.shift();
				if (aEvent) {
					setTimeout(function() {
						jQuery("#" + aEvent[1]).trigger(aEvent[0]);
						fnRecursiveloop(aEvents);
					}, aEvent[0] === "dragenter" ? 50 : 0);
				}
			}) (aEvents);
		}.bind(this));
	});
}

function startResizeTest() {
	sap.ui.require([
		"dt/performance/PerformanceTestUtil"
	], function(
		DtPerformanceTestUtil
	) {
		DtPerformanceTestUtil.measureApplyStylePerformance("applyStylesResize", 2000);

		var iStartWidth = document.getElementById("content").getBoundingClientRect().width,
			aWidthsToTest = [450, 300, 650, 500],
			iJumpsInPxls = 5,
			iNextWidth = iStartWidth - (iStartWidth % iJumpsInPxls);

		(function fnRecursiveloop(aWidthsToTest) {
			var iTargetWidth = aWidthsToTest.shift();
			if (iTargetWidth) {
				for(iNextWidth = iStartWidth - (iStartWidth % iJumpsInPxls); iNextWidth !== iTargetWidth; iNextWidth = (iTargetWidth > iStartWidth) ? iNextWidth + iJumpsInPxls : iNextWidth - iJumpsInPxls) {
					setTimeout(function(iNextWidth) { document.getElementById("content").style.width = iNextWidth + 'px'; }, 0, iNextWidth);
				}
				iStartWidth = iNextWidth;
				setTimeout(function() {
					document.getElementById("content").style.width = iNextWidth + 'px';
					fnRecursiveloop(aWidthsToTest, iStartWidth, iJumpsInPxls);
				}, 100);
			}
		}) (aWidthsToTest, iStartWidth, iJumpsInPxls);
	});
}