sap.ui.require(["sap/ui/core/Core"],function(Core) {

	Core.ready().then(function() {

		sap.ui.define("test1/Component", ['sap/ui/core/UIComponent'], function(UIComponent) {
			return UIComponent.extend("test1.Component", {
				metadata : {
					includes : [ "style1.css" ]
				}
			});
		});

		sap.ui.define("test2/Component", ['sap/ui/core/UIComponent'], function(UIComponent) {
			return UIComponent.extend("test2.Component", {
				metadata : {
					includes : [ "style2.css" ]
				}
			});
		});

		sap.ui.define("test3/Component", ['sap/ui/core/UIComponent'], function(UIComponent) {
			return UIComponent.extend("test3.Component", {
				metadata : {
					includes : [ "style3.css" ]
				}
			});
		});

		sap.ui.define("test4/Component", ['sap/ui/core/UIComponent'], function(UIComponent) {
			return UIComponent.extend("test4.Component", {
				metadata : {
					includes : [ "style3.css" ]
				}
			});
		});

		var oManifest = {
			"sap.app": {
				"id": "test3",
				"type": "application",
				"applicationVersion": {
					"version": "1.0.0"
				}
			},
			"sap.ui5": {
				"resources": {
					"css": [
						{
							"uri": "style3.css"
						}
					]
				}
			}
		};

		var oManifestAppdescr = {
			"sap.app": {
				"id": "test3-variant",
				"type": "application",
				"applicationVersion": {
					"version": "1.0.0"
				}
			},
			"sap.ui5": {
				"componentName": "test3",
				"resources": {
					"css": [
						{
							"uri": "style4.css"
						}
					]
				},
				"extends": {
					"component": "test3",
					"extensions": {
						"sap.ui.viewExtensions": {
							"": {}
						}
					}
				}
			}
		};

		var oManifestAppdescr1 = jQuery.extend(true, {}, oManifestAppdescr, {
			"sap.ui5": {
				"componentName": "test3",
				"resources": {
					"css": [
						{
							"uri": "style3.css"
						}
					]
				}
			}
		});

		// use the fake server to load manifest from the model above
		oServer = sinon.fakeServer.create();

		oServer.xhr.useFilters = true;
		oServer.xhr.addFilter(function(method, url) {
			return "GET" == method && /manifest(1)?\.(json|appdescr)\?sap-language\=EN/i.test(url) ? false : true;
		});

		oServer.autoRespond = true;
		oServer.respondWith("GET", "manifest.json?sap-language=EN", [
			200,
			{
				"Content-Type": "application/json"
			},
			JSON.stringify(oManifest)
		]);
		oServer.respondWith("GET", "manifest.appdescr?sap-language=EN", [
			200,
			{
				"Content-Type": "application/json"
			},
			JSON.stringify(oManifestAppdescr)
		]);
		oServer.respondWith("GET", "manifest1.appdescr?sap-language=EN", [
			200,
			{
				"Content-Type": "application/json"
			},
			JSON.stringify(oManifestAppdescr1)
		]);

		// execution
		sap.ui.require(['sap/ui/core/Component'], function(Component) {

			var oComponent = sap.ui.component({
				name: "test1"
			});
			console.log(oComponent);

			Promise.resolve(oComponent).then(function(oComponent) {
				console.error(jQuery("link[href$='/style1.css']").length === 1);
				return oComponent;
			}).then(function(oComponent) {
				oComponent.destroy();
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return sap.ui.component({
					name: "test2"
				});
			}).then(function(oComponent) {
				console.error(jQuery("link[href$='/style2.css']").length === 1);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return oComponent;
			}).then(function(oComponent) {
				oComponent.destroy();
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return sap.ui.component({
					name: "test3"
				});
			}).then(function(oComponent) {
				console.error(jQuery("link[href$='/style3.css']").length === 1);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return oComponent;
			}).then(function(oComponent) {
				oComponent.destroy();
				console.error(jQuery("link[href$='/style3.css']").length === 0);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return sap.ui.component({
					manifestUrl: "manifest.json",
					async: true
				});
			}).then(function(oComponent) {
				console.error(jQuery("link[href$='/style3.css']").length === 1);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return oComponent;
			}).then(function(oComponent) {
				oComponent.destroy();
				console.error(jQuery("link[href$='/style3.css']").length === 0);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return sap.ui.component({
					manifestUrl: "manifest.json",
					async: true
				});
			}).then(function(oComponent) {
				console.error(jQuery("link[href$='/style3.css']").length === 1);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return oComponent;
			}).then(function(oComponent) {
				oComponent.destroy();
				console.error(jQuery("link[href$='/style3.css']").length === 0);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return sap.ui.component({
					manifestUrl: "manifest.appdescr",
					async: true
				});
			}).then(function(oComponent) {
				console.error(jQuery("link[href$='/style4.css']").length === 1);
				console.error(jQuery("link[href$='/style3.css']").length === 0);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return oComponent;
			}).then(function(oComponent) {
				oComponent.destroy();
				console.error(jQuery("link[href$='/style4.css']").length === 0);
				console.error(jQuery("link[href$='/style3.css']").length === 0);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				return sap.ui.component({
					name: "test3"
				});
			}).then(function(oComponent3) {
				var oComponent4 = sap.ui.component({
					name: "test4"
				});
				console.error(jQuery("link[href$='/style4.css']").length === 0);
				console.error(jQuery("link[href$='/style3.css']").length === 2);
				console.error(jQuery("link[href$='/style2.css']").length === 0);
				console.error(jQuery("link[href$='/style1.css']").length === 0);
				oComponent4.destroy();
				console.error(jQuery("link[href$='/style3.css']").length === 1);
				oComponent3.destroy();
				console.error(jQuery("link[href$='/style3.css']").length === 0);
				return sap.ui.component({
					name: "test3"
				});
			}).then(function(oComponent3) {
				console.error(jQuery("link[href$='/style3.css']").length === 1);
				return sap.ui.component({
					manifestUrl: "manifest1.appdescr",
					async: true
				});
			}).then(function(oComponent3Variant) {
				console.error(jQuery("link[href$='/style3.css']").length === 2);
				oComponent3Variant.destroy();
				console.error(jQuery("link[href$='/style3.css']").length === 1);
			});

			// TODO add test which includes 2 components with the same style.css

		});
	});

});