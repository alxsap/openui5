sap.ui.define([
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/mvc/Controller"
], function(jQuery) {
	"use strict";
	try {
		sap.ui.getCore().loadLibrary("sap.ui.commons");
	} catch (e) {
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw (e);
	}
	try {
		sap.ui.getCore().loadLibrary("sap.ui.layout");
	} catch (e) {
		alert("This test page requires the library 'sap.ui.layout' which is not available.");
		throw (e);
	}
	
	sap.ui.controller("my.own.controller", {});
	var myView = sap.ui.xmlview({viewContent: jQuery('#view1').html()});
	myView.placeAt("content");
});
