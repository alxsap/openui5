sap.ui.define([
	"sap/m/Button",
	"sap/ui/core/mvc/XMLView"
], function(Button) {
	"use strict";
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
	}
	
	// Xml sample view as string
	var xml = '<mvc:View xmlns:core="sap.ui.core" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"    '
	+ '              xmlns:html="http://www.w3.org/1999/xhtml">                                '
	+ '       <Panel>                                                                          '
	+ '          <Label id="label" text="I am an apple view."></Label>                         '
	+ '       </Panel>                                                                         '
	+ '    </mvc:View>  ';
	
	// Create a normal view
	sap.ui.xmlview({viewContent:xml}).loaded()
		.then(function(oView) {
			oView.placeAt('content');
			// Create a view with preprocessor for 'xml'
			sap.ui.xmlview({
				viewContent:xml,
				async: true,
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
			sap.ui.xmlview({
				viewContent:xml,
				async: true,
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
