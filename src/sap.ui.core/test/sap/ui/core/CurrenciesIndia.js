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
				{value: 100000000000},
				{value: 1000000000000},
				{value: 10000000000000},
				{value: 100000000000000},
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
					label: new Label({text: "INR", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "INR", {style: "short", currencyCode: true, trailingCurrencyCode: false})
						}
					})
				}),
				new Column({
					label: new Label({text: "INR", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "INR", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					label: new Label({text: "INR", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "INR", {currencyCode: false})
						}
					})
				}),
				new Column({
					label: new Label({text: "USD", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "USD", {style: "short", currencyCode: true, trailingCurrencyCode: false})
						}
					})
				}),
				new Column({
					label: new Label({text: "USD", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "USD", {style: "short", currencyCode: false})
						}
					})
				}),
				new Column({
					label: new Label({text: "USD", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "USD", {currencyCode: false})
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
					label: new Label({text: "INR short", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "INR", {style: "short", currencyCode: true})
						}
					})
				}),
				new Column({
					label: new Label({text: "INR", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "INR", {currencyCode: true})
						}
					})
				}),
				new Column({
					label: new Label({text: "USD short", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "USD", {style: "short", currencyCode: true})
						}
					})
				}),
				new Column({
					label: new Label({text: "USD", textAlign: "Center"}),
					template: new Text({
						text: {
							path: "value",
							formatter: getFormatter("en_IN", "USD", {currencyCode: true})
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