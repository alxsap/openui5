/*!
 * ${copyright}
 */

// reflects changes from code editor to the card in the example page
(function () {
	"use strict";

	/**
	 * Listens for message with the <code>src</code> of the live-edited sample to be applied
	 */
	window.addEventListener("message", function (oEvent) {
		// We must verify that the origin of the sender of the message matches our
		// expectations. In this case, we only accept messages
		// from same origin, so we can simply compare the origin of the message event
		// to the location of this document. If we get a message from an
		// unexpected host, ignore the message entirely.

		if (oEvent.origin !== (window.location.protocol + "//" + window.location.host)) {
			return;
		}
		var oData = oEvent.data;

		if (!oData || !oData.manifest) {
			return;
		}

		sap.ui.getCore().attachInit(function () {
			var oComponent = null;

			if (oComponent) {
				var oView = oComponent.getRootControl(),
					oCard1 = oView.byId("listCardId1"),
					oCard2 = oView.byId("objectCardId1");

				oCard1.setManifest(JSON.parse(oData.listCardManifest));
				oCard2.setManifest(JSON.parse(oData.objectCardManifest));
			}
		})/*Not inside AMD call*/;
	});
})();