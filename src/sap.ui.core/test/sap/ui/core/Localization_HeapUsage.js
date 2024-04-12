sap.ui.require([
	"sap/ui/thirdparty/jquery",
	"sap/base/util/UriParameters",
	"sap/base/i18n/ResourceBundle"
], function(jQuery, UriParameters, ResourceBundle) {
	var data = [];
	var sLocale = UriParameters.fromQuery(window.location.search).get("sap-ui-language") || "";

	function loadi18n(lib) {
		var sUri = sap.ui.require.toUrl((lib + '.messagebundle').replace(/\./g, "/")) + ".properties";
		return ResourceBundle.create({
			url: sUri,
			locale: sLocale
		});
	}

	// try to enforce code compilation
	for ( var i = 0; i < 10; i++ ) {
		loadi18n('sap.ui.commons');
	}

	jQuery('#readall').on("click", function() {

		// the following libs represents a typical set of libraries used in a Fiori environment

		// ---- openui5
		data.push( loadi18n('sap.ui.core') ) ;
		data.push( loadi18n('sap.ui.layout') ) ;
		data.push( loadi18n('sap.ui.unified') ) ;
		//data.push( loadi18n('sap.f') ) ; // no texts currently
		data.push( loadi18n('sap.m') ) ;
		data.push( loadi18n('sap.ui.table') ) ;
		data.push( loadi18n('sap.uxap') ) ;

		// ---- outside openui5 ---
		data.push( loadi18n('sap.ui.comp') ) ;
		data.push( loadi18n('sap.suite.ui.microchart') ) ;
		data.push( loadi18n('sap.ui.generic.app') ) ;
		//data.push( loadi18n('sap.ui.generic.template') ) ; // no texts currently

	});
});