sap.ui.define([
  "sap/ui/core/mvc/XMLView",
  "sap/ui/model/json/JSONModel",
  "sap/ui/thirdparty/jquery"
], async function(XMLView, JSONModel, jQuery) {
  "use strict";

  new JSONModel({
	  srcWithModificationsRelative: "images/Woman_avatar_01.png",
	  srcWithModificationsAbsolute: "https://sapui5.hana.ondemand.com/test-resources/sap/m/images/Woman_avatar_02.png",
	  srcWithoutModifications: "https://sapui5.hana.ondemand.com/test-resources/sap/m/images/Woman_04.png",
  });

  sap.ui.getCore();
  (await XMLView.create({ definition: jQuery('#myView').html() })).placeAt("content");
});