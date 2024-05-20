sap.ui.define([
  "sap/ui/core/mvc/XMLView",
  "sap/m/Button"
], async function(XMLView, Button) {
  "use strict";
  // Note: the HTML page 'ViewPreprocessor.html' loads this module via data-sap-ui-on-init

  // Define sample preprocessor functions
  var fnXmlPreprocessor = function(xml, info, settings) {
	  return new Promise(function(resolve) {
		  setTimeout(function() {
			  alert(info.id + ": " + settings.message);
			  // Convert apples to oranges
			  var sXml = new XMLSerializer().serializeToString(xml);
			  sXml = sXml.replace("apple", "orange");
			  resolve(new DOMParser().parseFromString(sXml, "application/xml").documentElement);
		  }, 500); // Timeout just for the effect :)
	  });
  },
  fnControlPreprocessor = function(controls, info, settings) {
	  return new Promise(function(resolve) {
		  setTimeout(function() {
			  alert(info.id + ": " + settings.message);
			  // Some manipulation of the control tree
			  var oPanel = controls.getContent()[0];
			  oPanel.removeAllContent();
			  oPanel.addContent(new Button({
				  text: "Apple View",
				  icon: "sap-icon://nutrition-activity",
				  press: function() {
					  alert("Fruit alert!");
				  }
			  }));
			  resolve(/*return value is irrelevant for 'controls'*/);
		  }, 500); // Timeout just for the effect :)
	  });
  };

  // Xml sample view as string
  var xml = '<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" >'
  + '       <Panel>'
  + '          <Label id="label" text="I am an apple view."></Label>'
  + '       </Panel>'
  + '    </mvc:View>  ';

  // Create a normal view
  (await XMLView.create({definition:xml})).loaded()
	  .then(function(oView) {
		  oView.placeAt('content');
		  // Create a view with preprocessor for 'xml'
		  XMLView.create({
			  definition:xml,

			  preprocessors: {
				  xml: {
					  preprocessor: fnXmlPreprocessor,
					  message: "'xml' preprocessor running"
				  }
			  }
		  }).loaded()
	  .then(function(oView) {
		  oView.placeAt('xmlContent');
		  // Create a view with preprocessor for 'controls'
		  XMLView.create({
			  definition:xml,

			  preprocessors: {
				  controls: {
					  preprocessor: fnControlPreprocessor,
					  message: "'controls' preprocessor running"
				  }
			  }
		  }).loaded()
	  .then(function(oView) {
			  oView.placeAt('controlsContent');
		  });
	  });
  });
});