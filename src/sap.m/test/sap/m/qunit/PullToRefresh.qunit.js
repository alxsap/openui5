	sap.ui.define([
		"sap/ui/core/Lib",
		"sap/ui/thirdparty/sinon",
		"sap/ui/thirdparty/sinon-qunit",
		"sap/m/StandardListItem",
		"sap/m/library",
		"sap/m/App",
		"sap/m/List",
		"sap/m/PullToRefresh",
		"sap/m/Page",
		"sap/ui/thirdparty/jquery"
	], function(Library, sinon, sinonQunit, StandardListItem, mobileLibrary, App, List, PullToRefresh, Page, jQuery) {
		"use strict";

		// shortcut for sap.m.ListType
		const ListType = mobileLibrary.ListType;

		function addItems(list, nItems){
			var n = list.getItems().length + 1;
			for(var i = 0; i < nItems; i++){
				list.addItem(
					new StandardListItem({
						title: "List item " + (n + i),
						type: ListType.Navigation
					})
				);
			}
		}

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oRb", {
			configurable: "false",
			writable: "true",
			value: Library.getResourceBundleFor("sap.m")
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oApp", {
			configurable: "false",
			writable: "true",
			value: new App("p2RApp", {initialPage:"page1"})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "sPullDwn", {
			configurable: "false",
			writable: "true",
			value: oRb.getText("PULL2REFRESH_PULLDOWN")
		}), Object.defineProperty(globalThis, "sRelease", {
			configurable: "false",
			writable: "true",
			value: oRb.getText("PULL2REFRESH_RELEASE")
		}), Object.defineProperty(globalThis, "sRefresh", {
			configurable: "false",
			writable: "true",
			value: "refreshing"
		}), Object.defineProperty(globalThis, "sLoading", {
			configurable: "false",
			writable: "true",
			value: oRb.getText("PULL2REFRESH_LOADING")
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "sDescription", {
			configurable: "false",
			writable: "true",
			value: "pull to refresh"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oList", {
			configurable: "false",
			writable: "true",
			value: new List("oList", {inset : false})
		});

		addItems(oList, 15);

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oP2R", {
			configurable: "false",
			writable: "true",

			value: new PullToRefresh({
				description: sDescription,
				refresh: function(){
					oP2R.setDescription(sRefresh);
				}
			})
		});

		oP2R._bTouchMode = true;

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oPage1", {
			configurable: "false",
			writable: "true",

			value: new Page("page1", {
				title: "PullToRefresh Control",
				enableScrolling: true,
				content : [ oP2R, oList ]
			})
		});

		oApp.addPage(oPage1);
		oApp.placeAt("content");

		QUnit.module("Properties");
		QUnit.test("Default values", function(assert) {
			assert.expect(3);
			assert.strictEqual(oP2R.getShowIcon(), false, "Default value for showIcon");
			assert.strictEqual(oP2R.getDescription(), sDescription, "Description value");
			assert.ok(!oP2R.getCustomIcon(), "Custom icon is not set");
		});

		QUnit.module("Check HTML");

		QUnit.test("HTML", function(assert) {
			var $P2R = oP2R.$();
			var iScroller = oPage1.getScrollDelegate()._scroller;
			if (iScroller) { // this is executed when iScroll is used
				assert.expect(8);
				assert.ok($P2R.position().top + $P2R.height() - jQuery("#page1-intHeader").height() <= 0, "Control is hidden over the top of the parent container");
			} else {
				assert.expect(7);
			}
			assert.ok($P2R.length > 0, "Pull down control is rendered");
			assert.ok($P2R.children(".sapMPullDownCI").length === 0, "No custom logo is rendered initially");
			assert.ok(!$P2R.hasClass("sapMPullDownLogo"), "Standard logo is not shown");
			assert.strictEqual($P2R.children(".sapMPullDownText").text(), sPullDwn, "Pull down text is set correctly");
			assert.strictEqual($P2R.children(".sapMPullDownInfo").text(), sDescription, "Pull down description is set correctly");
			assert.ok(!($P2R.hasClass("sapMFlip")), "Arrow is not rotated");
			assert.ok(!($P2R.hasClass("sapLoading")), "Loading class is not set");
		});

		// Test pull to refresh functionality
		QUnit.module("Behavior");

		QUnit.test("Pull Down", function(assert) {
			var done = assert.async();
			var oSpy = this.spy();
			var iScroller = oPage1.getScrollDelegate()._scroller;

			if (iScroller) { // this is executed when iScroll is used
				assert.expect(14); // 13 + event
				var iTop = oList.$().offset().top + 20;
				var iLeft = 10;
				oP2R.attachRefresh(oSpy);
				iScroller._start({
					type: "touchstart",
					touches : [{ pageX: iLeft, pageY: iTop, length: 1 }],
					pageX: iLeft,
					pageY: iTop
				});

				iTop = iTop + 250;

				iScroller._move({ // Pull down
					type: "touchmove",
					touches : [{ pageX: iLeft, pageY: iTop, length: 1 }],
					pageX: iLeft,
					pageY: iTop
				});

				// Check HTML
				assert.strictEqual(oP2R._iState, 1, "New state after pull should be 1 - release to refresh");
				var $P2R = oP2R.$();
				assert.ok($P2R.children(".sapMPullDownText").text() === sRelease, "Release text is set correctly");
				assert.ok($P2R.position().top >= 0, "Control is visible");
				assert.ok($P2R.hasClass("sapMFlip"), "Arrow is rotated");

				setTimeout(function() {
					iScroller._end({ // Release
						type: "touchend",
						touches : [{ pageX: iLeft, pageY: iTop, length: 1 }],
						pageX: iLeft,
						pageY: iTop
					});

					//
					setTimeout(function() {
						assert.strictEqual(oSpy.callCount, 1, "Refresh event has been fired.");
						assert.strictEqual(oP2R._iState, 2, "New state after release should be 2 - loading");
						assert.ok($P2R.children(".sapMPullDownText").text() === sLoading, "Loading text is set");
						assert.strictEqual($P2R.children(".sapMPullDownInfo").text(), sRefresh, "Description is set");
						assert.ok($P2R.hasClass("sapMLoading"), "Loading css is set");
						oP2R.hide(); // Close
						oP2R.setDescription(sDescription);

						setTimeout(function() {
							assert.strictEqual(oP2R._iState, 0, "New state after hide should be 0 - initial");
							assert.strictEqual($P2R.children(".sapMPullDownText").text(), sPullDwn, "Initial text is restored");
							assert.strictEqual($P2R.children(".sapMPullDownInfo").text(), sDescription, "Initial description is restored");
							assert.ok($P2R.position().top + $P2R.height() - jQuery("#page1-intHeader").height() <= 0, "Control is hidden over the top of the parent container");
							assert.ok(!($P2R.hasClass("sapMFlip")), "Arrow is not rotated");
							done();
						}, 1000);
					}, 1000);
				}, 1000);

			} else { // this is executed when iScroll is not used (= in mouse environments)  TODO: implement test once control is implemented
				assert.expect(0);
				done();
			}
		});
	});