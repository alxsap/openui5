var model = new sap.ui.model.json.JSONModel();
var data = {
	navigation: [{
		title: 'Root Item',
		icon: 'sap-icon://employee',
		expanded: true
	}, {
		title: 'Root Item',
		icon: 'sap-icon://building',
		enabled: false
	}, {
		title: 'Root Item',
		icon: 'sap-icon://card',
		expanded: false,
		items: [{
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}, {
			title: 'Child Item'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://action',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3',
			enabled: false
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://action-settings',
		expanded: true,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://activate',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://activities',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://add',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://arobase',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://attachment',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://badge',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://basket',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://bed',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}, {
		title: 'Root Item',
		icon: 'sap-icon://bookmark',
		expanded: false,
		items: [{
			title: 'Child Item 1'
		}, {
			title: 'Child Item 2'
		}, {
			title: 'Child Item 3'
		}]
	}
	],
	fixedNavigation: [{
		title: 'Fixed Item 1',
		icon: 'sap-icon://employee'
	}, {
		title: 'Fixed Item 2',
		icon: 'sap-icon://building'
	}, {
		title: 'Fixed Item 3',
		icon: 'sap-icon://card'
	}]
};
model.setData(data);

const sideNavWithGroups = sap.tnt.SideNavigation("sideNavWithGroups", {
	item: new sap.tnt.NavigationList({
		items: [
			new sap.tnt.NavigationListItem({
				text: "Item 1",
				icon: "sap-icon://employee"
			}),
			new sap.tnt.NavigationListGroup({
				text: "Group 1 Group 1 Group 1 Group 1 Group 1",
				items: [
					new sap.tnt.NavigationListItem({
						text: "Child Item 1",
						icon: "sap-icon://card"
					}),
					new sap.tnt.NavigationListItem({
						text: "Child Item 2",
						icon: "sap-icon://building"
					})
				]
			}),
			new sap.tnt.NavigationListGroup({
				text: "Group 2 Group 2 Group 2 Group 2 Group 2",
				items: [
					new sap.tnt.NavigationListItem({
						text: "Child Item",
						icon: "sap-icon://card"
					}),
					new sap.tnt.NavigationListItem({
						text: "Child Item",
						icon: "sap-icon://building"
					})
				]
			})
		]
	})
}).placeAt("col-0-content");

var sideNavigationWithBinding = new sap.tnt.SideNavigation({
	item: new sap.tnt.NavigationList({
		items: [
			new sap.tnt.NavigationListItem({
				text: "Item 1",
				icon: "sap-icon://employee"
			}),
			new sap.tnt.NavigationListGroup({
				text: "Group 1 Group 1 Group 1 Group 1 Group 1",
				items: [
					new sap.tnt.NavigationListItem({
						text: "Child Item 1",
						icon: "sap-icon://card"
					}),
					new sap.tnt.NavigationListItem({
						text: "Child Item 2",
						icon: "sap-icon://building"
					})
				]
			})
		]
	})
}).placeAt("col-1-content");

var sideNavigationWithBinding = new sap.tnt.SideNavigation({
	item: new sap.tnt.NavigationList({
		items: {
			template: new sap.tnt.NavigationListItem({
				text: '{title}',
				icon: '{icon}',
				enabled: '{enabled}',
				expanded: '{expanded}',
				items: {
					template: new sap.tnt.NavigationListItem({
						text: '{title}',
						enabled: '{enabled}'
					}),
					path: 'items'
				}
			}),

			path: '/navigation'
		}
	}),
	fixedItem: new sap.tnt.NavigationList({
		items: {
			template: new sap.tnt.NavigationListItem({
				text: '{title}',
				icon: '{icon}'
			}),
			path: '/fixedNavigation'
		}
	})
}).setModel(model).placeAt('col-1-content');

var sideNavigation = new sap.tnt.SideNavigation({
	expanded: false,
	ariaLabel: "Side navigation menu with options",
	item: new sap.tnt.NavigationList({
		items: new sap.tnt.NavigationListItem({
			text: 'Root Item',
			icon: 'sap-icon://employee',
			items: [
				new sap.tnt.NavigationListItem({
					text: 'Child Item 1'
				}),
				new sap.tnt.NavigationListItem({
					text: 'Child Item 2'
				}),
				new sap.tnt.NavigationListItem({
					text: 'Child Item 3'
				})
			]
		})
	}),
	fixedItem: new sap.tnt.NavigationList({
		items: [
			new sap.tnt.NavigationListItem({
				text: 'Root Item',
				icon: 'sap-icon://employee'
			})
		]
	})
}).setModel(model).placeAt('col-2-content');

var sideNavigationNoIcons = new sap.tnt.SideNavigation({
	expanded: true,
	item: new sap.tnt.NavigationList({
		items: new sap.tnt.NavigationListItem({
			text: 'Root Item',
			items: [
				new sap.tnt.NavigationListItem({
					text: 'Child Item 1'
				}),
				new sap.tnt.NavigationListItem({
					text: 'Child Item 2'
				}),
				new sap.tnt.NavigationListItem({
					text: 'Child Item 3'
				})
			]
		})
	}),
	fixedItem: new sap.tnt.NavigationList({
		items: [
			new sap.tnt.NavigationListItem({
				text: 'Root Item'
			})
		]
	})
}).setModel(model).placeAt('col-3-content');

new sap.m.ToggleButton({
	text: "Compact Mode",
	pressed: !sap.ui.Device.system.phone && jQuery("html").hasClass("sapUiSizeCompact"),
	press: function () {
		jQuery("body").toggleClass("sapUiSizeCompact", this.getPressed());
		jQuery("body").toggleClass("sapUiSizeCozy", !this.getPressed());
	}
}).placeAt('col-0-header')

new sap.m.Button({
	text: 'toggle expanded property',
	press: function () {
		sideNavWithGroups.setExpanded(!sideNavWithGroups.getExpanded());
	}
}).placeAt('col-0-header');

new sap.m.Button({
	text: 'toggle expanded property',
	press: function () {
		sideNavigationWithBinding.setExpanded(!sideNavigationWithBinding.getExpanded());
	}
}).placeAt('col-1-header');

new sap.m.Button({
	text: 'toggle expanded property',
	press: function () {
		sideNavigation.setExpanded(!sideNavigation.getExpanded());
	}
}).placeAt('col-2-header');

new sap.m.Button({
	text: 'toggle expanded property',
	press: function () {
		sideNavigationNoIcons.setExpanded(!sideNavigationNoIcons.getExpanded());
	}
}).placeAt('col-3-header');