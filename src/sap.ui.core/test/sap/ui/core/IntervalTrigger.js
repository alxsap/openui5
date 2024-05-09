sap.ui.define([
  "sap/ui/core/IntervalTrigger",
  "sap/ui/commons/ButtonRenderer",
  "sap/ui/core/Control",
  "sap/ui/commons/Label",
  "sap/ui/commons/Button",
  "sap/ui/commons/layout/MatrixLayout"
], function(IntervalTrigger, ButtonRenderer, Control, Label, Button, MatrixLayout) {
  "use strict";
  // Note: the HTML page 'IntervalTrigger.html' loads this module via data-sap-ui-on-init

  try {
	  sap.ui.getCore().loadLibrary("sap.ui.commons");
  } catch (e) {
	  alert("This test page requires the library 'sap.ui.commons' which is not available.");
	  throw (e);
  }

  var triggerCounter = 0;

  Control.extend("mySampleListener", {
	  metadata : {
		  properties : {
			  "index" : "int"
		  }
	  },

	  renderer : {
		  apiVersion: 2,
		  render: function(oRm, oControl) {
			  oRm.openStart("div", oControl);
			  oRm.class("sampleListener");
			  oRm.openEnd();

			  oRm.text("Lorem Ipsum")

			  oRm.close("div");
		  }
	  },

	  onclick : function(oEvent) {
		  this.trigger();
	  },

	  trigger : function() {
		  triggerCounter += 1;
		  oLbl.setText("Call back calls: " + triggerCounter);

		  var oThis = this;
		  oThis.$().css("background-color", "green");

		  setTimeout(function() {
			  oThis.$().css("background-color", "red");
		  }, 500);
	  }
  });

  var oLbl = new Label({
	  text : "Call back calls: " + triggerCounter
  }).placeAt("counter");

  function removeListener(oTriggerBtn) {
	  var index = oTriggerBtn.getIndex();
	  oTrigger.removeListener(aListeners[index].trigger, aListeners[index]);
  }

  var oTrigger = new IntervalTrigger();

  Button.extend("myTriggerButton", {
	  metadata : {
		  properties : {
			  "index" : "int",
		  }
	  },

	  renderer : sap.ui.commons.ButtonRenderer.render
  });

  var aListeners = [];
  var oBtn = {};
  var oLayout = new MatrixLayout().placeAt("triggers");

  for ( var i = 0; i < 10; i++) {
	  aListeners[i] = new mySampleListener();
	  oBtn = new myTriggerButton({
		  text : "Remove from trigger",
		  index : i,
		  press : function() {
			  removeListener(this);
		  }
	  });

	  oLayout.createRow(aListeners[i], oBtn);
	  oTrigger.addListener(aListeners[i].trigger, aListeners[i]);
  }

  new Button({
	  text : "Start trigger",
	  press : function() {
		  oTrigger.setInterval(1000);
	  }
  }).placeAt("attachIntervalBtn");
});