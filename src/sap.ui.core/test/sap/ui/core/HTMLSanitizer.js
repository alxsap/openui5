sap.ui.define([
  "sap/ui/commons/layout/MatrixLayout",
  "sap/ui/commons/TextView",
  "sap/ui/commons/TextArea",
  "sap/ui/layout/VerticalLayout",
  "sap/ui/commons/Button",
  "sap/ui/commons/CheckBox",
  "sap/ui/core/HTML"
], function(MatrixLayout, TextView, TextArea, VerticalLayout, Button, CheckBox, HTML) {
  "use strict";
  // Note: the HTML page 'HTMLSanitizer.html' loads this module via data-sap-ui-on-init

  try{
	  sap.ui.getCore().loadLibrary("sap.ui.commons");
  }catch(e){
	  alert("This test page requires the library 'sap.ui.commons' which is not available.");
	  throw(e);
  }

  // create the controls in the head
  var oLayout = new MatrixLayout({
	  layoutFixed: false
  });
  oLayout.createRow(
	  new TextView({design:'H4', text:"Input (unsafe)"}),
	  "",
	  new TextView({design:'H4', text:"Output (sanitized)"}),
	  new TextView({design:'H4', text:"HTML Control"})
  );
  var oTextArea = new TextArea({
	  width: '400px',
	  height: '300px',
	  value: '<div><br>\n<span>some <b>bold</b> or <i>italic</i> or <font size="+2">taller</font>Text</span><br>\n<a href="http://anonymous.org">Some Link</a><br>\n<script>alert("XSS attack");</' + 'script><br>\n</div>'
  });
  var oControls = new VerticalLayout();
  oControls.addContent(
		  new Button({
			  text: "Set as content ->",
			  press: function() {
				  oHTML.setContent(oTextArea.getValue());
				  oResultView.setValue(oHTML.getContent());
			  }
		  }));
  oControls.addContent(
		  new CheckBox({
			  text: "Sanitize",
			  change: function() {
				  oHTML.setSanitizeContent(this.getChecked());
			  }
		  }));
  var oHTML = new HTML({});
  var oResultView = new TextArea({
	  width: '400px',
	  height: '300px',
	  value: ''
  });
  oLayout.createRow(oTextArea, oControls, oResultView, oHTML);
  oLayout.placeAt("content");
});