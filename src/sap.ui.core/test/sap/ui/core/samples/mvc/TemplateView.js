try{
	sap.ui.getCore().loadLibrary("sap.ui.commons");
}catch(e){
	alert("This test page requires the library 'sap.ui.commons' which is not available.");
	throw(e);
}

jQuery(function() {
	// set application namespace. Views and controller are loaded relative to this page
	sap.ui.loader.config({paths:{"sap/ui/core/mvctest": "./"}});

	new sap.ui.commons.Button({text:"Destroy View",press:function(){
		view.destroy();
	}}).placeAt("functions");

	new sap.ui.commons.Button({text:"Create View",press:function(){
		var view = sap.ui.view({viewName:"sap.ui.core.mvctest.Test",type:sap.ui.core.mvc.ViewType.Template});
		view.placeAt("content");
	}}).placeAt("functions");

	new sap.ui.commons.Button({text:"Re-render View",press:function(){
		view.invalidate();
	}}).placeAt("functions");

	// define View and place it onto the page
	var view = sap.ui.view({id:"myView",viewName:"sap.ui.core.mvctest.Test",type:sap.ui.core.mvc.ViewType.Template});
	view.placeAt("content");
});