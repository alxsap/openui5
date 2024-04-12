	// Vertical Scrollbar
var oVSB = new sap.ui.core.ScrollBar("vertSB");
oVSB.setVertical(true);
oVSB.setSize("200px");
oVSB.setScrollPosition(0);
oVSB.setSteps(100);
oVSB.attachScroll(function(oEvent) {
	jQuery.sap.log.debug("vertical scroll position: " + oVSB.getScrollPosition());
	jQuery("#owner").scrollTop(oVSB.getScrollPosition());
});


oVSB.placeAt("target1");


// Horizontal Scrollbar
var oHSB = new sap.ui.core.ScrollBar("horiSB");
oHSB.setVertical(false);
oHSB.setSize("200px");
oHSB.setScrollPosition(50);
oHSB.attachScroll(function(oEvent) {
	jQuery.sap.log.debug("horizontal scroll position: " + oHSB.getScrollPosition());
	jQuery("#owner").scrollLeft(oHSB.getScrollPosition());
});
oHSB.placeAt("target2");


jQuery(function() {
	var $owner = jQuery("#owner");
	oVSB.setContentSize($owner[0].scrollHeight +'px').bind($owner[0]);
	oHSB.setContentSize($owner[0].scrollWidth +'px').bind($owner[0]);
	$owner.scrollTop(oVSB.getScrollPosition()).scrollLeft(oHSB.getScrollPosition());

//	jQuery("#vertSB-sb").on("scroll",function(){jQuery("#owner").scrollTop(oVSB.getScrollPosition());});
	//alert(jQuery("#owner").scrollTop());
//	jQuery("#testResult").html("StepSize (FF only): " + jQuery("#vertSB-ffsize").outerHeight());
});