sap.ui.define([
	"sap/ui/core/HTML",
	"sap/ui/core/IconPool",
	"sap/m/Bar",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/ToggleButton",
	"sap/m/OverflowToolbar",
	"sap/m/Toolbar"
], function(HTML, IconPool, Bar, Button, mobileLibrary, ToggleButton, OverflowToolbar, Toolbar) {
	"use strict";

	// shortcut for sap.m.ToolbarDesign
	const ToolbarDesign = mobileLibrary.ToolbarDesign;

	// shortcut for sap.m.ButtonType
	const ButtonType = mobileLibrary.ButtonType;

	new HTML({content: "<span id='bars1'>Bar</span></br>"}).placeAt("barBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b", {
		configurable: "false",
		writable: "true",

		value: new Bar({
			contentLeft: [
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Def",
					enabled: true
				}),
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Def Dis",
					enabled: false
				}),
				new Button({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "Btn Accept",
					enabled: false
				}),
				new Button({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "Btn Accept",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "ToggleBtn Accept",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "ToggleBtn Accept",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('barBtn')
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b2", {
		configurable: "false",
		writable: "true",

		value: new Bar({
			contentLeft: [
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Button Trans",
					enabled: true
				}),
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Button Trans Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false,
					pressed: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph",
					enabled: true,
					pressed: true
				})
			]
		}).placeAt('barBtn')
	});

	new HTML({content: "</br></br>Transparent OverflowToolbar</br>"}).placeAt("barBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b5", {
		configurable: "false",
		writable: "true",

		value: new OverflowToolbar({
			design: "Transparent",
			content: [
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Trans",
					enabled: true
				}),
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Trans Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph Dis",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('barBtn')
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b6", {
		configurable: "false",
		writable: "true",

		value: new OverflowToolbar({
			design: "Transparent",
			content: [
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default",
					enabled: true
				}),
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject",
					enabled: true,
					pressed: true
				}),
				new Button({
					type: ButtonType.Up,
					icon: "sap-icon://home",
					text: "Btn Up",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Up,
					icon: "sap-icon://home",
					text: "ToggleBtn Up",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Back,
					icon: "sap-icon://home",
					text: "ToggleBtn Back",
					enabled: true,
					pressed: false
				})
			]
		}).placeAt('barBtn')
	});

	new HTML({content: "</br></br>OverflowToolbar</br>"}).placeAt("barBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b5_2", {
		configurable: "false",
		writable: "true",

		value: new OverflowToolbar({
			content: [
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Trans",
					enabled: true
				}),
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Trans Dis",
					enabled: false
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph Dis",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('barBtn')
	});

	new HTML({content: "<span id='bars2'>ToolBar</span></br>"}).placeAt("barBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b7", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			content: [
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default",
					enabled: true
				}),
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default Dis",
					enabled: false
				}),
				new Button({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "Btn Accept",
					enabled: true
				}),
				new Button({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "Btn Reject Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Default",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject",
					enabled: true,
					pressed: false
				})
			]
		}).placeAt('barBtn')
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b8", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			content: [
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Transparent",
					enabled: true
				}),
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Transparent",
					enabled: false
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					enabled: true,
					pressed: true
				})
			]
		}).placeAt('barBtn')
	});

	new HTML({content: "</br></br>Transparent ToolBar</br>"}).placeAt("barBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b9", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			design: ToolbarDesign.Transparent,
			content: [
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default",
					enabled: true
				}),
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default Dis",
					enabled: false
				}),
				new Button({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "Btn Accept",
					enabled: true
				}),
				new Button({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "Btn Reject Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Default",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject",
					enabled: true,
					pressed: false
				})
			]
		}).placeAt('barBtn')
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b10", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			design: ToolbarDesign.Transparent,
			content: [
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Transparent",
					enabled: true
				}),
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Transparent",
					enabled: false
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					enabled: true,
					pressed: true
				})
			]
		}).placeAt('barBtn')
	});

	new HTML({content: "</br></br>Solid ToolBar</br>"}).placeAt("barBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b11", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			design: ToolbarDesign.Solid,
			content: [
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default",
					enabled: true
				}),
				new Button({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "Btn Default Dis",
					enabled: false
				}),
				new Button({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "Btn Accept",
					enabled: true
				}),
				new Button({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "Btn Accept",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Default",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject Dis",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject",
					enabled: true,
					pressed: false
				})
			]
		}).placeAt('barBtn')
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b12", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			design: ToolbarDesign.Solid,
			content: [
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Transparent",
					enabled: true
				}),
				new Button({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "Btn Transparent",
					enabled: false
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent",
					enabled: false,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					enabled: true,
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					enabled: true,
					pressed: true
				})
			]
		}).placeAt('barBtn')
	});
});