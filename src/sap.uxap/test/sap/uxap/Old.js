sap.ui.define([
  "sap/ui/core/Core",
  "sap/m/App",
  "sap/m/Page",
  "sap/ui/thirdparty/jquery",
  "sap/ui/core/mvc/XMLView"
], function(Core, App, Page, jQuery0) {
  "use strict";
  // Note: the HTML page 'Old.html' loads this module via data-sap-ui-on-init

  (function (jQuery, App, Page) {
	  Core.ready(function() {
		  var oApp = new App(),
			  myView = sap.ui.xmlview({viewContent: jQuery0('#view1').html()});

		  oApp.addPage(new Page({
			  title: "Old Header",
			  content: [myView]
		  })).placeAt("content");
	  });
  }(jQuery0, App, Page));
});