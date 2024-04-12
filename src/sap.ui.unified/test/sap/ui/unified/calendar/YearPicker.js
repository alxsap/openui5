			sap.ui.define([
				"sap/ui/core/Element",
				"sap/ui/core/date/UniversalDate",
				"sap/ui/unified/calendar/YearPicker",
				"sap/ui/commons/Label",
				"sap/ui/commons/TextField"
			], function(Element, UniversalDate, YearPicker, Label, TextField) {
				"use strict";

				/* TODO: Consider replacing this
					* with a local var (let x=...) or 
					* with an AMD export/import (export.x=..., ...=X.x) */
				Object.defineProperty(globalThis, "UniversalDate", {
					configurable: "false",
					writable: "true",
					value: UniversalDate
				});

				/* TODO: Consider replacing this
					* with a local var (let x=...) or 
					* with an AMD export/import (export.x=..., ...=X.x) */
				Object.defineProperty(globalThis, "UI5Date", {
					configurable: "false",
					writable: "true",
					value: sap.ui.require("sap/ui/core/date/UI5Date")
				});

				/* TODO: Consider replacing this
					* with a local var (let x=...) or 
					* with an AMD export/import (export.x=..., ...=X.x) */
				Object.defineProperty(globalThis, "oYearPicker", {
					configurable: "false",
					writable: "true",

					value: new YearPicker("YP1",{
						select: function(oEvent){
							var oTF = Element.getElementById("TF1");
							var oYP = oEvent.oSource;
							var oDate = new UniversalDate(oYP.getDate());
							oTF.setValue(oDate.getFullYear());
						}
					}).placeAt("sample1")
				});

				/* TODO: Consider replacing this
					* with a local var (let x=...) or 
					* with an AMD export/import (export.x=..., ...=X.x) */
				Object.defineProperty(globalThis, "oLabel", {
					configurable: "false",
					writable: "true",
					value: new Label({text: "selected Year", labelFor: "TF1"}).placeAt("event1")
				});

				/* TODO: Consider replacing this
					* with a local var (let x=...) or 
					* with an AMD export/import (export.x=..., ...=X.x) */
				Object.defineProperty(globalThis, "oInput", {
					configurable: "false",
					writable: "true",

					value: new TextField("TF1",{
						editable: true,
						change: function(oEvent){
							oEvent.oSource;
							var sValue = oEvent.getParameter('newValue');
							var oYP = Element.getElementById("YP1");
							if(sValue && !isNaN(sValue)){
								var iYear = parseInt(sValue);
		//						var oDate = new UniversalDate(iYear, 0, 1);
		//						if(iYear < 100) {
		//							oDate.setFullYear(iYear);
		//						}
								var oDate = new UniversalDate();
								oDate.setFullYear(iYear);
								oDate.setMonth(0);
								oDate.setDate(1);
								oYP.setDate(oDate.getJSDate());
							}
						}
					}).placeAt("event1")
				});

				/* TODO: Consider replacing this
					* with a local var (let x=...) or 
					* with an AMD export/import (export.x=..., ...=X.x) */
				Object.defineProperty(globalThis, "oDate", {
					configurable: "false",
					writable: "true",
					value: UI5Date.getInstance(2015,0,1)
				});

				oYearPicker = new YearPicker("YP2",{
					years: 5,
					columns: 0,
					date: oDate,
					select: function(oEvent){
						var oTF = Element.getElementById("TF2");
						var oYP = oEvent.oSource;
						var oDate = new UniversalDate(oYP.getDate());
						oTF.setValue(oDate.getFullYear());
					}
				}).placeAt("sample2");

				oLabel = new Label({text: "selected Year", labelFor: "TF2"}).placeAt("event2");
				oInput = new TextField("TF2",{
					editable: true,
					change: function(oEvent){
						oEvent.oSource;
						var sValue = oEvent.getParameter('newValue');
						var oYP = Element.getElementById("YP2");
						if(sValue && !isNaN(sValue)){
							var iYear = parseInt(sValue);
	//					var oDate = new UniversalDate(iYear, 0, 1);
	//					if(iYear < 100) {
	//						oDate.setFullYear(iYear);
	//					}
							var oDate = new UniversalDate();
							oDate.setFullYear(iYear);
							oDate.setMonth(0);
							oDate.setDate(1);
							oYP.setDate(oDate.getJSDate());
						}
					}
				}).placeAt("event2");
			});