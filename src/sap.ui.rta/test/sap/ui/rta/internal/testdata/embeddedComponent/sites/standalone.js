window['sap-ui-config'] = window['sap-ui-config'] || {};
window['sap-ui-config'].theme = 'sap_belize';
window['sap-ui-config'].language = 'en';
window['sap-ui-config'].compatVersion = 'edge';
window['sap-ui-config'].libs = 'sap.m, sap.ui.layout, sap.ui.comp, sap.ui.rta';
window['sap-ui-config'].resourceroots = {
	"sap.ui.rta.test": "./../../"
};

var __aPrefixMatches = document.location.pathname.match(/(.*)\/test-resources\//);
var __sPathPrefix = __aPrefixMatches &&  __aPrefixMatches[1] || "";

document.write('<script src="' + __sPathPrefix + '/resources/sap-ui-core.js"><' + '/script>');

sap.ui.require([
	"sap/m/Shell",
	"sap/ui/core/ComponentContainer",
	"sap/ui/core/Core"
], function(Shell, ComponentContainer, Core) {
	Core.ready().then(() => {
		new Shell({
			app: new ComponentContainer({
				height : "100%",
				name: "sap.ui.rta.test.embeddedComponent"
			})
		}).placeAt("content");
	});
});