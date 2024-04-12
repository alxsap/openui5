		var mobileCards = [],
			timeout = 100;

		function fnCardAction(event) {
			var parameters = event.getParameter('parameters');

			event.getParameter('actionSource');
			event.getParameter('type');

			console.error("Card Action ", parameters);
		}

		var oHost = new sap.ui.integration.Host({
			actions: [
				{
					type: 'Navigation',
					url: "http://www.sap.com",
					target: "_blank",
					text: 'AutoOpen - SAP website',
					visible: function (card) {
						return card.getId() !== 'card4';
					}
				},
				{
					type: 'Navigation',
					parameters: {
						url: "http://www.sap.com",
						target: "_blank"
					},
					text: 'Navigation - SAP website',
					visible: function (card) {
						return card.getId() !== 'card4';
					}
				},
				{
					type: 'Custom',
					icon: 'sap-icon://add',
					text: 'Add to mobile',
					tooltip: 'Add',
					buttonType: 'Accept',
//					visible: function (card) {
//						return card.getId() !== 'card3';
//					},
					visible: function (card) {
						return new Promise(function (resolve) {
							setTimeout(function () {
								resolve(mobileCards.indexOf(card) === -1);

							}, timeout);
						})
					},
					action: function (card, button) {

						setTimeout(function () {
							if (mobileCards.indexOf(card) === -1) {
								mobileCards.push(card);
							}
						}, timeout);

						// alert('Card id = ' + card.getId() + ' Button = ' + button.getText());
					}
				},
				{
					type: 'Custom',
					icon: 'sap-icon://delete',
					text: 'Remove from mobile',
					tooltip: 'Delete',
//					visible: function (card, button) {
//						return card.getId() !== 'card2' && card.getId() !== 'card3';
//					},
					visible: function (card) {
						return new Promise(function (resolve) {
							setTimeout(function () {
								resolve(mobileCards.indexOf(card) > -1);

							}, timeout);
						})
					},
					action: function (card, button) {
						setTimeout(function () {
							var index = mobileCards.indexOf(card);
							if (index > -1) {
								mobileCards.splice(index, 1);
							}
						}, timeout);
					}
				}
			],
			action: function (oEvent) {
				var parameters = oEvent.getParameter('parameters');

				console.error("Host Action ", parameters);
			},
			resolveDestination: function(sDestinationName) {
				if (sDestinationName == "Northwind") {
					return "https://services.odata.org/V3/Northwind/Northwind.svc";

					// or with promise
					//return Promise.resolve("https://services.odata.org/V3/Northwind/Northwind.svc");
				}
			}
		});

		var card1 = new sap.ui.integration.widgets.Card({
			id: 'card1',
			manifest: "./widgets/cardmanifests/table.manifest.json",
			host: oHost,
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			}),
			action: fnCardAction
		});

		var card11 = new sap.ui.integration.widgets.Card({
			manifest: "./widgets/cardmanifests/table.manifest.json",
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			}),
			action: fnCardAction
		});

		var card2 = new sap.ui.integration.widgets.Card({
			id: 'card2',
			manifest: "./widgets/cardmanifests/list.actions.manifest.json",
			host: oHost,
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			}),
			action: fnCardAction
		});

		var card21 = new sap.ui.integration.widgets.Card({
			manifest: "./widgets/cardmanifests/list.actions.manifest.json",
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			}),
			action: fnCardAction
		});

		var card3 = new sap.ui.integration.widgets.Card({
			id: 'card3',
			manifest: "./widgets/cardmanifests/list.actions.manifest.json",
			host: oHost,
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			}),
			action: fnCardAction
		});

		var card4 = new sap.ui.integration.widgets.Card({
			id: 'card4',
			manifest: "./widgets/cardmanifests/numeric.good.manifest.json",
			host: oHost,
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			}),
			action: fnCardAction
		});

		var card5 = new sap.ui.integration.widgets.Card({
			id: 'card5',
			manifest: "./widgets/cardmanifests/numeric.good.action.manifest.json",
			host: oHost,
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			}),
			action: fnCardAction
		});

		var card6 = new sap.ui.integration.widgets.Card({
			id: 'card6',
			manifest: "./widgets/cardmanifests/destinations.json",
			host: oHost,
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			})
		});

		var card7 = new sap.ui.integration.widgets.Card({
			id: 'card7',
			manifest: "./widgets/cardmanifests/destinations2.json",
			host: oHost,
			layoutData: new sap.f.GridContainerItemLayoutData({
				columns: 4
			})
		});

		var cardContainer = new sap.f.GridContainer({
			items: [
				card4,
				card1,
				card21,
				card3,
				card5,
				card6,
				card7
			]
		});

		cardContainer.placeAt("preview");