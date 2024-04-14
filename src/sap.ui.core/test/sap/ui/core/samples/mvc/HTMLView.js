sap.ui.define([
	"sap/ui/commons/Button",
	"sap/ui/core/mvc/ViewType",
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/View"
], function(Button, ViewType, jQuery) {
	"use strict";
	try{
		sap.ui.getCore().loadLibrary("sap.ui.commons");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}
	
	jQuery(function() {
		// set application namespace. Views and controller are loaded relative to this page
		sap.ui.loader.config({paths:{"sap/ui/core/mvctest": "./"}});
	
		new Button({text:"Destroy View",press:function(){
			view.destroy();
			view2.destroy();
		}}).placeAt("functions");
	
		new Button({text:"Create View",press:function(){
			var view = sap.ui.view({id:"myView",viewName:"sap.ui.core.mvctest.Test",type:ViewType.HTML});
			view.placeAt("content");
			var view2 = sap.ui.view({id:"id2",viewContent:html, type:ViewType.HTML});
			view2.placeAt("content2");
		}}).placeAt("functions");
	
		new Button({text:"Re-render View",press:function(){
			view.invalidate();
			view2.invalidate();
		}}).placeAt("functions");
	
		// define View and place it onto the page
		var view = sap.ui.view({id:"myView",viewName:"sap.ui.core.mvctest.Test",type:ViewType.HTML});
		view.placeAt("content");
	
		var html = '<template data-controller-name="sap.ui.core.mvctest.Test">	<div id="htmlRoot">THIS IS A TEST</div>	<div>		<div id="htmlNested">NESTED WORKS AS WELL</div>		<div class="test test2 test3" data-sap-ui-type="sap.ui.commons.Panel" id="myPanel">			<div class="test test2 test3" data-sap-ui-type="sap.ui.commons.Button" id="Button1" data-text="Hello World" data-press="doIt"></div>			<div data-sap-ui-type="sap.ui.commons.Button" id="Button2" data-text="Hello"></div>			<div data-sap-ui-type="sap.ui.core.mvc.HTMLView" id="MyHTMLView" data-view-name="sap.ui.core.mvctest.Test2"></div>		</div>	</div></template>';
		var view2 = sap.ui.view({id:"id2",viewContent:html, type:ViewType.HTML});
		view2.placeAt("content2");
	});
});
