// generate many resource roots to stress the technical info dialog
window["sap-ui-config"] = {
	resourceRoots : (function() {
		var roots = {};
		for( var i=0; i<100; i++) {
			roots["sap.lib" + i] = "resources/sap/lib" + (100-i);
		}
		return roots;
	}())
};