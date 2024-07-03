window["sap-ushell-config"] = {

	defaultRenderer : "fiori2",

	bootstrapPlugins: {
		"RuntimeAuthoringPlugin" : {
			"component": "sap.ushell.plugins.rta"
		},
		"PersonalizePlugin": {
			"component": "sap.ushell.plugins.rta-personalize"
		}
	},
	renderers: {
		fiori2: {
			componentData: {
				config: {
					enableMergeAppAndShellHeaders: true,
					search: "hidden"
				}
			}
		}
	},
	applications: {
		"masterDetail-display": {
			"additionalInformation": "SAPUI5.Component=sap.ui.rta.test.embeddedComponent",
			"applicationType": "URL",
			"url": "../",
			"description": "Embedded Component Test App",
			"title": "UI Flexibility",
			"applicationDependencies": {
				"self": { name: "sap.ui.rta.test.embeddedComponent" },
				"manifest": true,
				"asyncHints": {
					"libs": [
						{ "name": "sap.ui.core" },
						{ "name": "sap.m" },
						{ "name": "sap.ui.dt" },
						{ "name": "sap.ui.rta" },
						{ "name": "sap.ui.layout" },
						{ "name": "sap.ui.comp" }
					]
				}
			}
		}
	},
	services: {
		EndUserFeedback: {
			adapter: {
				config: {
					enabled: true
				}
			}
		}
	}
};

var __sPathPrefix = document.location.pathname.match(/(.*)\/test-resources\//)[1];

document.write('<script src="' + __sPathPrefix + '/resources/sap/ushell/bootstrap/sandbox2.js" id="sap-ushell-bootstrap"><' + '/script>');

window['sap-ui-config'] = window['sap-ui-config'] || {};
window['sap-ui-config'].theme = 'sap_belize';
window['sap-ui-config'].libs = 'sap.m,sap.ushell,sap.ui.rta';
window['sap-ui-config'].compatVersion = 'edge';
window['sap-ui-config'].frameOptions = 'allow';
window['sap-ui-config'].resourceroots = {"sap.ui.rta.test": "./../../", "flpSandboxConfig": "./flpSandboxConfig"};
window['sap-ui-config'].flexibilityServices = '[{"connector": "LocalStorageConnector"}]';
window['sap-ui-config'].onInit = 'module:flpSandboxConfig/appStart';
document.write('<script src="' + __sPathPrefix + '/resources/sap-ui-core.js"><' + '/script>');