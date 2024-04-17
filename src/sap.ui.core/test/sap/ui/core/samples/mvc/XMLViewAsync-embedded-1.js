sap.ui.require(["sap/ui/core/Element", "sap/ui/core/mvc/XMLView", "sap/ui/commons/TextField", "sap/ui/commons/Button", "sap/ui/thirdparty/jquery"], function(Element, XMLView, TextField, Button, jQuery) {
	try{
		sap.ui.getCore().loadLibrary("sap.ui.commons");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}

	// this test page is not below "resources", but "test-resources"
	// usually this redirect is NOT needed - but possible if useful
	sap.ui.loader.config({paths: {"sap/ui/core/mvctest": "../../../../../../test-resources/sap/ui/core/samples/mvc/"}});

	var sXml;
	jQuery.ajax({
		url : "../../../../../../test-resources/sap/ui/core/samples/mvc/views/Async.view.xml",
		success : function(data) {
			sXml = new XMLSerializer().serializeToString(data);
		},
		async : false
	});

	var xhr = sinon.useFakeXMLHttpRequest();
	xhr.useFilters = true;
	xhr.addFilter(function(method, url) {
		return url.indexOf("sap/ui/core/samples/mvc/views/Async.view.xml") == -1;
	});
	xhr.onCreate = function(request) {
		request.onSend = function() {
			var iDelay = Element.getElementById("timeout").getValue();
			iDelay = parseInt(iDelay, 10);

			_setTimeout(function() {
				request.respond(200,  { "Content-Type" : "application/xml" }, sXml);
			}, iDelay);
		};
	};

	new TextField("timeout", {
		value : "1000"
	}).placeAt("asyncInput");

	new Button("showButton", {
		text : "Show / rerender View",
		press : function(oEvent) {
			var oView = Element.getElementById("asyncView");
			if (oView) {
				oView.destroy();
			}

			XMLView.create({
				id : "asyncView",
				viewName : "sap.ui.core.mvctest.views.Async"
			}).placeAt("contentAsync");
		}
	}).placeAt("asyncButton");

	/*
	* View and place it onto the page
	*/
	sap.ui.xmlview({
		id : "syncView",
		viewName : "sap.ui.core.mvctest.views.Product"
	}).placeAt("contentSync");
});