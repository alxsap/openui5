sap.ui.define([
], function() {
	"use strict";
	try{
		sap.ui.getCore().loadLibrary("sap.ui.commons");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}

	test = {
	
			handleEvent: function() {
				alert("EVENT");
			}
	
	}
});
