sap.ui.define([
	"sap/base/i18n/Formatting",
	"sap/base/i18n/Localization",
	"sap/ui/core/Locale",
	"sap/ui/core/LocaleData",
	"sap/ui/core/CalendarType",
	"sap/ui/model/json/JSONModel",
	"sap/ui/commons/Label",
	"sap/ui/layout/HorizontalLayout",
	"sap/ui/commons/Link",
	"sap/ui/commons/ComboBox",
	"sap/ui/commons/DropdownBox",
	"sap/ui/core/ListItem",
	"sap/ui/commons/layout/MatrixLayout",
	"sap/ui/commons/TextField",
	"sap/ui/commons/CheckBox",
	"sap/ui/model/type/Date",
	"sap/ui/model/type/Time",
	"sap/ui/model/type/Integer",
	"sap/ui/model/type/Float",
	"sap/ui/model/resource/ResourceModel",
	"sap/ui/commons/TextView",
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/Configuration"
], function(
	Formatting,
	Localization,
	Locale,
	LocaleData,
	CalendarType,
	JSONModel,
	Label,
	HorizontalLayout,
	Link,
	ComboBox,
	DropdownBox,
	ListItem,
	MatrixLayout,
	TextField,
	CheckBox,
	TypeDate,
	Time,
	Integer,
	Float,
	ResourceModel,
	TextView,
	jQuery,
	Configuration
) {
	"use strict";
	try{
		sap.ui.getCore().loadLibrary("sap.ui.commons");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFormatSettings", {
		configurable: "false",
		writable: "true",
		value: Configuration.getFormatSettings()
	});

	const oParams = new URLSearchParams(window.location.search);

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "v", {
		configurable: "false",
		writable: "true"
	});

	if ( v = oParams.get("sap-ui-legacy-date-format") ) {
		oFormatSettings.setLegacyDateFormat(v);
	}
	if ( v = oParams.get("sap-ui-legacy-time-format") ) {
		oFormatSettings.setLegacyTimeFormat(v);
	}
	if ( v = oParams.get("sap-ui-legacy-number-format") ) {
		oFormatSettings.setLegacyNumberFormat(v);
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aLocales", {
		configurable: "false",
		writable: "true",

		value: [
			"ar_SA",
			"de_AT",
			"de_CH",
			"de_DE",
			"da_DK",
			"en_AU",
			"en_CA",
			"en_GB",
			"en_US",
			"en_ZA",
			"es_MX",
			"es_ES",
			"fa_IR",
			"fr_FR",
			"fr_CA",
			"fr_BE",
			"ja_JP",
			"id_ID",
			"it_IT",
			"ru_RU",
			"pt_BR",
			"hi_IN",
			"he_IL",
			"tr_TR",
			"nl_BE",
			"nl_NL",
			"pl_PL",
			"ko_KR",
			"zh_SG",
			"zh_TW",
			"zh_CN",
			"de_XX",
			"xx_XX"
		]
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oData", {
		configurable: "false",
		writable: "true",

		value: {

			locales: jQuery.map(aLocales, function(sLocale, i) {
				return {
					key : sLocale,
					locale : new Locale(sLocale)
				};
			}),

			legacyDateFormats: [
				{ key: "", caption: "(none)" },
				{ key: "1", caption: "dd.MM.yyyy" },
				{ key: "2", caption: "MM/dd/yyyy" },
				{ key: "3", caption: "MM-dd-yyyy" },
				{ key: "4", caption: "yyyy.MM.dd" },
				{ key: "5", caption: "yyyy/MM/dd" },
				{ key: "6", caption: "yyyy-MM-dd" },
				{ key: "7", caption: "Gyy.MM.dd" },
				{ key: "8", caption: "Gyy/MM/dd" },
				{ key: "9", caption: "Gyy-MM-dd" },
				{ key: "A", caption: "yyyy/MM/dd" },
				{ key: "B", caption: "yyyy/MM/dd" },
				{ key: "C", caption: "yyyy/MM/dd" }
			],

			legacyTimeFormats: [
				{ key: "", caption: "(none)" },
				{ key: "0", caption: "HH:mm:ss (no AM/PM)" },
				{ key: "1", caption: "hh:mm:ss a (AM/PM)" },
				{ key: "2", caption: "hh:mm:ss a (am/pm)" },
				{ key: "3", caption: "KK:mm:ss a (AM/PM)" },
				{ key: "4", caption: "KK:mm:ss a (am/pm)" }
			],

			legacyNumberFormats : [
				{ key: "", caption: "(none)" },
				{ key: " ", caption: "1.234,56" },
				{ key: "X", caption: "1,234.56" },
				{ key: "Y", caption: "1234,56" }
			],

			calendarTypes: jQuery.map(CalendarType, function(value, key) {
				return { key: key, caption: value };
			}),

			language : null,
			locale : null,
			formatLanguage : null,
			formatLocale : null,

			dateValue: new Date(1642342342323),
			intValue: 234234234,
			floatValue: 2342234.234,

		}
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	sap.ui.getCore();

	function adaptModelToCurrentLocale() {
		var oCurrentLocale = new Locale(Localization.getLanguageTag());
		var oLocaleData = LocaleData.getInstance(oCurrentLocale);
		var mLanguages = oLocaleData.getLanguages();
		var mTerritories = oLocaleData.getTerritories();

		function caption(vLocale) {
			var oLocale = (typeof vLocale === "string") ? new Locale(vLocale) : vLocale;
			var sLanguage = mLanguages[oLocale.getLanguage()] || oLocale.getLanguage();
			var sTerritory = oLocale.getRegion() ? mTerritories[oLocale.getRegion()] || oLocale.getRegion() : "";
			return sLanguage + (sTerritory ? " (" + sTerritory + ")" : "");
		}

		oData.language = Localization.getLanguage();
		oData.locale = oCurrentLocale;
		oData.localeCaption = caption(oCurrentLocale);
		oData.formatLanguage = new Locale(Formatting.getLanguageTag());
		oData.formatLocale = new Locale(Formatting.getLanguageTag()).toString();
		oData.useCustomSettings = new Locale(Formatting.getLanguageTag()).hasPrivateUseSubtag("sapufmt");

		for (var i=0; i<oData.locales.length; i++) {
			oData.locales[i].caption = caption(oData.locales[i].locale);
		}

		oModel.setData(oData);
	}

	adaptModelToCurrentLocale();

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oLink", {
		configurable: "false",
		writable: "true"
	}), Object.defineProperty(globalThis, "oText", {
		configurable: "false",
		writable: "true"
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oLabel", {
		configurable: "false",
		writable: "true",

		value: new Label({
			text : "Locales",
			labelFor: "localesContainer"
			}).addStyleClass("padding").placeAt("locales")
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oLocalesContainer", {
		configurable: "false",
		writable: "true",
		value: new HorizontalLayout("localesContainer")
	});

	oLocalesContainer.bindAggregation("content", { path : "/locales",
		template : new Link({
			text: "{key}",
			tooltip : "{caption}",
			helpId : "{key}", // misuse of help id
			press: function() {
				var sLocale = this.getHelpId();
				sLocale == "he_IL" || sLocale == "ar_SA";
				Localization.setLanguage(sLocale);
			}
		}).addStyleClass("padding")
	});
	oLocalesContainer.placeAt("locales");

	function select(sCaption, sBindingPath, sInitialValue, fnChange, bAllowEditing) {
		var fnClass = bAllowEditing ? ComboBox : DropdownBox;
		var oSelect = new fnClass({
			items: { path: sBindingPath,
				template: new ListItem({
					key : "{key}",
					text: "{key} - {caption}"
				})
			},
			value : sInitialValue,
			change : fnChange
		}).addStyleClass("padding");

		var oLabel = new Label({
			text : sCaption,
			labelFor: oSelect
		}).addStyleClass("padding");

		oLabel.placeAt("settings");
		oSelect.placeAt("settings");
		sap.ui.require(["sap/ui/core/Core"], function(Core) {
			Core.ready().then(function() {
				oSelect.setSelectedKey(sInitialValue);
			});
		});
		return oSelect;
	}

	select("Locale", '/locales', "",
		function(oEvent) {
			Localization.setLanguage(oEvent.getParameter("selectedItem").getKey());
		}, true
	).bindValue("/localeCaption");

	select("Calendar Type", "/calendarTypes", CalendarType.Gregorian,
		function(oEvent) {
			Formatting.setCalendarType(oEvent.getParameter("selectedItem").getKey());
		}, true
	);

	select("Legacy Date Format", '/legacyDateFormats', "",
		function(oEvent) {
			Formatting.setABAPDateFormat(oEvent.getParameter("selectedItem").getKey());
		}
	);
	select("Legacy Time Format", '/legacyTimeFormats', "",
		function(oEvent) {
			Formatting.setABAPTimeFormat(oEvent.getParameter("selectedItem").getKey());
		}
	);
	select("Legacy Number Format", '/legacyNumberFormats', "",
		function(oEvent) {
			Formatting.setABAPNumberFormat(oEvent.getParameter("selectedItem").getKey());
		}
	);


	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMatrixLayout", {
		configurable: "false",
		writable: "true",
		value: new MatrixLayout({width:"500px"})
	});

	oMatrixLayout.setLayoutFixed(false);
	oMatrixLayout.createRow(
			new Label({text: "language"}),
			new TextField({width:"200px", editable:false, value:{path:"/language"}})
	);
	oMatrixLayout.createRow(
			new Label({text: "formatLanguage"}),
			new TextField({width:"200px", editable:false, value:{path:"/formatLanguage"}})
	);
	oMatrixLayout.createRow(
			new Label({text: "formatLocale"}),
			new TextField({width:"200px", editable:false, value:{path:"/formatLocale"}})
	);
	oMatrixLayout.createRow(
			new Label({text: "Use custom settings"}),
			new CheckBox({width:"200px", editable:false, checked:{path:"/useCustomSettings"}})
	);
	oMatrixLayout.placeAt("locale");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMatrixLayout", {
		configurable: "false",
		writable: "true",
		value: new MatrixLayout({width:"500px"})
	});

	oMatrixLayout.setLayoutFixed(false);
	oMatrixLayout.createRow(
			new Label({text: "short"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new TypeDate({style:"short"})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "medium"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new TypeDate({style:"medium"})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "long"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new TypeDate({style:"long"})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "full"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new TypeDate({style:"full"})}})
	);
	oMatrixLayout.placeAt("date");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMatrixLayout", {
		configurable: "false",
		writable: "true",
		value: new MatrixLayout({width:"500px"})
	});

	oMatrixLayout.setLayoutFixed(false);
	oMatrixLayout.createRow(
			new Label({text: "short"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new Time({style:"short"})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "medium"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new Time({style:"medium"})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "long"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new Time({style:"long"})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "full"}),
			new TextField({width:"200px", value:{path:"/dateValue", type:new Time({style:"full"})}})
	);
	oMatrixLayout.placeAt("time");

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMatrixLayout", {
		configurable: "false",
		writable: "true",
		value: new MatrixLayout({width:"500px"})
	});

	oMatrixLayout.setLayoutFixed(false);
	oMatrixLayout.createRow(
			new Label({text: "integer"}),
			new TextField({width:"200px", value:{path:"/intValue", type:new Integer({groupingEnabled:true})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "integer, style: short"}),
			new TextField({width:"200px", value:{path:"/intValue", type:new Integer({groupingEnabled:true, style: "short"})}})
	);
	oMatrixLayout.createRow(
			new Label({text: "float"}),
			new TextField({width:"200px", value:{path:"/floatValue", type:new Float()}})
	);
	oMatrixLayout.createRow(
			new Label({text: "float, style: long"}),
			new TextField({width:"200px", value:{path:"/floatValue", type:new Float({style: "long"})}})
	);
	oMatrixLayout.placeAt("number");


	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oResourceModel", {
		configurable: "false",
		writable: "true",
		value: new ResourceModel({bundleUrl:"resources/i18n.properties"})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oMatrixLayout", {
		configurable: "false",
		writable: "true",
		value: new MatrixLayout()
	});

	oMatrixLayout.setModel(oResourceModel, "i18n");
	oMatrixLayout.setLayoutFixed(false);
	oMatrixLayout.createRow(
			new TextView({text: oResourceModel.getResourceBundle().getText("welcome", ["Administrator"])})
	);
	oMatrixLayout.getRows()[0].getCells()[0].setColSpan(2);
	oMatrixLayout.createRow(
			new Label({text: "{i18n>lastname}", tooltip: "{i18n>lastname}"}),
			new TextField()
	);
	oMatrixLayout.createRow(
			new Label({text: "{i18n>firstname}"}),
			new TextField()
	);
	oMatrixLayout.createRow(
			new Label({text: "{i18n>street}"}),
			new TextField()
	);
	oMatrixLayout.createRow(
			new Label({text: "{i18n>zip}"}),
			new TextField()
	);
	oMatrixLayout.createRow(
			new Label({text: "{i18n>city}"}),
			new TextField()
	);
	oMatrixLayout.placeAt("resourcemodel");
});