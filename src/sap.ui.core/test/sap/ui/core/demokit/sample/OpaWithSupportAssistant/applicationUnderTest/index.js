sap.ui.require(["sap/ui/core/Core", "sap/m/Shell", "sap/ui/core/ComponentContainer"], function(Core, Shell, ComponentContainer) {
	"use strict";
	Core.ready().then(function () {
		new Shell('Shell', {
			title: 'Application under test',
			app: new ComponentContainer({
				name: 'appUnderTest',
				settings : {
					id : "appUnderTest"
				}
			})
		}).placeAt('content');
	});
});