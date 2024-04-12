var oShell= new sap.m.Shell("myShell", {
	title: "My Application",
	logo: "images/SAPUI5.png",
	showLogout: false
});

var oApp = new sap.m.SplitApp("myApp", {
	masterPages: new sap.m.Page("page1", {
		title: "Some Master"
	}),
	detailPages: new sap.m.Page("page2", {
		title: "Some Detail",
		content: [
			new sap.m.HBox({items:[
				new sap.m.Label({
					text: "Logo: "
				}),
				new sap.m.Button({
					text: "SAPUI5 Logo",
					press: function() {
						oShell.setLogo("images/SAPUI5.png");
					}
				}),
				new sap.m.Button({
					text: "SAP big",
					press: function() {
						oShell.setLogo("images/SAPLogo@2.jpg");
					}
				}),
				new sap.m.Button({
					text: "SAP small",
					press: function() {
						oShell.setLogo("images/SAPLogo.jpg");
					}
				}),
				new sap.m.Button({
					text: "Wide Logo",
					press: function() {
						oShell.setLogo("images/wide-logo.png");
					}
				}),
				new sap.m.Button({
					text: "Tall Logo",
					press: function() {
						oShell.setLogo("images/tall-logo.png");
					}
				}),
				new sap.m.Button({
					text: "NO Logo",
					press: function() {
						oShell.setLogo("");
					}
				})
			]}),
			new sap.m.HBox({items:[
				new sap.m.Label({
					text: "Limit App Width: "
				}),
				new sap.m.Switch({
					state: true,
					change: function(oEvent) {
						var bLimit = oEvent.getParameter("state");
						oShell.setAppWidthLimited(bLimit);
					}
				})
			]})
		]
	})
});

oShell.setApp(oApp);
oShell.placeAt("content");