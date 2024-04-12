try{
	sap.ui.getCore().loadLibrary("sap.ui.commons");
}catch(e){
	alert("This test page requires the library 'sap.ui.commons' which is not available.");
	throw(e);
}

// create the controls in the head
var oLayout = new sap.ui.commons.layout.MatrixLayout({
	layoutFixed: false
});
oLayout.createRow(
	new sap.ui.commons.TextView({design:'H4', text:"Input (unsafe)"}),
	"",
	new sap.ui.commons.TextView({design:'H4', text:"Output (sanitized)"}),
	new sap.ui.commons.TextView({design:'H4', text:"HTML Control"})
);
var oTextArea = new sap.ui.commons.TextArea({
	width: '400px',
	height: '300px',
	value: '<div><br>\n<span>some <b>bold</b> or <i>italic</i> or <font size="+2">taller</font>Text</span><br>\n<a href="http://anonymous.org">Some Link</a><br>\n<script>alert("XSS attack");</' + 'script><br>\n</div>'
});
var oControls = new sap.ui.layout.VerticalLayout();
oControls.addContent(
		new sap.ui.commons.Button({
			text: "Set as content ->",
			press: function() {
				oHTML.setContent(oTextArea.getValue());
				oResultView.setValue(oHTML.getContent());
			}
		}));
oControls.addContent(
		new sap.ui.commons.CheckBox({
			text: "Sanitize",
			change: function() {
				oHTML.setSanitizeContent(this.getChecked());
			}
		}));
var oHTML = new sap.ui.core.HTML({});
var oResultView = new sap.ui.commons.TextArea({
	width: '400px',
	height: '300px',
	value: ''
});
oLayout.createRow(oTextArea, oControls, oResultView, oHTML);
oLayout.placeAt("content");