sap.ui.define([
	"sap/ui/core/HTML",
	"sap/ui/core/IconPool",
	"sap/m/library",
	"sap/m/App",
	"sap/m/Page",
	"sap/m/Bar",
	"sap/m/Button",
	"sap/m/Label",
	"sap/m/AdditionalTextButton"
], function(HTML, IconPool, mobileLibrary, App, Page, Bar, Button, Label, AdditionalTextButton) {
	"use strict";

	// shortcut for sap.m.ButtonType
	const ButtonType = mobileLibrary.ButtonType;

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sAddIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("add")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sDeleteIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("delete")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sChangeIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("cause")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sSrcIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("employee")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sSrcActiveIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("employee-lookup")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sStoreIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("retail-store")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sStoreActiveIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("cart-full")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "sNotesIconURI", {
		configurable: "false",
		writable: "true",
		value: IconPool.getIconURI("notes")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oHelper", {
		configurable: "false",
		writable: "true",

		value: {
			alert : function(sMsg) {
				//alert(sMsg);
			},
			typeDefault : function(oButton) {
				oButton.setText("Test Button To Show Changes");
				oButton.setType(ButtonType.Default);
			},
			typeUnstyled : function(oButton) {
				oButton.setText("Unstyled Button");
				oButton.setType(ButtonType.Unstyled);
			},
			typeAccept : function(oButton) {
				oButton.setText("Accept Button");
				oButton.setType(ButtonType.Accept);
			},
			typeReject : function(oButton) {
				oButton.setText("Reject Button");
				oButton.setType(ButtonType.Reject);
			},
			typeTransparent : function(oButton) {
				oButton.setText("Transparent Button");
				oButton.setType(ButtonType.Transparent);
			},
			typeGhost : function(oButton) {
				oButton.setText("Ghost Button");
				oButton.setType(ButtonType.Ghost);
			},
			typeBack : function(oButton) {
				oButton.setText("Back Button");
				oButton.setType(ButtonType.Back);
			},
			typeUp : function(oButton) {
				oButton.setText("Up Button");
				oButton.setType(ButtonType.Up);
			},
			typeEmphasized : function(oButton) {
				oButton.setText("Emphasized Button");
				oButton.setType(ButtonType.Emphasized);
			},
			setEnabled : function(oButton) {
				oButton.setEnabled( !oButton.getEnabled() );
			},
			width100Pixel : function(oButton) {
				oButton.setWidth("120px");
			},
			width300Pixel : function(oButton) {
				oButton.setWidth("300px");
			},
			width100Percent : function(oButton) {
				oButton.setWidth("100%");
			},
			width50Percent : function(oButton) {
				oButton.setWidth("50%");
			},
			widthReset : function(oButton) {
				oButton.setWidth("");
			},
			addImage : function(oButton) {
				oButton.setIcon("./images/travel_expend.png");
				oButton.setActiveIcon("./images/travel_request.png");
			},
			removeImage : function(oButton) {
				oButton.setIcon(null);
				oButton.setActiveIcon(null);
			},
			alignImage : function(oButton) {
				if (oButton.getIconFirst()) {
					oButton.setIconFirst(false);
				} else {
					oButton.setIconFirst(true);
				}
			},
			addIcon : function(oButton) {
				oButton.setIcon(sSrcIconURI);
				oButton.setActiveIcon(sSrcActiveIconURI);
			},
			removeIcon : function(oButton) {
				oButton.setIcon(null);
				oButton.setActiveIcon(null);
			},
			alignIcon : function(oButton) {
				if (oButton.getIconFirst()) {
					oButton.setIconFirst(false);
				} else {
					oButton.setIconFirst(true);
				}
			},
			changeIcon : function(oButton) {
				oButton.setIcon(sStoreIconURI);
				oButton.setActiveIcon(sStoreActiveIconURI);
			},
			hide : function(oButton) {
				oButton.setVisible(false);
			},
			show : function(oButton) {
				oButton.setVisible(true);
			},
			removeText : function(oButton) {
				oButton.setText("");
			},
			changeText : function(oButton) {
				oButton.setText("Another Button Text");
			},
			resetText : function(oButton) {
				oButton.setText("Test Button To Show Changes");
			},
			toggleTextDirection: function(oButton) {
				var sTextDir = oButton.getTextDirection();
				oButton.setTextDirection(sTextDir === "RTL" ? "LTR" : "RTL");
			}
		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oApp", {
		configurable: "false",
		writable: "true",
		value: new App("myApp", {initialPage:"myPage1"})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarButtonSample", {
		configurable: "false",
		writable: "true",
		value: null
	}), Object.defineProperty(globalThis, "oButtonBarButtonAccept", {
		configurable: "false",
		writable: "true",
		value: null
	}), Object.defineProperty(globalThis, "oButtonBarButtonReject", {
		configurable: "false",
		writable: "true",
		value: null
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oPage1", {
		configurable: "false",
		writable: "true",

		value: new Page("myPage1", {
			title: "Mobile Button Control",
			customHeader : new Bar({
				contentLeft: [ oButtonBarButtonSample = new Button('myBarButtonSample', {text:"Test Button To Show Changes", tooltip:"Tooltip Test", type:ButtonType.Default, press: function() {oHelper.alert("event: 'press' on " + oButtonBarButtonSample)} }) ],
				contentMiddle: [ new Label("myBarLabel", {text: "Button Testpage"}) ],
				contentRight: [ oButtonBarButtonIcon1 = new Button('myBarButtonIcon1', {icon: sStoreIconURI}),
								oButtonBarButtonIcon2 = new Button('myBarButtonIcon2', {icon: sNotesIconURI, enabled: false}) ]
			}),
			subHeader: new Bar({
				contentLeft: [ new Button({text:"Default", type:ButtonType.Default}) ],
				contentMiddle:[ new Button({text:"Back", type:ButtonType.Back}),
								new Button({text:"Up", type:ButtonType.Up}),
								new Button({text:"Yes", type:ButtonType.Accept}),
								new Button({text:"No", type:ButtonType.Reject}),
								new Button({text:"Trans", type:ButtonType.Transparent}) ],
				contentRight: [ new Button({icon: sStoreIconURI}),
								new Button({text:"", type:ButtonType.Default, icon: sNotesIconURI, enabled: false}) ]
			}),
			footer : new Bar({
				contentLeft: [ new Button({text:"Default", type:ButtonType.Default, icon: sStoreIconURI}),
								new Button({text:"Emphasized", type:ButtonType.Emphasized}) ],
				contentMiddle:[ new Button({text:"Back", type:ButtonType.Back}),
								new Button({text:"Up", type:ButtonType.Up}),
								new Button({text:"Yes", type:ButtonType.Accept}),
								new Button({text:"No", type:ButtonType.Reject, icon: "./images/action.png", enabled:false}),
								new Button({text:"Trans", type:ButtonType.Transparent}),
								new Button({text:"Off", type:ButtonType.Default,  icon: "sap-icon://favorite", enabled:false}) ],
				contentRight: [	new Button({icon: sStoreIconURI}),
								new Button({text:"", type:ButtonType.Default, icon: sNotesIconURI, enabled: false}) ]
			})
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oBar2", {
		configurable: "false",
		writable: "true",

		value: new Bar({
			contentLeft: [ new Button({text:"Default", type:ButtonType.Default, enabled:false}) ],
			contentMiddle:[ new Button({text:"Back", type:ButtonType.Back, enabled:false}),
							new Button({text:"Up", type:ButtonType.Up, enabled:false}),
							new Button({text:"Yes", type:ButtonType.Accept, enabled:false}),
							new Button({text:"No", type:ButtonType.Reject, enabled:false}),
							new Button({text:"Trans", type:ButtonType.Transparent, enabled:false}) ],
			contentRight: [ new Button({icon: sStoreIconURI}),
							new Button({text:"", type:ButtonType.Default, icon: sNotesIconURI, enabled: false}) ]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarDefault", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarDefault", {
			type: ButtonType.Default,
			text: "Button Type Default",
			enabled: true,
			press : function() {
				oHelper.typeDefault(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarUnstyled", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarUnstyled", {
			type: ButtonType.Default,
			text: "Button Type Unstyled",
			enabled: true,
			press : function() {
				oHelper.typeUnstyled(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarAccept", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarAccept", {
			type: ButtonType.Default,
			text: "Button Type Accept",
			enabled: true,
			press : function() {
				oHelper.typeAccept(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarReject", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarReject", {
			type: ButtonType.Default,
			text: "Button Type Reject",
			enabled: true,
			press : function() {
				oHelper.typeReject(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarTransparent", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarTransparent", {
			type: ButtonType.Default,
			text: "Button Type Transparent",
			enabled: true,
			press : function() {
				oHelper.typeTransparent(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarGhost", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarGhost", {
			type: ButtonType.Default,
			text: "Button Type Ghost",
			enabled: true,
			press : function() {
				oHelper.typeGhost(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarBack", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarBack", {
			type: ButtonType.Default,
			text: "Button Type Back",
			enabled: true,
			press : function() {
				oHelper.typeBack(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarUp", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarUp", {
			type: ButtonType.Default,
			text: "Button Type Up",
			enabled: true,
			press : function() {
				oHelper.typeUp(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarEmphasized", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarEmphasized", {
			type: ButtonType.Default,
			text: "Button Type Emphasized",
			enabled: true,
			press : function() {
				oHelper.typeEmphasized(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarEnabled", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarEnabled", {
			type: ButtonType.Default,
			text: "Disable/Enable Button",
			enabled: true,
			press : function() {
				oHelper.setEnabled(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarWidth100Pixel", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarWidth100Pixel", {
			type: ButtonType.Default,
			text: "Set width 120px",
			enabled: true,
			press : function() {
				oHelper.width100Pixel(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarWidth100Percent", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarWidth100Percent", {
			type: ButtonType.Default,
			text: "Set width 100%",
			enabled: true,
			press : function() {
				oHelper.width100Percent(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarWidth300Pixel", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarWidth300Pixel", {
			type: ButtonType.Default,
			text: "Set width 300px",
			enabled: true,
			press : function() {
				oHelper.width300Pixel(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarWidthReset", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarWidthReset", {
			type: ButtonType.Default,
			text: "Reset width",
			enabled: true,
			press : function() {
				oHelper.widthReset(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarAddImage", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarAddImage", {
			type: ButtonType.Default,
			text: "Add Image",
			icon: "./images/action_pressed.png",
			enabled: true,
			press : function() {
				oHelper.addImage(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarRemoveImage", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarRemoveImage", {
			type: ButtonType.Default,
			text: "Remove Image",
			icon: "./images/action.png",
			enabled: true,
			press : function() {
				oHelper.removeImage(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarAlignImage", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarAlignImage", {
			type: ButtonType.Default,
			text: "Button Image (left/right)",
			enabled: true,
			press : function() {
				oHelper.alignImage(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarAddIcon", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarAddIcon", {
			type: ButtonType.Default,
			text: "Add Icon",
			icon: sAddIconURI,
			activeIcon: sChangeIconURI,
			enabled: true,
			press : function() {
				oHelper.addIcon(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarChangeIcon", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarChangeIcon", {
			type: ButtonType.Default,
			text: "Change Icon",
			icon: sChangeIconURI,
			enabled: true,
			press : function() {
				oHelper.changeIcon(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarRemoveIcon", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarRemoveIcon", {
			type: ButtonType.Default,
			text: "Remove Icon",
			icon: sDeleteIconURI,
			enabled: true,
			press : function() {
				oHelper.removeIcon(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarAlignIcon", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarAlignIcon", {
			type: ButtonType.Default,
			text: "Button Icon (left/right)",
			enabled: true,
			press : function() {
				oHelper.alignIcon(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarHide", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarHide", {
			type: ButtonType.Default,
			text: "Hide Button",
			enabled: true,
			press : function() {
				oHelper.hide(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarShow", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarShow", {
			type: ButtonType.Default,
			text: "Show Button",
			enabled: true,
			press : function() {
				oHelper.show(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarRemoveText", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarRemoveText", {
			type: ButtonType.Default,
			text: "Remove Text",
			enabled: true,
			press : function() {
				oHelper.removeText(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarChangeText", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarChangeText", {
			type: ButtonType.Default,
			text: "Change Text",
			enabled: true,
			press : function() {
				oHelper.changeText(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarResetText", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarResetText", {
			type: ButtonType.Default,
			text: "Reset Text",
			enabled: true,
			press : function() {
				oHelper.resetText(oButtonBarButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarToggleTextDirection", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarToggleTextDirection", {
			type: ButtonType.Default,
			text: "Toggle TextDirection",
			enabled: true,
			press: function() {
				oHelper.toggleTextDirection(oButtonBarButtonSample);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBarLinkRole", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBarLinkRole", {
			type: ButtonType.Default,
			text: "Link role",
			enabled: true,
			accessibleRole: "Link"
		})
	});

	/* ---------------------------------------- */

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonSample", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonSample", {
			type: ButtonType.Default,
			text: "Test Button To Show Changes",
			enabled: true,
			tooltip: "tooltip",
			press : function() {
				oHelper.alert("event: 'press' on " + oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonDefault", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonDefault", {
			type: ButtonType.Default,
			text: "Button Type Default",
			enabled: true,
			press : function() {
				oHelper.typeDefault(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonUnstyled", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonUnstyled", {
			type: ButtonType.Default,
			text: "Button Type Unstyled",
			enabled: true,
			press : function() {
				oHelper.typeUnstyled(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonAccept", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonAccept", {
			type: ButtonType.Default,
			text: "Button Type Accept",
			enabled: true,
			press : function() {
				oHelper.typeAccept(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonReject", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonReject", {
			type: ButtonType.Default,
			text: "Button Type Reject",
			enabled: true,
			press : function() {
				oHelper.typeReject(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonTransparent", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonTransparent", {
			type: ButtonType.Default,
			text: "Button Type Transparent",
			enabled: true,
			press : function() {
				oHelper.typeTransparent(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBack", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBack", {
			type: ButtonType.Default,
			text: "Button Type Back",
			enabled: true,
			press : function() {
				oHelper.typeBack(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonUp", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonUp", {
			type: ButtonType.Default,
			text: "Button Type Up",
			enabled: true,
			press : function() {
				oHelper.typeUp(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonEmphasized", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonEmphasized", {
			type: ButtonType.Default,
			text: "Button Type Emphasized",
			enabled: true,
			press : function() {
				oHelper.typeEmphasized(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonEnabled", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonEnabled", {
			type: ButtonType.Default,
			text: "Disable/Enable Button",
			enabled: true,
			press : function() {
				oHelper.setEnabled(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonWidth100Pixel", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonWidth100Pixel", {
			type: ButtonType.Default,
			text: "Set width 120px",
			enabled: true,
			press : function() {
				oHelper.width100Pixel(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonWidth100Percent", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonWidth100Percent", {
			type: ButtonType.Default,
			text: "Set width 100%",
			enabled: true,
			press : function() {
				oHelper.width100Percent(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonWidth50Percent", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonWidth50Percent", {
			type: ButtonType.Default,
			text: "Set width 50%",
			enabled: true,
			press : function() {
				oHelper.width50Percent(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonWidthReset", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonWidthReset", {
			type: ButtonType.Default,
			text: "Reset width",
			enabled: true,
			press : function() {
				oHelper.widthReset(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonAddImage", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonAddImage", {
			type: ButtonType.Default,
			text: "Add Image",
			icon: "./images/action_pressed.png",
			enabled: true,
			press : function() {
				oHelper.addImage(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonRemoveImage", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonRemoveImage", {
			type: ButtonType.Default,
			text: "Remove Image",
			icon: "./images/action.png",
			enabled: true,
			press : function() {
				oHelper.removeImage(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonAlignImage", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonAlignImage", {
			type: ButtonType.Default,
			text: "Button Image (left/right)",
			enabled: true,
			press : function() {
				oHelper.alignImage(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonAddIcon", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonAddIcon", {
			type: ButtonType.Default,
			text: "Add Icon",
			icon: sAddIconURI,
			enabled: true,
			press : function() {
				oHelper.addIcon(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonRemoveIcon", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonRemoveIcon", {
			type: ButtonType.Default,
			text: "Remove Icon",
			icon: sDeleteIconURI,
			enabled: true,
			press : function() {
				oHelper.removeIcon(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonAlignIcon", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonAlignIcon", {
			type: ButtonType.Default,
			text: "Button Icon (left/right)",
			enabled: true,
			press : function() {
				oHelper.alignIcon(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonHide", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonHide", {
			type: ButtonType.Default,
			text: "Hide Button",
			enabled: true,
			press : function() {
				oHelper.hide(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonShow", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonShow", {
			type: ButtonType.Default,
			text: "Show Button",
			enabled: true,
			press : function() {
				oHelper.show(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonRemoveText", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonRemoveText", {
			type: ButtonType.Default,
			text: "Remove Text",
			enabled: true,
			press : function() {
				oHelper.removeText(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonChangeText", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonChangeText", {
			type: ButtonType.Default,
			text: "Change Text",
			enabled: true,
			press : function() {
				oHelper.changeText(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonResetText", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonResetText", {
			type: ButtonType.Default,
			text: "Reset Text",
			enabled: true,
			press : function() {
				oHelper.resetText(oButtonSample)
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonToggleTextDirection", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonToggleTextDirection", {
			type: ButtonType.Default,
			text: "Toggle TextDirection",
			enabled: true,
			press: function() {
				oHelper.toggleTextDirection(oButtonSample);
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBdiLTR", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBdiLtr", {
			text: "BDI tag when text is in LTR language (Next button is only in RTL 123)"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBdiRTL", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBdiRtl", {
			text: "עברית (עברית 123)"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBdi", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBdi", {
			text: "Here we have both LTR and RTL languages 123 (עברית  456)"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBdi2", {
		configurable: "false",
		writable: "true",

		value: new Button("myButtonBdi2", {
			text: "עברית 123 (now English in the brackets 456)"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonWithTwoYearsText", {
		configurable: "false",
		writable: "true",

		value: new AdditionalTextButton("myBottonWithTwoYears",{
			type: ButtonType.Transparent,
			text : "1424 AH – 1431 AH",
			additionalText: "2003 – 2010"
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonWithTwoMonthsText", {
		configurable: "false",
		writable: "true",

		value: new AdditionalTextButton("myBottonWithTwoMoths",{
			type: ButtonType.Transparent,
			text : "Jumada I",
			additionalText: "Dec – Jan"
		})
	});

	oPage1.addContent(oBar2)
		  .addContent(new HTML("myEmptyLine1", {content: "<br>"}))
				.addContent(new HTML("myHtmlBarDefault", {content: ""}))
				.addContent(oButtonBarDefault)
				.addContent(new HTML("myHtmlBarUnstyled", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarUnstyled)
				.addContent(new HTML("myHtmlBarAccept", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarAccept)
				.addContent(new HTML("myHtmlBarReject", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarReject)
				.addContent(new HTML("myHtmlBarTransparent", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarTransparent)
				.addContent(new HTML("myHtmlBarGhost", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarGhost)
				.addContent(new HTML("myHtmlBarBack", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarBack)
				.addContent(new HTML("myHtmlBarUp", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarUp)
				.addContent(new HTML("myHtmlBarEmphasized", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarEmphasized)
				.addContent(new HTML("myHtmlBarEnabled", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarEnabled)
				.addContent(new HTML("myHtmlBarWidth100Pixel", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarWidth100Pixel)
				.addContent(new HTML("myHtmlBarWidth300Pixel", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarWidth300Pixel)
				.addContent(new HTML("myHtmlBarWidth100Percent", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarWidth100Percent)
				.addContent(new HTML("myHtmlBarWidthReset", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarWidthReset)
				.addContent(new HTML("myHtmlBarAddImage", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarAddImage)
				.addContent(new HTML("myHtmlBarRemoveImage", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarRemoveImage)
				.addContent(new HTML("myHtmlBarAlignImage", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarAlignImage)
				.addContent(new HTML("myHtmlBarAddIcon", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarAddIcon)
				.addContent(new HTML("myHtmlBarChangeIcon", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarChangeIcon)
				.addContent(new HTML("myHtmlBarRemoveIcon", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarRemoveIcon)
				.addContent(new HTML("myHtmlBarAlignIcon", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarAlignIcon)
				.addContent(new HTML("myHtmlBarHide", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarHide)
				.addContent(new HTML("myHtmlBarShow", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarShow)
				.addContent(new HTML("myHtmlBarRemoveText", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarRemoveText)
				.addContent(new HTML("myHtmlBarChangeText", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarChangeText)
				.addContent(new HTML("myHtmlBarResetText", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarResetText)
				.addContent(new HTML("myHtmlBarToggleTextDirection", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBarToggleTextDirection)
				.addContent(oButtonBarLinkRole)
				.addContent(new HTML("myEmptyLine2", {content: "<br><br>"}))
				.addContent(new HTML("myDividerLine1", {content: "<br><hr style='border:solid #000000; border-width: 5px 0 0;'>"}))
				.addContent(oButtonSample)
				.addContent(new HTML("myDividerLine3", {content: "<br><hr>"}))
				.addContent(new HTML("myHtmlDefault", {content: "<br>"}))
				.addContent(oButtonDefault)
				.addContent(new HTML("myHtmlUnstyled", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonUnstyled)
				.addContent(new HTML("myHtmlAccept", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonAccept)
				.addContent(new HTML("myHtmlReject", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonReject)
				.addContent(new HTML("myHtmlTransparent", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonTransparent)
				.addContent(new HTML("myHtmlBack", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBack)
				.addContent(new HTML("myHtmlUp", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonUp)
				.addContent(new HTML("myHtmlEmphasized", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonEmphasized)
				.addContent(new HTML("myHtmlEnabled", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonEnabled)
				.addContent(new HTML("myHtmlWidth100Pixel", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonWidth100Pixel)
				.addContent(new HTML("myHtmlWidth100Percent", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonWidth100Percent)
				.addContent(new HTML("myHtmlWidth50Percent", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonWidth50Percent)
				.addContent(new HTML("myHtmlWidthReset", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonWidthReset)
				.addContent(new HTML("myHtmlAddImage", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonAddImage)
				.addContent(new HTML("myHtmlRemoveImage", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonRemoveImage)
				.addContent(new HTML("myHtmlAlignImage", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonAlignImage)
				.addContent(new HTML("myHtmlAddIcon", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonAddIcon)
				.addContent(new HTML("myHtmlRemoveIcon", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonRemoveIcon)
				.addContent(new HTML("myHtmlAlignIcon", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonAlignIcon)
				.addContent(new HTML("myHtmlHide", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonHide)
				.addContent(new HTML("myHtmlShow", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonShow)
				.addContent(new HTML("myHtmlRemoveText", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonRemoveText)
				.addContent(new HTML("myHtmlChangeText", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonChangeText)
				.addContent(new HTML("myHtmlResetText", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonResetText)
				.addContent(new HTML("myHtmlToggleTextDirection", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonToggleTextDirection)
				.addContent(new HTML("myDividerLine4", {content: "<br><hr style='border:solid #000000; border-width: 5px 0 0;'>"}))
				.addContent(oButtonBdiLTR)
				.addContent(new HTML("myHtmloButtonBdiLTR", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBdiRTL)
				.addContent(new HTML("myHtmloButtonBdi", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBdi)
				.addContent(new HTML("myHtmloButtonBdi2", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonBdi2)
				.addContent(new HTML("myHtmloButtonWithSecondTextYears", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonWithTwoYearsText)
				.addContent(new HTML("myHtmloButtonWithSecondTextMonths", {content: "<div class='ButtonSpace'>&nbsp;</div>"}))
				.addContent(oButtonWithTwoMonthsText);

	oApp.addPage(oPage1);
	oApp.placeAt("body");
});