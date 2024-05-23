/*!
 * ${copyright}
 */

/**
 * Require boot.js asynchronous. Actually this is not possible as bundle
 * configuration so a helper is needed for now.
 * @private
 * @ui5-restricted sap.ui.core
 */
(() => {
	"use strict";
	sap.ui.require(["sap/ui/core/Core"]);
})();