sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function () {

	sap.ui.require([
		"sap/f/ShellBar",
		"sap/m/OverflowToolbar"
	], function (ShellBar) {

		var oControl,
			iInitialWidth = parseInt(window.location.hash.replace(/^#/, ""));

		if (!iInitialWidth) {
			iInitialWidth = 100;
		}

		jQuery("#center").width(iInitialWidth + "%");
		setTimeout(function () {
			oControl.setWidth(iInitialWidth + "%");
		}, 0);

		new sap.m.App({
			pages: [
				new sap.m.Page({
					showHeader: false,
					content: [
						oControl = new sap.ui.layout.VerticalLayout({
							content: [

								new ShellBar({
									homeIcon: sap.ui.require.toUrl("sap/ui/documentation/sdk/images/logo_sap.png"),
									title: "Main title some long long title ds dsa sd dasdas ",
									secondTitle: "Second title must alsoa dads",
									showCopilot: true,
									showNavButton: true,
									showMenuButton: true,
									searchManager: new sap.f.SearchManager(),
									showProductSwitcher: true,
									showNotifications: true,
									notificationsNumber: "2",
									profile: new sap.m.Avatar({
										initials: "DN"
									}),
									menu: new sap.m.Menu({
										title: "random 2",
										items: [
											new sap.m.MenuItem({
												text: "fridge",
												icon: "sap-icon://fridge",
												items: [
													new sap.m.MenuItem({
														text: "accidental leave",
														icon: "sap-icon://accidental-leave",
														items: [
															new sap.m.MenuItem({
																icon: "sap-icon://factory",
																text: "factory"
															}),
															new sap.m.MenuItem({
																icon: "sap-icon://flag",
																text: "flag"
															}),
															new sap.m.MenuItem({
																icon: "sap-icon://flight",
																text: "flight"
															})
														]
													}),
													new sap.m.MenuItem({
														text: "iphone",
														icon: "sap-icon://iphone",
														items: [
															new sap.m.MenuItem({
																icon: "sap-icon://video",
																text: "video"
															}),
															new sap.m.MenuItem({
																icon: "sap-icon://loan",
																text: "loan"
															}),
															new sap.m.MenuItem({
																icon: "sap-icon://commission-check",
																text: "commission check"
															}),
															new sap.m.MenuItem({
																icon: "sap-icon://doctor",
																text: "doctor"
															})
														]
													})
												]
											}),
											new sap.m.MenuItem({
												text: "globe",
												icon: "sap-icon://globe",
												items: [
													new sap.m.MenuItem({
														text: "e-care",
														icon: "sap-icon://e-care"
													})
												]
											})
										]
									}),
									additionalContent: [
										new sap.m.OverflowToolbarButton({icon: "sap-icon://home", text: "home", type: "Transparent"}),
										new sap.m.OverflowToolbarButton({icon: "sap-icon://action-settings", text: "Action settings", type: "Transparent"}),
										new sap.m.OverflowToolbarButton({icon: "sap-icon://add-photo", text: "Add photo", type: "Transparent"})
									]
								})

							]
						}),
						new sap.m.Slider({
							value: iInitialWidth,
							liveChange: function () {
								var iWidth = this.getValue();

								oControl.setWidth(iWidth + "%");
								jQuery("#center").width(iWidth + "%");
								window.location.hash = iWidth;
							}
						})
					]
				})
			]
		}).placeAt("content");

	});

}));