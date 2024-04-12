jQuery(function() {
	sap.ui.require([
		"dt/performance/PerformanceTestUtil",
		"sap/ui/layout/VerticalLayout",
		"sap/ui/layout/HorizontalLayout"
	], function(
		PerformanceTestUtil,
		VerticalLayout,
		HorizontalLayout
	){
		//create Vertical Layout
		var oLayout = new VerticalLayout("visibleLayout", {});
		PerformanceTestUtil.addMixedControlsTo(oLayout, 1, 500, true /*visible*/);
		PerformanceTestUtil.addMixedControlsTo(oLayout, 1001, 2000, false /*invisible*/);

		oInvisibleLayout = new VerticalLayout("invisibleLayout", {
			visible : false
		});
		PerformanceTestUtil.addMixedControlsTo(oInvisibleLayout, 2001, 3000, true /*visible*/);

		var oHorizontalLayout = new HorizontalLayout("HorizontalLayout", {
			content : [oLayout, oInvisibleLayout]
		});
		oHorizontalLayout.placeAt("content");
	});

});