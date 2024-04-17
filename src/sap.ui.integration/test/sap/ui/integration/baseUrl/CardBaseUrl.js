sap.ui.define([
	"sap/ui/core/mvc/XMLView",
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/Controller"
], async function(XMLView, jQuery) {
	"use strict";
	sap.ui.controller("myController", {
		onInit: function() {
	
		}
	});
	(await XMLView.create({ definition: jQuery('#myXml').html() })).placeAt("content");
});
