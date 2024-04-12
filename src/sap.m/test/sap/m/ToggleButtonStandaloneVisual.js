sap.ui.define(
	["sap/ui/core/HTML", "sap/ui/core/IconPool", "sap/m/ToggleButton", "sap/m/library"],
	function(HTML, IconPool, ToggleButton, mobileLibrary) {
		"use strict";

		// shortcut for sap.m.ButtonType
		const ButtonType = mobileLibrary.ButtonType;

		new HTML({content: "<span id='buttons3'>Default type ToggleButtons</span><br/>"}).placeAt("standAloneBtn");

		////////////////////////// DEFAULT //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oToggleButton1", {
			configurable: "false",
			writable: "true",

			value: new ToggleButton({
				type: ButtonType.Default,
				icon: "sap-icon://home",
				enabled: true
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
				text: "ToggleButton Type Default",
				enabled: true
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
				text: "ToggleButton Type Default",
				enabled: true
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
				enabled: true,
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

		new HTML({content: "<br/><br/>Transparent type ToggleButtons<br/>"}).placeAt("standAloneBtn");

		////////////////////////// TRANSPARENT //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oToggleButton7", {
			configurable: "false",
			writable: "true",

			value: new ToggleButton({
				type: ButtonType.Transparent,
				icon: "sap-icon://home",
				enabled: true
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
				text: "ToggleButton Type Transparent",
				enabled: true
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
				text: "ToggleButton Type Transparent",
				enabled: true
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
				enabled: true,
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

		new HTML({content: "<br/><br/>Reject type ToggleButtons<br/>"}).placeAt("standAloneBtn");

		////////////////////////// Reject //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oToggleButton13", {
			configurable: "false",
			writable: "true",

			value: new ToggleButton({
				type: ButtonType.Reject,
				icon: "sap-icon://home",
				enabled: true
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
				text: "ToggleButton Type Reject",
				enabled: true
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
				text: "ToggleButton Type Reject",
				enabled: true
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
				enabled: true,
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

		new HTML({content: "<br/><br/>Accept type ToggleButtons<br/>"}).placeAt("standAloneBtn");

		////////////////////////// Accept //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oToggleButton19", {
			configurable: "false",
			writable: "true",

			value: new ToggleButton({
				type: ButtonType.Accept,
				icon: "sap-icon://home",
				enabled: true
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
				text: "ToggleButton Type Accept",
				enabled: true
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
				text: "ToggleButton Type Accept",
				enabled: true
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
				enabled: true,
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

		new HTML({content: "</br></br><span id='buttons4'>Emphasized type ToggleButtons</span><br/>"}).placeAt("standAloneBtn");

		////////////////////////// Emphasized //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oToggleButton25", {
			configurable: "false",
			writable: "true",

			value: new ToggleButton({
				type: ButtonType.Emphasized,
				icon: "sap-icon://home",
				enabled: true
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
				text: "ToggleButton Type Emphasized",
				enabled: true
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
				text: "ToggleButton Type Emphasized",
				enabled: true
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
				enabled: true,
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

		new HTML({content: "<br/><br/>Back type ToggleButtons<br/>"}).placeAt("standAloneBtn");

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
				enabled: true
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
				enabled: true
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
				enabled: true
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
				enabled: true,
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

		new HTML({content: "<br/><br/>UP type ToggleButtons<br/>"}).placeAt("standAloneBtn");

		////////////////////////// Up //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oToggleButton37", {
			configurable: "false",
			writable: "true",

			value: new ToggleButton({
				type: ButtonType.Up,
				icon: "sap-icon://home",
				enabled: true
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
				text: "ToggleButton Type Up",
				enabled: true
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
				text: "ToggleButton Type Up",
				enabled: true
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
				enabled: true,
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

		new HTML({content: "<br/><br/>Unstyled type ToggleButtons<br/>"}).placeAt("standAloneBtn");

		////////////////////////// Unstyled //////////////////////////////////
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oToggleButton43", {
			configurable: "false",
			writable: "true",

			value: new ToggleButton({
				type: ButtonType.Unstyled,
				icon: "sap-icon://home",
				enabled: true
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
				text: "ToggleButton Type Unstyled",
				enabled: true
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
				text: "ToggleButton Type Unstyled",
				enabled: true
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
	}
);