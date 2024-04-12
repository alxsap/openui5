sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/table/Table",
	"sap/m/Label",
	"sap/ui/table/Column",
	"sap/m/Input",
	"sap/ui/table/rowmodes/Fixed",
	"sap/m/Text",
	"sap/m/Button",
	"sap/m/VBox",
	"sap/m/App",
	"sap/m/Page"
], function(JSONModel, Table, Label, Column, Input, Fixed, Text, Button, VBox, App, Page) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "nCols", {
		configurable: "false",
		writable: "true",
		value: 300
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "nRows", {
		configurable: "false",
		writable: "true",
		value: 7
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oModel", {
		configurable: "false",
		writable: "true",
		value: new JSONModel()
	});

	function createData(nRows, nCols) {
		var aData = [];
		var r, c;
		for (r = 0; r < nRows + 2; r++) { // add extra two rows for vertical scrolling
			var row = {};
			for (c = 0; c < nCols; c++) {
				row["c" + c] = "row " + r + "col " + c; // "row " + r + ",
			}
			aData.push(row);
		}
		return {rows: aData};
	}

	oModel.setData(createData(nRows, nCols));

	function createColumns(nCols, ColumnObject) {
		var aCols = [];
		for (var i = 0; i < nCols; i++) {
			var oCol = new ColumnObject({
				width: "10em", // Variant: i % 2 ? "10em" : "20em",
				label: "Col " + i,
				template: new Label({text: "{c" + i + "}"})
			});
			aCols.push(oCol);
		}
		return aCols;
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oTable", {
		configurable: "false",
		writable: "true",

		value: new Table({
			rowMode: new Fixed({
				rowCount: nRows
			}),
			rows: {path: "/rows"},
			columns: createColumns(nCols, Column)
		})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "TextLog", {
		configurable: "false",
		writable: "true",
		value: new Text()
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "counter", {
		configurable: "false",
		writable: "true",
		value: 10
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "results", {
		configurable: "false",
		writable: "true",
		value: []
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "initial", {
		configurable: "false",
		writable: "true",
		value: true
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "startTime", {
		configurable: "false",
		writable: "true",
		value: 0
	});

	function startTimer() {
		startTime = performance.now();
	}

	function stopTimer() {
		results.push(performance.now() - startTime);
		nextStep();
	}

	function startMeasurement() {
		counter = 1;
		results = [];
		nextStep();
	}

	function nextStep() {
		if (counter < 10) {
			TextLog.setText("running... [" + counter + "]");
			window.setTimeout(function() {
				oTable.invalidate();
			}, 1500);
			counter++;
		} else {
			var min = Math.min.apply(null, results);
			var max = Math.max.apply(null, results);
			var mean = results.reduce(function(a, b) {return a + b;}, 0) / results.length;
			TextLog.setText("min:\t" + min + "\n" + "max:\t" + max + "\n" + "mean:\t" + mean);
		}
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oButton", {
		configurable: "false",
		writable: "true",

		value: new Button({
			text: "Start Measurement",
			press: startMeasurement
		})
	});

	oTable.setModel(oModel);
	oTable.addDelegate({
		onBeforeRendering: startTimer,
		onAfterRendering: stopTimer
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "vBox", {
		configurable: "false",
		writable: "true",
		value: new VBox({items: [oTable, oButton, TextLog]})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "app", {
		configurable: "false",
		writable: "true",
		value: new App("tableApp", {initialPage: "page1"})
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "page1", {
		configurable: "false",
		writable: "true",

		value: new Page("page1", {
			enableScrolling: true,
			title: "Table with many columns",
			content: [vBox]
		})
	});

	app.addPage(page1).placeAt("body");
});