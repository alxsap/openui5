	sap.ui.define([
		"sap/ui/core/IconPool",
		"sap/ui/core/HTML",
		"sap/m/ObjectAttribute",
		"sap/m/ObjectHeader",
		"sap/ui/core/library",
		"sap/m/ObjectStatus",
		"sap/m/VBox",
		"sap/m/HBox",
		"sap/m/library",
		"sap/m/Label",
		"sap/m/Switch",
		"sap/m/ProgressIndicator",
		"sap/m/Popover",
		"sap/m/List",
		"sap/m/StandardListItem",
		"sap/m/ActionListItem",
		"sap/m/ObjectNumber",
		"sap/m/ObjectMarker",
		"sap/m/SplitApp",
		"sap/m/Button",
		"sap/m/Page",
		"sap/m/CheckBox",
		"sap/base/Log",
		"sap/ui/Device"
	], function(
		IconPool,
		HTML,
		ObjectAttribute,
		ObjectHeader,
		coreLibrary,
		ObjectStatus,
		VBox,
		HBox,
		mobileLibrary,
		Label,
		Switch,
		ProgressIndicator,
		Popover,
		List,
		StandardListItem,
		ActionListItem,
		ObjectNumber,
		ObjectMarker,
		SplitApp,
		Button,
		Page,
		CheckBox,
		Log,
		Device
	) {
		"use strict";

		// shortcut for sap.m.ObjectMarkerType
		const ObjectMarkerType = mobileLibrary.ObjectMarkerType;

		// shortcut for sap.m.BackgroundDesign
		const BackgroundDesign = mobileLibrary.BackgroundDesign;

		// shortcut for sap.m.PlacementType
		const PlacementType = mobileLibrary.PlacementType;

		// shortcut for sap.m.FlexAlignContent
		const FlexAlignContent = mobileLibrary.FlexAlignContent;

		// shortcut for sap.ui.core.ValueState
		const ValueState = coreLibrary.ValueState;

		// shortcut for sap.ui.core.TextDirection
		const TextDirection = coreLibrary.TextDirection;

		function addToPage(oOH){
			oOH.addStyleClass("sapUiResponsivePadding--header")
			detail.addContent(oOH);
			detail.addContent(new HTML({
				content : "<div style='width:100%;height:2px;background-color:blue'/>"
			}));
		}

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "attrs", {
			configurable: "false",
			writable: "true",

			value: [ new ObjectAttribute({
				text : "Ñagçyfox Contract #D1234567890"
			}), new ObjectAttribute({
				text : "Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John DoeÑagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe Ñagçyfox Created by: John Doe"
			}), new ObjectAttribute({
				text : "Ñagçyfox Created at: April 9, 2013"
			}) ]
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "attrs2", {
			configurable: "false",
			writable: "true",

			value: [ new ObjectAttribute({
				text : "Contract #D1234567890 Ñagçyfox",
				active : true,
				press : function() {

					attrs2[0].setText("Ñagçyfox #D1234567890 Contract");
				}
			}), new ObjectAttribute({
				text : "Created by: John Doe Ñagçyfox",
				active : true,
				press : function() {

					attrs2[0].setText("Ñagçyfox Contract #D1234567890");
				}
			}) ]
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh1", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"oh1", {
						intro : "1234 On behalf of John Smith Ñagçyfox RTL",
						introTextDirection: TextDirection.RTL,
						title : "5678 some normal title RTL",
						titleTextDirection: TextDirection.RTL,
						number : "3.624,00 RTL",
						numberUnit : "Euro",
						numberState : ValueState.Success,
						numberTextDirection: TextDirection.RTL,
						statuses : [ new ObjectStatus({
							text : "Lorem ipsum dolor sit amet",
							icon : IconPool.getIconURI("inbox"),
							state : ValueState.Success
						}), new ObjectStatus({
							icon : IconPool.getIconURI("inbox"),
							state : ValueState.Error
						}) ]
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh1Icon", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh1-with-icon",{
						intro : "1234 On behalf of John Smith Ñagçyfox LTR",
						introTextDirection: TextDirection.LTR,
						title : "5678 some normal title LTR",
						titleTextDirection: TextDirection.LTR,
						icon: "sap-icon://nutrition-activity",
						number : "3.624,00 LTR",
						numberUnit : "Euro",
						numberState : ValueState.Success,
						numberTextDirection: TextDirection.LTR,
						statuses : [ new ObjectStatus({
							text : "Lorem ipsum dolor sit amet",
							icon : IconPool.getIconURI("inbox"),
							state : ValueState.Success
						}) ]
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh1IconNoNumber", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"oh1-with-icon-no-number",	{
						icon : IconPool.getIconURI("attachment"),
						intro : "On behalf of John Smith Ñagçyfox",
						title : "The quick brown fox jumps over the lazy dog. Very long title going on more lines. An apple a day keeps the doctor away. Very long title going on more lines. Very long title going on more lines.",
						statuses : [ new ObjectStatus({
							text : "Lorem ipsum dolor sit amet",
							icon : IconPool.getIconURI("inbox"),
							state : ValueState.Success
						})]
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh2", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"oh2",
					{
						title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",

						statuses : [ new ObjectStatus({
							text : ""
						}), new ObjectStatus({}) ],
						attributes : [ new ObjectAttribute({}), new ObjectAttribute({}), new ObjectAttribute({}), new ObjectAttribute({}), ]
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh3", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"oh3",
					{
						title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
						number : "3.624.000.000,00",
						numberUnit : "Euro",
						statuses : [ new ObjectStatus({
							text : "Ñgçy Positive Text Ñgçy",
							state : ValueState.Success
						}), new ObjectStatus({
							text : "Negative Text Ñgçy",
							state : ValueState.Error
						}) ]
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh3_1", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"oh3_1",
					{
						title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
						number : "6,00",
						numberUnit : "Euro",
						numberState : ValueState.Error,
						statuses : [ new ObjectStatus({
							text : "Negative Text Ñgçy",
							state : ValueState.Error
						}) ]
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh3_2", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"oh3_2",
					{
						title : "Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
						number : "3.624",
						numberUnit : "EUR",
						numberState : ValueState.Warning,
						statuses : [ new ObjectStatus({
							text : "Ñgçy Positive Text Ñgçy",
							state : ValueState.Success
						}), new ObjectStatus({
							text : "Negative Text Ñgçy",
							state : ValueState.Error
						}) ],
						attributes : [ new ObjectAttribute({
							text : "This one is invisible",
							visible : false
						}),
						new ObjectAttribute({
							text : "Ñagçyfox Contract #D1234567890"
						}) ],
						markFavorite : true
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh4PressHandler", {
			configurable: "false",
			writable: "true",

			value: function(oEvent) {

				if (oh4.getIcon()) {
					oh4.setIcon(null);
				} else {
					oh4.setIcon(IconPool.getIconURI("attachment"));
				}
			}
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh4", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh4", {
				intro : "On behalf of John Smith Ñagçyfox",
				title : "Title is Active Ñagçyfox Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				titleActive : true,
				titlePress : oh4PressHandler,
				number : "3.628.000",
				numberUnit : "EUR",
				numberState : ValueState.None,
				attributes : attrs,
				statuses : [ new ObjectStatus({
					text : "Ñgçy Positive Text Ñgçy",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy Negative Text Ñgçy",
					state : ValueState.Error
				}) ],
				icon : IconPool.getIconURI("attachment"),
				iconActive : true,
				iconPress : oh4PressHandler
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh4WithResponsiveness", {
			configurable: "false",
			writable: "true",

			value: new VBox({
				items: [oh4, new HBox({
					alignItems: FlexAlignContent.Center,
					items: [new Label({text: "Responsive:"}), new Switch({
						change: function (oEvent) {
							oh4.setResponsive(oEvent.getParameter("state"));
						}
					})]
				})]
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh5", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"oh5",
					{
						intro : "On behalf of John Smith",
						introActive : true,
						introPress : function() {
							alert("intro is pressed");
							//oh5
								//	.setTitle("Intro pressed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.");
						},
						title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
						titleActive : true,
						titleHref: "http://www.google.com",
						titleTarget: "_blank",
						titlePress : function() {

							oh5
									.setTitle("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.");
						},
						number : "999.999.999.999.999.999,00",
						numberUnit : "EUR",
						attributes : attrs2,
						markFlagged : true,
						showMarkers : true
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh6", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh6", {
				icon : IconPool.getIconURI("attachment")
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh7PressHandler", {
			configurable: "false",
			writable: "true",

			value: function(oEvent) {

				Log.debug(oEvent.getParameter("domRef") && oEvent.getParameter("domRef").id);
				if (oh7.getIcon() === IconPool.getIconURI("attachment")) {
					oh7.setIcon("images/SAPUI5Icon.png");
				} else {
					oh7.setIcon(IconPool.getIconURI("attachment"));
				}
			}
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh7", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh7", {
				title : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus, turpis vitae porttitor hendrerit, elit dui mollis neque, id suscipit lorem mi in sem.",
				titleActive : true,
				titlePress : oh7PressHandler,
				intro : "On behalf of John Smith",
				introActive : true,
				introHref: "http://www.google.com",
				introTarget: "_blank",
				number : "3,00",
				numberUnit : "EUR",
				numberState : ValueState.Success,
				icon : IconPool.getIconURI("attachment"),
				iconActive : true,
				iconPress : oh7PressHandler,
				markFlagged : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh8", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh8", {
				number : "3,00",
				numberUnit : "EUR",
				numberState : ValueState.Success,
				markFavorite : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh9", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh9", {
				title : "First Status and First Attribute",
				number : "3,00",
				numberUnit : "EUR",
				numberState : ValueState.Success,
				statuses : [ new ObjectStatus({
					text : "First Status",
				}) ],
				attributes : [ new ObjectAttribute({
					text : "First Attribute"
				}), new ObjectAttribute({}), new ObjectAttribute({}), ],
				markFavorite : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh10", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh10", {
				title : "Progress Indicator with First Status and First Attribute",
				number : "3,00",
				numberUnit : "EUR",
				numberState : ValueState.Success,
				statuses : [ new ObjectStatus({
					text : "Testing progress indicators",
					state : ValueState.Success
				}),
				new ProgressIndicator("oh10-pi", {
					visible : true,
					enabled : true,
					state : ValueState.NEUTRAL,
					displayValue : '80%',
					percentValue : 80,
					showValue : true,
					width : '100%',
					height : '1.375rem'
				}),
				new ObjectStatus({
					text : "The next Progress Indicator is 80% width",
					state : ValueState.Success
				}),
				new ProgressIndicator("oh10-pi2", {
					visible : true,
					enabled : true,
					state : ValueState.NEUTRAL,
					displayValue : '80%',
					percentValue : 80,
					showValue : true,
					width : '80%'
				})],
				attributes : [ new ObjectAttribute({
					text : "Progress Indicator below"
				}), new ObjectAttribute({
					text : "Status text"
				}), new ObjectAttribute({
					text : "Progress Indicator 1"
				}), new ObjectAttribute({
					text : "Status text"
				}), new ObjectAttribute({
					text : "Progress Indicator 2 with 80% witdh"
				})],
				markFlagged : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh11", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "Object that is flagged and favorite",
				number : "3.628.000",
				numberUnit : "EUR",
				numberState : ValueState.Success,
				markFavorite : true,
				markFlagged : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh12", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "Object that is favorite",
				number : "3.628.000",
				numberUnit : "EUR",
				numberState : ValueState.Success,
				markFavorite : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh13", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "Object that is flagged",
				number : "3.628.000",
				numberUnit : "EUR",
				numberState : ValueState.Error,
				markFlagged : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh14", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "Object that is flagged with attribute",
				number : "3.628.000",
				numberUnit : "EUR",
				numberState : ValueState.Error,
				attributes : [ new ObjectAttribute({
					text : "Attribute number 1"
				}), new ObjectAttribute({
					text : "Attribute number 2"
				}) ],
				markFlagged : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh15", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "Object for testing flag and favorite changes",
				number : "3.628.000",
				numberUnit : "EUR",
				numberState : ValueState.Error,
				markFavorite : true,
				markFlagged : true,
				showMarkers : true
			})
		});

		//test popover title
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "domRef", {
			configurable: "false",
			writable: "true",
			value: null
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh16EventHandler", {
			configurable: "false",
			writable: "true",

			value: function(oEvent) {
				domRef = oEvent.getParameters().domRef;
				var popover = new Popover({
						placement: PlacementType.Bottom,
						showHeader: true,
						content: new List({
							mode: "SingleSelectMaster",
							includeItemInSelection : true,
							select : function (evt) {
									header.setTitle(evt.getParameter("listItem").getTitle());
									popover.close();
							},
							items: [
									new StandardListItem({
										title : "Lorem ipsum dolor",
										selected : true
									}),
									new StandardListItem({
										title : "Lorem ipsum",
									}),
									new StandardListItem({
										title : "Lorem ipsum dolor sit amet et sineat",
									}),
									new StandardListItem({
										title : "Lorem ipsum",
									}),
									new ActionListItem({
										text : "Lorem ipsum",
									}),
									new ActionListItem({
										text : "Lorem ipsum",
									})
							 ] //end of item
						}) // end of content
				}); //end of popover
				popover.openBy(domRef);
			}
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh16", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "Object Header for testing title arrow icon",
				showTitleSelector : true,
				titleSelectorPress : oh16EventHandler,
				titleSelectorTooltip: "Related Options",
				number : "1.000",
				numberUnit : "EUR",
				numberState : ValueState.Error,
				markFavorite : true,
				markFlagged : true,
				showMarkers : true,
				icon : IconPool.getIconURI("attachment"),
				iconActive : true,
				iconPress : oh7PressHandler
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh15StatusesId", {
			configurable: "false",
			writable: "true",
			value: "oh15Statuses"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh17", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(oh15StatusesId, {
				title : "Header with 15 Statuses",
				showTitleSelector : true,
				titleSelectorPress : oh16EventHandler,
				number : "100.00",
				numberUnit : "EUR",
				attributes : [ new ObjectAttribute(oh15StatusesId + "-attr1", {
					text : "Attribute # 1"
				}) ],
				statuses : [ new ObjectStatus({
					text : "Status # 1",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 2",
					state : ValueState.None
				}), new ObjectStatus({
					text : "Status # 3",
					state : ValueState.Error
				}), new ObjectStatus({
					text : "Status # 4",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 5",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 6",
					state : ValueState.Error
				}), new ObjectStatus({
					text : "Status # 7",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 8",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 9",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 10",
					state : ValueState.Warning
				}), new ObjectStatus({
					text : "Status # 11",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 12",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 13",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 14",
					state : ValueState.Success
				}), new ObjectStatus({
					text : "Status # 15",
					state : ValueState.None
				}) ],
				markFavorite : true,
				markFlagged : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oh18", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader("oh18", {
				title : "Progress Indicator with Flag",
				number : "3,00",
				numberUnit : "EUR",
				numberState : ValueState.Error,
				showTitleSelector : true,
				titleSelectorPress : oh16EventHandler,
				statuses : [ new ObjectStatus({
					text : "Order Shipping slow"
				}), new ProgressIndicator("oh18-pi", {
					visible : true,
					enabled : true,
					state : ValueState.NEUTRAL,
					displayValue : '56%',
					percentValue : 56,
					showValue : true,
					height : '22px', //1.375rem
				}), new ObjectStatus({
					text : "Productivity High"
				}), new ProgressIndicator("oh18-pi2", {
					visible : true,
					enabled : true,
					state : ValueState.NEUTRAL,
					displayValue : '90%',
					percentValue : 90,
					showValue : true,
					height : '22px', //1.375rem
				}), new ObjectStatus({
					text : "Quality Good"
				}) ],
				attributes : [ new ObjectAttribute({
					text : "Order Shipping Flag"
				}), new ObjectAttribute({
					text : "Order Shipping Speed"
				}), new ObjectAttribute({
					text : "Order Shipping Progress Indicator"
				}), new ObjectAttribute({
					text : "Productivity"
				}), new ObjectAttribute({
					text : "Productivity Progress Indicator"
				}), ],
				markFlagged : true,
				showMarkers : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId1", {
			configurable: "false",
			writable: "true",
			value: "ohc1"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed1", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId1, {
				title : "Ñagçyfox Condensed Object header with attribute, Ñagçyfox number and number unit",
				number : "3.628.000",
				numberUnit : "EUR",
				condensed : true,
				attributes : [ new ObjectAttribute({
					text : "Ñagçyfox This is the only attribute in the object header Ñagçyfox"
				}), new ObjectAttribute({
					text : "This attribute should be invisible"
				}) ],
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId2", {
			configurable: "false",
			writable: "true",
			value: "ohc2"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed2", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId2, {
				title : "Ñagçyfox Condensed Object header Arrow Icon with attribute, Ñagçyfox number and number unit",
				number : "3.628.000",
				numberUnit : "EUR",
				condensed : true,
				showTitleSelector : true,
				titleSelectorPress : oh16EventHandler,
				attributes : [ new ObjectAttribute({
					text : "Ñagçyfox This is the only attribute in the object header Ñagçyfox"
				}), new ObjectAttribute({
					text : "This attribute should be invisible"
				}) ],
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId3", {
			configurable: "false",
			writable: "true",
			value: "ohc3"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed3", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId3, {
				title : "Condensed Object header Ñagçyfox Arrow Icon without anything else Ñagçyfox",
				condensed : true,
				showTitleSelector : true,
				titleSelectorPress : oh16EventHandler
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId4", {
			configurable: "false",
			writable: "true",
			value: "ohc4"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed4", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId4, {
				title : "Ñagçyfox Condensed Object header with attribute",
				condensed : true,
				attributes : [ new ObjectAttribute({
					text : "Ñagçyfox This is the only attribute in the object header Ñagçyfox"
				})],
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId5", {
			configurable: "false",
			writable: "true",
			value: "ohc5"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed5", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId5, {
				title : "Ñagçyfox Condensed Object header with number and number unit",
				number : "3.628.000",
				numberUnit : "EUR",
				condensed : true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId6", {
			configurable: "false",
			writable: "true",
			value: "ohc6"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed6", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId6, {
				title : "Ñagçyfox Condensed Object header with attribute, Ñagçyfox number and number unit. The number is long to demonstrate overflow",
				number : "3.628.000.000.000",
				numberUnit : "EUR",
				condensed : true,
				attributes : [ new ObjectAttribute({
					text : "Ñagçyfox overflow testing."
				})],
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId7", {
			configurable: "false",
			writable: "true",
			value: "ohc7"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed7", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId7, {
				title : "Ñagçyfox short title",
				number : "3.628.000.000.000",
				numberUnit : "EUR",
				condensed : true,
				attributes : [ new ObjectAttribute({
					text : "Ñagçyfox long attribute description for property display testing."
				})],
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId8", {
			configurable: "false",
			writable: "true",
			value: "ohc8"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed8", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId8, {
				title : "Ñagçyfox Condensed Object header with solid background",
				number : "3.628.000",
				numberUnit : "EUR",
				condensed : true,
				backgroundDesign: BackgroundDesign.Solid,
				attributes : [ new ObjectAttribute({
					text : "Ñagçyfox This is the only attribute in the object header Ñagçyfox"
				})],
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensedId9", {
			configurable: "false",
			writable: "true",
			value: "ohc9"
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohCondensed9", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(ohCondensedId9, {
				title : "InLayoutNotworkingfineWithSapceInName verrrrrrrryyyyyyyyyyylongggggggggggname",
				showTitleSelector : true,
				condensed : true,
				titleSelectorPress : oh16EventHandler
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohAdditionalNumbers", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"ohAdditionalNumbers", {
						title : "Additional numbers example",
						showTitleSelector : true,
						number : "500230.09",
						numberUnit : "USD",
						numberState : ValueState.Success,
						additionalNumbers : [
							new ObjectNumber({
								number : "1.10234",
								unit : "Conversion Rate"
						}) ]
					})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "objectHeaderLayout", {
			configurable: "false",
			writable: "true",

			value: new VBox({
				width : "200px"
			}
		)
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "ohMarkers", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader(
					"ohMarkers", {
						intro : "Object header with sap.m.ObjectMarker",
						title : "5678 some normal title RTL",
						number : "3.624,00 RTL",
						numberUnit : "Euro",
						numberState : ValueState.Success,
						statuses : [ new ObjectStatus({
							text : "Lorem ipsum dolor sit amet",
							icon : IconPool.getIconURI("inbox"),
							state : ValueState.Success
						}), new ObjectStatus({
							icon : IconPool.getIconURI("inbox"),
							state : ValueState.Error
						}) ],
						markers: [
							new ObjectMarker({id: "draft", type: ObjectMarkerType.Draft}),
							new ObjectMarker({id: "unsaved", type: ObjectMarkerType.Unsaved})
						]
					})
		});

		objectHeaderLayout.addItem(ohCondensed9);

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oLongTitleOH", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "TitleThatDoesNotHaveAnySpaceAsItIsOneVeryLongWordWithoutNarrowClassSet",
				showTitleSelector: true,
				titleActive: true
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oLongTitleOH1", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "TitleThatDoesNotHaveAnySpaceAsItIsOneVeryLongWordWithNarrowClassSet",
				showTitleSelector: true
			}).addStyleClass("sapUiContainer-Narrow")
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "oLongTitleOH2", {
			configurable: "false",
			writable: "true",

			value: new ObjectHeader({
				title : "TitleThatDoesNotHaveAnySpaceAsItIsOneVeryLongWordWithNarrowClassSet",
				showTitleSelector: true,
				titleActive: true
			}).addStyleClass("sapUiContainer-Narrow")
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "app", {
			configurable: "false",
			writable: "true",
			value: new SplitApp("myApp")
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "toDetailBtn", {
			configurable: "false",
			writable: "true",

			value: new Button({
				text: "Go to Detail page",
				press: function(oEv) {
					app.toDetail("detail");
				}
			})
		});

		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "page1", {
			configurable: "false",
			writable: "true",

			value: new Page("page1", {
				title:"ObjectHeader",
				content : [
					oLongTitleOH2,
					toDetailBtn
				]
			})
		});

		// put all the testing object header objects on the testing page
		/* TODO: Consider replacing this
			* with a local var (let x=...) or 
			* with an AMD export/import (export.x=..., ...=X.x) */
		Object.defineProperty(globalThis, "detail", {
			configurable: "false",
			writable: "true",

			value: new Page("detail", {
				showNavButton: Device.system.phone,
				navButtonPress: function() {
					app.backMaster();
				},
				enableScrolling : true
			})
		});

		app.addMasterPage(page1);
		app.addDetailPage(detail);
		detail.addContent(new HTML({
			content : "<div style='width:100%;height:2px;background-color:blue'/>"
		}));
		addToPage(oh1);
		addToPage(oh1Icon);
		addToPage(oh1IconNoNumber);
		addToPage(oh2);
		addToPage(oh3);
		addToPage(oh3_1);
		addToPage(oh3_2);
		addToPage(oh4WithResponsiveness);
		addToPage(oh5);
		addToPage(oh6);
		addToPage(oh7);
		addToPage(oh8);
		addToPage(oh9);
		addToPage(oh10);
		addToPage(oh11);
		addToPage(oh12);
		addToPage(oh13);
		addToPage(oh14);

		detail.addContent(oh15);

		detail.addContent(new CheckBox({
			text : "Show Markers",
			selected : oh15.getShowMarkers(),
			select : function() {

				oh15.setShowMarkers(this.getSelected());
			}
		}));

		detail.addContent(new Button({
			id : "flag-button",
			text : "Flag",
			press : function() {

				oh15.setMarkFlagged(!oh15.getMarkFlagged());
			}
		}));
		detail.addContent(new Button({
			id : "favorite-button",
			text : "Favorite",
			press : function() {

				oh15.setMarkFavorite(!oh15.getMarkFavorite());
			}
		}));
		detail.addContent(new HTML({
			content : "<div style='width:100%;height:2px;background-color:blue'/>"
		}));

		addToPage(oh16);
		addToPage(oh17);
		addToPage(oh18);
		addToPage(ohCondensed2);
		addToPage(ohCondensed1);
		addToPage(ohCondensed3);
		addToPage(objectHeaderLayout);
		addToPage(ohCondensed4);
		addToPage(ohCondensed5);
		addToPage(ohCondensed6);
		addToPage(ohCondensed7);
		addToPage(ohCondensed8);
		addToPage(ohAdditionalNumbers);
		addToPage(ohMarkers);
		addToPage(oLongTitleOH);
		addToPage(oLongTitleOH1);

		app.placeAt('body');
	});