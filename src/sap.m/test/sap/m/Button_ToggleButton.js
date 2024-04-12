sap.ui.define([
	"sap/base/i18n/Localization",
	"sap/ui/core/HTML",
	"sap/ui/core/IconPool",
	"sap/ui/core/Theming",
	"sap/m/Button",
	"sap/m/library",
	"sap/m/ToggleButton",
	"sap/m/Bar",
	"sap/m/OverflowToolbar",
	"sap/m/Toolbar",
	"sap/ui/model/json/JSONModel",
	"sap/m/VBox",
	"sap/m/Table",
	"sap/m/Column",
	"sap/m/Text",
	"sap/m/ColumnListItem",
	"sap/ui/thirdparty/jquery"
], function(
	Localization,
	HTML,
	IconPool,
	Theming,
	Button,
	mobileLibrary,
	ToggleButton,
	Bar,
	OverflowToolbar,
	Toolbar,
	JSONModel,
	VBox,
	Table,
	Column,
	Text,
	ColumnListItem,
	jQuery
) {
	"use strict";

	// shortcut for sap.m.ListSeparators
	const ListSeparators = mobileLibrary.ListSeparators;

	// shortcut for sap.m.BackgroundDesign
	const BackgroundDesign = mobileLibrary.BackgroundDesign;

	// shortcut for sap.m.ToolbarDesign
	const ToolbarDesign = mobileLibrary.ToolbarDesign;

	// shortcut for sap.m.ButtonType
	const ButtonType = mobileLibrary.ButtonType;

	function toggleCompact() {
		jQuery("body").toggleClass("sapUiSizeCompact");
	}

	new HTML({content: "<div id='top'>&nbsp;</div>"}).placeAt("controlArea");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonc", {
		configurable: "false",
		writable: "true",

		value: new Button("toggle_mode", {
			text: "Toggle Compact Mode",
			press: toggleCompact
		}).placeAt("controlArea")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("controlArea");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtoncHCB", {
		configurable: "false",
		writable: "true",

		value: new Button("hcb_mode", {
			text: "HCB Theme",
			press: function(){
				Theming.setTheme("sap_belize_hcb");
			}
		}).placeAt("controlArea")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("controlArea");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonBelize", {
		configurable: "false",
		writable: "true",

		value: new Button("belize_mode", {
			text: "Belize Theme",
			press: function(){
				Theming.setTheme("sap_belize");
			}
		}).placeAt("controlArea")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("controlArea");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonRTL", {
		configurable: "false",
		writable: "true",

		value: new Button("rtl_mode", {
			text: "toggle RTL",
			press: function(){
				Localization.setRTL(!Localization.getRTL());
			}
		}).placeAt("controlArea")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("controlArea");

	new HTML({content: "</br>Default type Buttons</br>"}).placeAt("standAloneBtn");

	////////////////////////// DEFAULT //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton1", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton2", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			text: "Button Type Default"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton3", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "Button Type Default"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton4", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton5", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			text: "Button Type Default",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton6", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "Button Type Default",
			enabled: false
		}).placeAt("standAloneBtn")
	});


	new HTML({content: "</br></br>Transparent type Buttons</br>"}).placeAt("standAloneBtn");

	////////////////////////// TRANSPARENT //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton7", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Transparent,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton8", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Transparent,
			text: "Button Type Transparent"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton9", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			text: "Button Type Transparent"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton10", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton11", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Transparent,
			text: "Button Type Transparent",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton12", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			text: "Button Type Transparent",
			enabled: false
		}).placeAt("standAloneBtn")
	});


	new HTML({content: "</br></br>Reject type Buttons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Reject //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton13", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Reject,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton14", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Reject,
			text: "Button Type Reject"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton15", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Reject,
			icon: "sap-icon://home",
			text: "Button Type Reject"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton16", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Reject,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton17", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Reject,
			text: "Button Type Reject",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton18", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Reject,
			icon: "sap-icon://home",
			text: "Button Type Reject",
			enabled: false
		}).placeAt("standAloneBtn")
	});


	new HTML({content: "</br></br>Accept type Buttons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Accept //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton19", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Accept,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton20", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Accept,
			text: "Button Type Accept"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton21", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			text: "Button Type Accept"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton22", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton23", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Accept,
			text: "Button Type Accept",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton24", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			text: "Button Type Accept",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br>Atttention type Buttons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Attention //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton19att", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Attention,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton20att", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Attention,
			text: "Button Type Attention"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton21att", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Attention,
			icon: "sap-icon://home",
			text: "Button Type Attention"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton22att", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Attention,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton23att", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Attention,
			text: "Button Type Attention",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton24att", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Attention,
			icon: "sap-icon://home",
			text: "Button Type Attention",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br><span>Emphasized type Buttons</span></br>"}).placeAt("standAloneBtn");

	////////////////////////// Emphasized //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton25", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton26", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Emphasized,
			text: "Button Type Emphasized"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton27", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			text: "Button Type Emphasized"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton28", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton29", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Emphasized,
			text: "Button Type Emphasized",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton30", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			text: "Button Type Emphasized",
			enabled: false
		}).placeAt("standAloneBtn")
	});


	new HTML({content: "</br></br>Back type Buttons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Back //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton31", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Back,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton32", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Back,
			text: "Button Type Back"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton33", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			text: "Button Type Back"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton34", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton35", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Back,
			text: "Button Type Back",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton36", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			text: "Button Type Back",
			enabled: false
		}).placeAt("standAloneBtn")
	});


	new HTML({content: "</br></br>UP type Buttons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Up //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton37", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Up,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton38", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Up,
			text: "Button Type Up"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton39", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			text: "Button Type Up"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton40", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton41", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Up,
			text: "Button Type Up",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton42", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			text: "Button Type Up",
			enabled: false
		}).placeAt("standAloneBtn")
	});


	new HTML({content: "</br></br>Unstyled type Buttons</br></br>"}).placeAt("standAloneBtn");

	////////////////////////// Unstyled //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton43", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton44", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Unstyled,
			text: "Button Type Unstyled"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton45", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home",
			text: "Button Type Unstyled"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton46", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton47", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Unstyled,
			text: "Button Type Up",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton48", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home",
			text: "Button Type Unstyled",
			enabled: false
		}).placeAt("standAloneBtn")
	});


	new HTML({content: "</br><span>Default type ToggleButtons</span></br>"}).placeAt("standAloneBtn");

	////////////////////////// DEFAULT //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton1", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton2", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			text: "ToggleButton Type Default"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton3", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "ToggleButton Type Default"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton4", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton5", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			text: "ToggleButton Type Default",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton6", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "ToggleButton Type Default",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton3p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "ToggleButton Type Default",
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton4p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "ToggleButton Type Default",
			enabled: false,
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br>Transparent type ToggleButtons</br>"}).placeAt("standAloneBtn");

	////////////////////////// TRANSPARENT //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton7", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton8", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			text: "ToggleButton Type Transparent"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton9", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			text: "ToggleButton Type Transparent"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton10", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton11", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			text: "ToggleButton Type Transparent",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton12", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			text: "ToggleButton Type Transparent",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton9p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			text: "ToggleButton Type Transparent",
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton10p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Transparent,
			icon: "sap-icon://home",
			text: "ToggleButton Type Transparent",
			enabled: false,
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br>Reject type ToggleButtons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Reject //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton13", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton14", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			text: "ToggleButton Type Reject"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton15", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			icon: "sap-icon://home",
			text: "ToggleButton Type Reject"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton16", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton17", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			text: "ToggleButton Type Reject",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton18", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			icon: "sap-icon://home",
			text: "ToggleButton Type Reject",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton14p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			text: "ToggleButton Type Reject",
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton15p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Reject,
			text: "ToggleButton Type Reject",
			enabled: false,
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br>Accept type ToggleButtons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Accept //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton19", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton20", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			text: "ToggleButton Type Accept"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton21", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			text: "ToggleButton Type Accept"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton22", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton23", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			text: "ToggleButton Type Accept",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton24", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			text: "ToggleButton Type Accept",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton21p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			text: "ToggleButton Type Accept",
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton22p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Accept,
			icon: "sap-icon://home",
			text: "ToggleButton Type Accept",
			enabled: false,
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br><span>Emphasized type ToggleButtons</span></br>"}).placeAt("standAloneBtn");

	////////////////////////// Emphasized //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton25", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton26", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			text: "ToggleButton Type Emphasized"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton27", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			text: "ToggleButton Type Emphasized"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton28", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton29", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			text: "ToggleButton Type Emphasized",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton30", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			text: "ToggleButton Type Emphasized",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton27p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			text: "ToggleButton Emphasized pressed",
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton28p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Emphasized,
			icon: "sap-icon://home",
			text: "ToggleButton Emphasized pressed",
			enabled: false,
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br>Back type ToggleButtons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Back //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton31", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			icon: "sap-icon://home",
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton32", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			text: "ToggleButton Type Back",
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton33", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			text: "ToggleButton Type Back",
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton34", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton35", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			text: "ToggleButton Type Back",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton36", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			text: "ToggleButton Type Back",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton33p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			text: "ToggleButton Type Back",
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton34p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Back,
			icon: "sap-icon://home",
			text: "ToggleButton Type Back",
			enabled: false,
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br>UP type ToggleButtons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Up //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton37", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton38", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			text: "ToggleButton Type Up"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton39", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			text: "ToggleButton Type Up"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton40", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton41", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			text: "ToggleButton Type Up",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton42", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			text: "ToggleButton Type Up",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton41p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			text: "ToggleButton Type Up",
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton42p", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Up,
			icon: "sap-icon://home",
			text: "ToggleButton Type Up",
			enabled: false,
			pressed: true
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "</br></br>Unstyled type ToggleButtons</br>"}).placeAt("standAloneBtn");

	////////////////////////// Unstyled //////////////////////////////////
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton43", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton44", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Unstyled,
			text: "ToggleButton Type Unstyled"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton45", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home",
			text: "ToggleButton Type Unstyled"
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton46", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton47", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Unstyled,
			text: "ToggleButton Type Up",
			enabled: false
		}).placeAt("standAloneBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oToggleButton48", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Unstyled,
			icon: "sap-icon://home",
			text: "ToggleButton Type Unstyled",
			enabled: false
		}).placeAt("standAloneBtn")
	});

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
					text: "Btn Def"
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
					text: "Btn Accept"
				}),
				new ToggleButton({
					type: ButtonType.Default,
					icon: "sap-icon://home",
					text: "ToggleBtn Def"
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
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Reject,
					icon: "sap-icon://home",
					text: "ToggleBtn Reject",
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "ToggleBtn Accept",
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Accept,
					icon: "sap-icon://home",
					text: "ToggleBtn Accept",
					enabled: false,
					pressed: true
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					enabled: false
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
					text: "Button Trans"
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
					text: "ToggleBtn Trans"
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
					text: "Btn Ghost"
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph",
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph",
					pressed: true
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Trans"
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
					text: "ToggleBtn Trans"
				}),
				new Button({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "Btn Ghost"
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
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
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph Dis",
					enabled: false,
					pressed: true
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Default"
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
					text: "ToggleBtn Trans"
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
					pressed: true
				}),
				new Button({
					type: ButtonType.Up,
					icon: "sap-icon://home",
					text: "Btn Up"
				}),
				new ToggleButton({
					type: ButtonType.Up,
					icon: "sap-icon://home",
					text: "ToggleBtn Up",
					pressed: true
				}),
				new ToggleButton({
					type: ButtonType.Back,
					icon: "sap-icon://home",
					text: "ToggleBtn Back",
					pressed: false
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Trans"
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
					text: "Btn Ghost"
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Trans"
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
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emph Dis",
					enabled: false,
					pressed: true
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Default"
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
					text: "Btn Accept"
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
					text: "ToggleBtn Default"
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
					pressed: false
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Transparent"
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
					text: "Btn Ghost"
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent"
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
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					pressed: true
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Default"
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
					text: "Btn Accept"
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
					text: "ToggleBtn Default"
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
					pressed: false
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Transparent"
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
					text: "Btn Ghost"
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent"
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
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					pressed: true
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Default"
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
					text: "Btn Accept"
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
					text: "ToggleBtn Default"
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
					pressed: false
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
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
					text: "Btn Transparent"
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
					text: "Btn Ghost"
				}),
				new ToggleButton({
					type: ButtonType.Ghost,
					icon: "sap-icon://home",
					text: "ToggleBtn Ghost",
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Transparent,
					icon: "sap-icon://home",
					text: "ToggleBtn Transparent"
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
					pressed: false
				}),
				new ToggleButton({
					type: ButtonType.Emphasized,
					icon: "sap-icon://home",
					text: "ToggleBtn Emphasized",
					pressed: true
				}),
				new Button({
					type: ButtonType.Critical
				}),
				new Button({
					type: ButtonType.Negative,
					text: "Button Type Negative Disabled",
					enabled: false
				})
			]
		}).placeAt('barBtn')
	});

	new HTML({content: "</br><span>RTL specific buttons</span></br>"}).placeAt("RTLBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton1RTL", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "(Button Type Default)"
		}).placeAt("RTLBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("RTLBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton2RTL", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			text: "(Button Type Default)"
		}).placeAt("RTLBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("RTLBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton3RTL", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			icon: "sap-icon://home",
			text: "(עִבְרִית‬ עִבְרִית‬ עִבְרִית‬)"
		}).placeAt("RTLBtn")
	});

	new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("RTLBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton4RTL", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Default,
			text: "(עִבְרִית‬ עִבְרִית‬ עִבְרִית‬)"
		}).placeAt("RTLBtn")
	});

	new HTML({content: "</br><span>Special Type Buttons</span></br>"}).placeAt("specialBtn");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonSpecial", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Critical
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton2Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Negative
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton3Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Success
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton4Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Neutral
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton5Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Critical,
			text: "Button Type Critical"
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton6Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Negative,
			text: "Button Type Negative"
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton7Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Success,
			text: "Button Type Success"
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton8Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Neutral,
			text: "Button Type Neutral"
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton9Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Critical,
			text: "Button Type Critical",
			icon: ""
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton10Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Negative,
			text: "Button Type Negative",
			icon: ""
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton11Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Success,
			text: "Button Type Success",
			icon: ""
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton12Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Neutral,
			text: "Button Type Neutral",
			icon: ""
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton13Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Critical,
			text: "Button Type Critical Disabled",
			enabled: false
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton14Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Negative,
			text: "Button Type Negative Disabled",
			enabled: false
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton15Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Success,
			text: "Button Type Success Disabled",
			enabled: false
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton16Special", {
		configurable: "false",
		writable: "true",

		value: new Button({
			type: ButtonType.Neutral,
			text: "Button Type Neutral Disabled",
			enabled: false
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton17Special", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Critical,
			text: "Toggle Button Type Critical"
		}).placeAt("specialBtn")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton18Special", {
		configurable: "false",
		writable: "true",

		value: new ToggleButton({
			type: ButtonType.Critical,
			text: "Toggle Button TypeCritical Pressed",
			pressed: true
		}).placeAt("specialBtn")
	});

	// Buttons inside Table
	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "data", {
		configurable: "false",
		writable: "true",

		value: aButtonSettings = [{
				text: "Button"
		}]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	oModel.setProperty("/rows", data);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oVBox", {
		configurable: "false",
		writable: "true",
		value: new VBox()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButtonsTable", {
		configurable: "false",
		writable: "true",

		value: new Table("ButtonsTable", {
			backgroundDesign: BackgroundDesign.Transparent,
			showSeparators: ListSeparators.All,
			columns: [
				new Column({
					header: new Text({
						text : "Button1"
					})
				}),
				new Column({
					header: new Text({
						text : "Button2"
					})
				}),
				new Column({
					header: new Text({
						text : "Button3"
					})
				}),
				new Column("disableTypeColumn", {
					header: new Text("xxx", {
						text : "Button4"
					})
				}),
				new Column({
					header: new Text({
						text : "Button5"
					})
				}),
				new Column({
					header: new Text({
						text : "Button6"
					})
				}),
				new Column({
					header: new Text({
						text : "Button7"
					})
				}),
				new Column({
					header: new Text({
						text : "Toggle Button1"
					})
				}),
				new Column({
					header: new Text({
						text : "Toggle Button2"
					})
				}),
				new Column({
					header: new Text({
						text : "Toggle Button3"
					})
				})
			]
		})
	});


	// Arrange the table columns according to the cells content width
	oButtonsTable.setFixedLayout(false);

	oTableRowTemplate = new ColumnListItem({
		type: "Active",
		cells : [
			new Button({
				text : "Contract #D1234567890 Ñagçyfox",
				icon: "sap-icon://alert",
				type: ButtonType.Transparent
			}), new Button({
				text : "{text}",
				type: ButtonType.Transparent
			}), new Button({
				icon: "sap-icon://pharmacy",
				type: ButtonType.Transparent
			}), new Button({
				text : "John Doe Ñagçyfox",
				type: ButtonType.Default
			}), new Button({
				text : "Some title",
				icon: "sap-icon://pharmacy",
				type: ButtonType.Reject
			}), new Button({
				icon: "sap-icon://alert",
				type: ButtonType.Ghost
			}), new Button({
				icon: "sap-icon://pharmacy",
				type: ButtonType.Emphasized
			}), new ToggleButton({
				icon: "sap-icon://pharmacy",
				type: ButtonType.Transparent
			}), new ToggleButton({
				icon: "sap-icon://pharmacy",
				text: "Toggle Button",
				type: ButtonType.Default
			}), new ToggleButton({
				icon: "sap-icon://pharmacy",
				text: "Toggle Button",
				type: ButtonType.Accept
			})
		]
	});

	oButtonsTable.bindAggregation("items", {
			path : "/rows",
			template: oTableRowTemplate
	});
	oButtonsTable.setModel(oModel);

	oVBox.addItem(oButtonsTable);
	oVBox.placeAt("TableBtn");
});