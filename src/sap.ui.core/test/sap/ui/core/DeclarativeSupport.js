try{
	sap.ui.getCore().loadLibrary("sap.ui.commons");
}catch(e){
	alert("This test page requires the library 'sap.ui.commons' which is not available.");
	throw(e);
}

function handlePress() {
	alert("PRESS");
}

function handleChange(oEvent) {
	alert(oEvent.getSource().getValue());
}

test = {

		handleEvent: function() {
			alert("EVENT");
		}

}