sap.ui.define([
	"sap/ui/core/format/NumberFormat",
	"sap/ui/core/Locale",
	"sap/ui/model/json/JSONModel",
	"sap/ui/table/Table",
	"sap/ui/table/Column",
	"sap/m/Label",
	"sap/m/Text",
	"sap/ui/layout/VerticalLayout",
	"sap/m/Title"
], function(NumberFormat, Locale, JSONModel, Table, Column, Label, Text, VerticalLayout, Title) {
	"use strict";

	function getFormatter(sLocale, sCurrency, oFormatOptions) {
		var oLocale = new Locale(sLocale),
			oFormat = NumberFormat.getCurrencyInstance(oFormatOptions, oLocale);
		return function(fValue) {
			return oFormat.format(fValue, sCurrency);
		}
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",

		value: new JSONModel({
			rows: [
				{value: 0},
				{value: 0.01},
				{value: 1},
				{value: 2},
				{value: 10},
				{value: 100},
				{value: 1000},
				{value: 10000},
				{value: 100000},
				{value: 1000000},
				{value: 10000000},
				{value: 100000000},
				{value: 1000000000},
				{value: 10000000000},
			]
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTable", {
		configurable: "false",
		writable: "true",

		value: new Table({
			models: oModel,
			selectionMode: "None",
			visibleRowCount: oModel.getProperty("/rows").length,
			columns: [
				new Column({
					multiLabels: [
						new Label({text: "Saudi Arabia (ar_SA)", textAlign: "Center", width: "100%"}),
						new Label({text: "SAR"})
					],
					headerSpan: [4, 1],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("ar_SA", "SAR", {style: "short", currencyCode: true, trailingCurrencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "ر.س."})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("ar_SA", "SAR", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "US$‎‬"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("ar_SA", "USD", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "€‎‬"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("ar_SA", "EUR", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label({text: "Iran (fa_IR)", textAlign: "Center", width: "100%"}),
						new Label({text: "IRR"})
					],
					headerSpan: [4, 1],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("fa_IR", "IRR", {style: "short", currencyCode: true, trailingCurrencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "ریال"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("fa_IR", "IRR", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "$"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("fa_IR", "USD", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "‎‪$CA‬"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("fa_IR", "CAD", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label({text: "Israel (he_IL)", textAlign: "Center", width: "100%"}),
						new Label({text: "ILS"})
					],
					headerSpan: [4, 1],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("he_IL", "ILS", {style: "short", currencyCode: true, trailingCurrencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "₪"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("he_IL", "ILS", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "$"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("he_IL", "USD", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "CA$‎"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("he_IL", "CAD", {style: "short", currencyCode: false})
						}
					})
				})
			],
			rows: {
				path: "/rows"
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oCurrencyCodeTableTrailing", {
		configurable: "false",
		writable: "true",

		value: new Table({
			models: oModel,
			selectionMode: "None",
			visibleRowCount: oModel.getProperty("/rows").length,
			columns: [
				new Column({
					multiLabels: [
						new Label({text: "Saudi Arabia (ar_SA)", textAlign: "Center", width: "100%"}),
						new Label({text: "SAR short"})
					],
					headerSpan: [2, 1],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("ar_SA", "SAR", {style: "short", currencyCode: true})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "SAR"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("ar_SA", "SAR", {currencyCode: true})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label({text: "Iran (fa_IR)", textAlign: "Center", width: "100%"}),
						new Label({text: "IRR short"})
					],
					headerSpan: [2, 1],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("fa_IR", "IRR", {style: "short", currencyCode: true})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "IRR"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("fa_IR", "IRR", {currencyCode: true})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label({text: "Israel (he_IL)", textAlign: "Center", width: "100%"}),
						new Label({text: "ILS short"})
					],
					headerSpan: [2, 1],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("he_IL", "ILS", {style: "short", currencyCode: true})
						}
					})
				}),
				new Column({
					multiLabels: [
						new Label(),
						new Label({text: "ILS"})
					],
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("he_IL", "ILS", {currencyCode: true})
						}
					})
				})
			],
			rows: {
				path: "/rows"
			}
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oVerticalLayout", {
		configurable: "false",
		writable: "true",

		value: new VerticalLayout({
			content: [new Title({text:"CLDR"}), oTable, new Title({text:"Trailing"}), oCurrencyCodeTableTrailing]
		})
	});

	oVerticalLayout.placeAt("content");
});