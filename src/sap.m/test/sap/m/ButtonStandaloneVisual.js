sap.ui.define(
	["sap/ui/core/HTML", "sap/ui/core/IconPool", "sap/m/Button", "sap/m/library"],
	function(HTML, IconPool, Button, mobileLibrary) {
		"use strict";

		// shortcut for sap.m.ButtonType
		const ButtonType = mobileLibrary.ButtonType;

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

		new HTML({content: "</br></br>Attention type Buttons</br>"}).placeAt("standAloneBtn");

		////////////////////////// Attention //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oButton19", {
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
		Object.defineProperty(globalThis, "oButton20", {
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
		Object.defineProperty(globalThis, "oButton21", {
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
		Object.defineProperty(globalThis, "oButton22", {
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
		Object.defineProperty(globalThis, "oButton23", {
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
		Object.defineProperty(globalThis, "oButton24", {
			configurable: "false",
			writable: "true",

			value: new Button({
				type: ButtonType.Attention,
				icon: "sap-icon://home",
				text: "Button Type Attention",
				enabled: false
			}).placeAt("standAloneBtn")
		});

		new HTML({content: "</br></br><span id='buttons2'>Emphasized type Buttons</span></br></br>"}).placeAt("standAloneBtn");

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
		Object.defineProperty(globalThis, "oButton31a", {
			configurable: "false",
			writable: "true",

			value: new Button({
				type: ButtonType.Back
			}).placeAt("standAloneBtn")
		});

		new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

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
				type: ButtonType.Up
			}).placeAt("standAloneBtn")
		});

		new HTML({content: "<div class='ButtonSpace'>&nbsp;</div>"}).placeAt("standAloneBtn");

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

		new HTML({content: "</br></br><span id='buttons_rtl'>RTL specific buttons</span></br>"}).placeAt("RTLBtn");

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
		Object.defineProperty(globalThis, "oButton4RTL", {
			configurable: "false",
			writable: "true",

			value: new Button({
				type: ButtonType.Default,
				text: "(עִבְרִית‬ עִבְרִית‬ עִבְרִית‬)"
			}).placeAt("RTLBtn")
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oButton4Special", {
			configurable: "false",
			writable: "true",

			value: new Button({
				type: ButtonType.Neutral,
				iconFirst: true
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
				text: "Button Type Neutral",
				iconFirst: true
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
				icon: "",
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
				icon: "",
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
				text: "Button Type Critical",
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
				text: "Button Type Negative",
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
				text: "Button Type Success",
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
				text: "Button Type Neutral",
				enabled: false
			}).placeAt("specialBtn")
		});
	}
);