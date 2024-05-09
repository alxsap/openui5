sap.ui.define([
  "sap/ui/core/mvc/XMLView",
  "sap/ui/thirdparty/jquery",
  "sap/ui/core/mvc/Controller"
], async function(XMLView, jQuery) {
  "use strict";
  // Note: the HTML page 'LabelEnablement.html' loads this module via data-sap-ui-on-init

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
  var myView = await XMLView.create({definition: jQuery('#view1').html()});
  myView.placeAt("content");
});