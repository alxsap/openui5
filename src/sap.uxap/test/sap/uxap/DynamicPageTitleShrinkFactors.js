sap.ui.define([
  "sap/ui/core/Core",
  "sap/m/App",
  "sap/m/Page",
  "sap/ui/thirdparty/jquery",
  "sap/ui/core/mvc/XMLView",
  "sap/ui/core/mvc/Controller"
], function(Core, App, Page, jQuery0) {
  "use strict";
  // Note: the HTML page 'DynamicPageTitleShrinkFactors.html' loads this module via data-sap-ui-on-init

  (function (jQuery, App, Page) {
	  sap.ui.controller("myController", {
		  onInit: function() {
			  this.view = this.getView();
			  this.titleSlider = this.view.byId('titleSlider');
			  this.contentSlider = this.view.byId('contentSlider');
			  this.actionsSlider = this.view.byId('actionsSlider');
		  },

		  // implement an event handler in the Controller
		  changeShrinkRatio: function(oEvent) {
			  var oView = this.getView(),
				  sAreaShrinkRatio = this.titleSlider.getValue() + ":"
									  + this.contentSlider.getValue() + ":"
									  + this.actionsSlider.getValue();

			  oView.byId('dynamicPageTitle').setAreaShrinkRatio(sAreaShrinkRatio);
		  }
	  });

	  Core.ready(function () {
		  var oApp = new App(),
			  myView = sap.ui.xmlview({viewContent: jQuery0('#view1').html()});

		  oApp.addPage(new Page({
			  title: "New Header",
			  content: [myView]
		  })).placeAt("content");
	  });

  }(jQuery0, App, Page));
});