sap.ui.define([
  "sap/ui/core/ComponentContainer",
  "sap/ui/core/Component"
], function(ComponentContainer) {
  "use strict";
  // Note: the HTML page 'ComponentSample.html' loads this module via data-sap-ui-on-init

  sap.ui.localResources("samples");

  var oComponent = sap.ui.component({
	  manifestUrl: "samples/components/sample/manifest.json"
  });

  var oContainer = new ComponentContainer({
	  component : oComponent
  });
  oContainer.placeAt("target");
});