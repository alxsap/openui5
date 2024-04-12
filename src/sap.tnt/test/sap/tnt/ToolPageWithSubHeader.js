sap.ui.define(["sap/ui/thirdparty/jquery", "sap/ui/core/mvc/XMLView", "sap/ui/core/mvc/Controller"], function(jQuery) {
	"use strict";
	sap.ui.controller("myController", {
		onInit: function() {}
	});
	sap.ui.xmlview({ viewContent: jQuery('#myXml').html() }).placeAt("content");
});