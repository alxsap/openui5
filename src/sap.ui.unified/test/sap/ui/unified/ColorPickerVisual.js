var oCP;

var oSelect = new sap.m.Select('select_mode', {
	items: [
		new sap.ui.core.Item("default_mode", {
			text: 'Default',
			key: sap.ui.unified.ColorPickerDisplayMode.Default
		}),
		new sap.ui.core.Item("large_mode", {
			text: 'Large',
			key: sap.ui.unified.ColorPickerDisplayMode.Large
		}),
		new sap.ui.core.Item("simplified_mode", {
			text: 'Simplified',
			key: sap.ui.unified.ColorPickerDisplayMode.Simplified
		})
	],
	change: function(oEvent) {
		var sColorPickerDisplayMode = oEvent.getParameter('selectedItem').getKey();
		oCP.setDisplayMode(sColorPickerDisplayMode);
	}
});

app: new sap.m.App({
	pages: [
		new sap.m.Page("ColorPickerArea", {
			showHeader:false,
			content: [
				new sap.ui.layout.VerticalLayout({
					width: "100%",
					content: [
						new sap.m.Label({text: "HSL:"}),
						new sap.ui.layout.HorizontalLayout({
							width: "100%",
							content: [
								oCP = new sap.ui.unified.ColorPicker("cp", {
									colorString: "azure",
									mode: sap.ui.unified.ColorPickerMode.HSL
								}),
								new sap.m.Button("remove_focus_btn", {
									text: "focus",
									press: function () {
										document.activeElement.blur();
									}
								})
							]
						}),
						oSelect,
						new sap.m.ToggleButton("hsv_hsl_btn", {
							text: "Toggle HSV/HSL",
							press: function () {
								oCP.setMode(sap.ui.unified.ColorPickerMode[this.getPressed() ? 'HSV':'HSL']);
							}
						})
					]
				})
			]
		}).addStyleClass("sapUiResponsiveContentPadding")
	]
}).placeAt("content");