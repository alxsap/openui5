function createRequest() {
	var oReq = new XMLHttpRequest();
	oReq.open("GET", "../../../../resources/sap-ui-core.js");
	oReq.send();
}

var oApp = new sap.m.App("myApp", {
	pages: new sap.m.Page("page", {
		title: "FESR Testpage",
		content: [
			new sap.m.HBox({
				items: [
					new sap.m.Button({
						text: "1. Interaction",
						press: function() {
							createRequest();
						}
					}),
					new sap.m.Button({
						text: "2. Interaction",
						press: function() {
							createRequest();
							createRequest();
						}
					}),
					new sap.m.Button({
						text: "3. Interaction",
						press: function() {
							createRequest();
							createRequest();
							createRequest();
						}
					}),
					new sap.m.Button({
						text: "4. Interaction",
						press: function() {
							createRequest();
							createRequest();
							createRequest();
							createRequest();
						}
					}),
					new sap.m.Button({
						text: "5. Interaction",
						press: function() {
							createRequest();
							createRequest();
							createRequest();
							createRequest();
							createRequest();
						}
					}),
					new sap.m.Button({
						text: "Stop Interaction",
						press: function() {
							createRequest();
							createRequest();
							createRequest();
							createRequest();
							createRequest();
							createRequest();
						}
					})
				]
			})
		]
	})
});
oApp.placeAt("content");