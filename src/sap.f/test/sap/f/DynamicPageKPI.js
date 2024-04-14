sap.ui.define([
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/XMLView"
], function(jQuery0) {
	"use strict";
	(function (jQuery) {
		sap.ui.xmlview({viewContent:jQuery0('#view1').html()}).placeAt("content");
	}(jQuery0))
});
