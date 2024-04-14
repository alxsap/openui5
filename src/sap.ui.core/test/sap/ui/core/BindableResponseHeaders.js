sap.ui.define([
	"sap/ui/core/Control",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/ui/layout/VerticalLayout"
], function(Control, ODataModel, VerticalLayout) {
	"use strict";
	// Configuration
	var iResponseDelay = 200;


	// Fake Service
	var xhr = sinon.useFakeXMLHttpRequest();
	xhr.useFilters = true;
	xhr.addFilter(function(method, url) {
		return url.indexOf("fakeservice://") != 0;
	});

	xhr.onCreate = function(request) {
		request.onSend = function() {
			// Default request answer values:
			var mResponseHeaders = {
				"Content-Type" : "application/json;charset=utf-8",
				"DataServiceVersion" : "2.0;"
			};
			var iStatus = 200;
	
			var iPos = request.url.indexOf("?");
			if (iPos > -1) {
				request.url = request.url.substr(0, iPos);
			}
	
	
	
			if (request.url === "fakeservice://northwind/") {
				sResponse = NorthwindData.root;
			} else if (request.url === "fakeservice://northwind/$metadata") {
				mResponseHeaders["Content-Type"] = "application/xml;charset=utf-8";
				sResponse = NorthwindData.$metadata;
			} else if (request.url === "fakeservice://northwind/Products/$count") {
				mResponseHeaders["Content-Type"] = "text/plain";
				sResponse = NorthwindData.Products.d.results.length;
			} else if (request.url === "fakeservice://northwind/Products") {
				mResponseHeaders["Age"] = Date.now();
	
				sResponse = JSON.stringify(NorthwindData.Products);
			} else {
				var aMatches = /fakeservice:\/\/northwind\/Products\((.*?)\)/.exec(request.url);
				var iProductId = parseInt(aMatches[1]);
	
				mResponseHeaders["Age"] = Date.now();
	
				sResponse = JSON.stringify({
					d: NorthwindData.Products.d.results[iProductId - 1]
				});
			}
	
	
	
	
	
			if (request.async === true) {
				var oRequest = request;
				setTimeout(function() {
					oRequest.respond(iStatus, mResponseHeaders, sResponse);
				}, iResponseDelay);
			} else {
				request.respond(iStatus, mResponseHeaders, sResponse);
			}
		};
	};


	// Display control
	Control.extend("AgeDisplay", {
		metadata: {
			properties: {
				label: { type: "string" },
				value: { type: "string" },
				age: { type: "string" },
				maxAge: { type: "int", defaultValue: "30000" }
			}
		},
	
		renderer: {
			apiVersion: 2,
			render: function(oRm, oControl) {
				var sId = oControl.getId();

				oRm.openStart("div", oControl);
				oRm.style("width", "100%");
				oRm.style("height", "100%");
				oRm.style("padding", "1rem");
				oRm.style("margin-bottom", "1rem");
				oRm.attr("title", "Age: " + oControl.getAge());
				oRm.openEnd();

				Math.round((Date.now() - oControl.getAge()) / 1000);
				oRm.openStart("div", sId + "-label");
				oRm.style("display", "inline-block");
				oRm.style("width", "28%");
				oRm.openEnd();
				oRm.text(oControl.getLabel());
				oRm.close("div");

				oRm.openStart("div", sId + "-value");
				oRm.style("display", "inline-block");
				oRm.style("width", "28%");
				oRm.openEnd();
				oRm.text(oControl.getValue());
				oRm.close("div");

				oRm.openStart("div", sId + "-age");
				oRm.style("display", "inline-block");
				oRm.style("width", "28%");
				oRm.openEnd();
				oRm.text("Age:");
				oRm.text(oControl.getValue());
				oRm.text("s");
				oRm.close("div");

				oRm.openStart("button", sId + "-refresh");
				oRm.style("display", "inline-block");
				oRm.style("width", "10%");
				oRm.openEnd();
				oRm.text("Refresh");
				oRm.close("button");

				oRm.close("div");
			}
		},
	
		onBeforeRendering: function() {
			clearInterval(this._refreshAgeInterval);
		},
	
		onAfterRendering: function() {
			this.getDomRef("refresh").addEventListener("click", function(oEvent) {
				var sPath = this.getBindingContext().getPath();
				oModel.read(sPath);
			}.bind(this));
	
			clearInterval(this._refreshAgeInterval);
			this._refreshAgeInterval = setInterval(this._showAge.bind(this), 100);
			this._showAge();
		},
	
		_showAge: function() {
			var iAge = parseInt(Date.now() - this.getAge());
			var fAge = Math.round(iAge / 1000);
	
			var oDom = this.getDomRef();
			this.getDomRef("age").innerHTML = "Age: " + fAge + "s";
	
			var iMaxAge = this.getMaxAge();
	
			if (iAge > iMaxAge) {
				iAge = iMaxAge;
			} else if (iAge < 0) {
				iAge = 0;
			}
	
			var fPercent = iAge / iMaxAge;
	
			var iR = Math.round(-300 + (400 * fPercent));
			var iY = Math.round(-100 + (300 * fPercent));
			var iG = Math.round(100 + (100 * fPercent));
	
			oDom.style.background = "linear-gradient(to bottom, " +
				"red " + iR + "%, " +
				"yellow " + iY + "%, " +
				"green " + iG + "%" +
			")";
		}
	
	});


	// UI Code
	var oModel = new ODataModel("fakeservice://northwind", {
		bindableResponseHeaders: [ "age" ],
		json: true,
		useBatch: false
	});
	sap.ui.getCore();


	var oLayout = new VerticalLayout({
		width: "100%"
	});
	oLayout.placeAt("content");
	oLayout.bindAggregation("content", {
		path: "/Products",
		template: new AgeDisplay({
			label: "Name",
			value: {
				path: "ProductName"
			},
			age: {
				path: "__metadata/headers/age"
			}
		})
	});
});
