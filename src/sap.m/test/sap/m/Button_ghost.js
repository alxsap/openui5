sap.ui.define([
	"sap/ui/core/HTML",
	"sap/ui/core/IconPool",
	"sap/m/App",
	"sap/m/Page",
	"sap/m/Toolbar",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/ToggleButton",
	"sap/m/Bar",
	"sap/m/OverflowToolbar"
], function(HTML, IconPool, App, Page, Toolbar, Button, mobileLibrary, ToggleButton, Bar, OverflowToolbar) {
	"use strict";

	// shortcut for sap.m.ToolbarDesign
	const ToolbarDesign = mobileLibrary.ToolbarDesign;

	// shortcut for sap.m.ButtonType
	const ButtonType = mobileLibrary.ButtonType;

	new App({
		pages: new Page("page", {
			title: "Ghost Buttons",
			footer: new Toolbar({
				content: [
					new Button({
						type: ButtonType.Ghost,
						icon: "sap-icon://home",
						text: "Button Ghost",
						enabled: true
					}),
					new Button({
						type: ButtonType.Ghost,
						icon: "sap-icon://home",
						text: "Button Ghost Dis",
						enabled: false
					}),
					new ToggleButton({
						type: ButtonType.Ghost,
						icon: "sap-icon://home",
						text: "ToggleBtn Ghost",
						enabled: true
					}),
					new ToggleButton({
						type: ButtonType.Ghost,
						icon: "sap-icon://home",
						text: "ToggleBtn Ghost Dis",
						enabled: false
					}),
					new ToggleButton({
						type: ButtonType.Ghost,
						icon: "sap-icon://home",
						text: "ToggleBtn Ghost",
						enabled: true,
						pressed: true
					}),
					new ToggleButton({
						type: ButtonType.Ghost,
						icon: "sap-icon://home",
						text: "ToggleBtn Ghost Dis",
						enabled: false,
						pressed: true
					})
				]
			})
		})
	}).placeAt("content");


	new HTML({content: "</br></br>Transparent type Buttons</br>"}).placeAt("page");

	////////////////////////// TRANSPARENT //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton7", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			enabled: true
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton8", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Ghost,
			text: "Button Type Ghost",
			enabled: true
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton9", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			text: "Button Type Ghost",
			enabled: true
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton10", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton11", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Ghost,
			text: "Button Type Ghost",
			enabled: false
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton12", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			text: "Button Type Ghost",
			enabled: false
		}).placeAt("page")
	});

	new HTML({content: "</br></br>Ghost type ToggleButtons</br>"}).placeAt("page");

	////////////////////////// TRANSPARENT //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton7", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			enabled: true
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton8", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			text: "ToggleButton Type Ghost",
			enabled: true
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton9", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			text: "ToggleButton Type Ghost",
			enabled: true
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton10", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton11", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			text: "ToggleButton Type Ghost",
			enabled: false
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton12", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			text: "ToggleButton Type Ghost",
			enabled: false
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton9p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			text: "ToggleButton Type Ghost",
			enabled: true,
			pressed: true
		}).placeAt("page")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton10p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Ghost,
			icon: "sap-icon://home",
			text: "ToggleButton Type Ghost",
			enabled: false,
			pressed: true
		}).placeAt("page")
	});

	new HTML({content: "</br></br>Ghost type Buttons in Bar</br>"}).placeAt("page");

	////////////////////////// GHOST IN BAR //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b2", {
		configurable: "false",
		writable: "true",

		value: new Bar({
			contentLeft: [
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Button Ghost",
					enabled: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Button Ghost Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost Dis",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('page')
	});

	new HTML({content: "</br></br>Transparent OverflowToolbar</br>"}).placeAt("page");

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
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost Dis",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('page')
	});

	new HTML({content: "</br></br>OverflowToolbar</br>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b5_2", {
		configurable: "false",
		writable: "true",

		value: new OverflowToolbar({
			content: [
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost Dis",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost Dis",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('page')
	});

	new HTML({content: "</br></br>ToolBar</br>"}).placeAt("page");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "b8", {
		configurable: "false",
		writable: "true",

		value: new Toolbar({
			content: [
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('page')
	});

	new HTML({content: "</br></br>Transparent ToolBar</br>"}).placeAt("page");

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
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('page')
	});

	new HTML({content: "</br></br>Solid ToolBar</br>"}).placeAt("page");

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
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: true
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: false
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: true,
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					enabled: false,
					pressed: true
				})
			]
		}).placeAt('page')
	});
});