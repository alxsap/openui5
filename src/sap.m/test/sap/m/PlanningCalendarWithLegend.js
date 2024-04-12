	var StandardCalendarLegendItem = sap.ui.unified.StandardCalendarLegendItem,
			UI5Date = sap.ui.require("sap/ui/core/date/UI5Date"),
			oLegend = new sap.m.PlanningCalendarLegend("Legend1", {
				standardItems: [StandardCalendarLegendItem.WorkingDay, StandardCalendarLegendItem.NonWorkingDay, StandardCalendarLegendItem.Today],
				items: [
					new sap.ui.unified.CalendarLegendItem("T1", {
						type: sap.ui.unified.CalendarDayType.Type01,
						text: "Type 1 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T2", {
						type: sap.ui.unified.CalendarDayType.Type02,
						text: "Type 2 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T3", {
						type: sap.ui.unified.CalendarDayType.Type03,
						text: "Type 3 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T4", {
						type: sap.ui.unified.CalendarDayType.Type04,
						text: "Type 4 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T5", {
						type: sap.ui.unified.CalendarDayType.Type05,
						text: "Type 5 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T6", {
						type: sap.ui.unified.CalendarDayType.Type06,
						text: "Type 6 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T7", {
						type: sap.ui.unified.CalendarDayType.Type07,
						text: "Type 7 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T8", {
						type: sap.ui.unified.CalendarDayType.Type08,
						text: "Type 8 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T9", {
						type: sap.ui.unified.CalendarDayType.Type09,
						text: "Type 9 in Legend Calendar area"
					}),
					new sap.ui.unified.CalendarLegendItem("T10", {
						type: sap.ui.unified.CalendarDayType.Type10,
						text: "Type 10 in Legend Calendar area"
					}),
				],
				appointmentItems: [
					new sap.ui.unified.CalendarLegendItem("T31", {
						type: sap.ui.unified.CalendarDayType.Type01,
						text: "Type Private Appointment"
					}),
					new sap.ui.unified.CalendarLegendItem("T32", {
						type: sap.ui.unified.CalendarDayType.Type02,
						text: "Type Face2Face Appointment"
					}),
					new sap.ui.unified.CalendarLegendItem("T33", {
						type: sap.ui.unified.CalendarDayType.Type12,
						text: "Type Public Appointment"
					})
				]
			});

var app = new sap.m.App("myApp");

var oPC1 = sap.m.PlanningCalendar("PC1", {
	startDate: UI5Date.getInstance("2015", "0", "1", "08", "00"),
	rows: [ new sap.m.PlanningCalendarRow("Row1", {
				icon: "sap-icon://employee",
				title: "Max Mustermann",
				text: "Musterteam",
				tooltip: "Header tooltip",
				intervalHeaders: [ new sap.ui.unified.CalendarAppointment("R1H1",{
									startDate: UI5Date.getInstance("2015", "0", "1", "09", "00"),
									endDate: UI5Date.getInstance("2015", "0", "1", "11", "00"),
									type: sap.ui.unified.CalendarDayType.Type02,
									title: "SAPUI5",
									tooltip: "Test",
									icon: "sap-icon://sap-ui5"
								   })
								 ],
				appointments: [ new sap.ui.unified.CalendarAppointment("R1A1", {
									startDate: UI5Date.getInstance("2015", "0", "1", "08", "00"),
									endDate: UI5Date.getInstance("2015", "0", "2", "09", "00"),
									type: sap.ui.unified.CalendarDayType.Type03,
									title: "2 days meeting",
									icon: "../ui/unified/images/m_01.png",
									tooltip: "2 days meeting",
									text: "Room 1"
								}),
								new sap.ui.unified.CalendarAppointment("R1A2", {
									startDate: UI5Date.getInstance("2014", "11", "31", "10", "45"),
									endDate: UI5Date.getInstance("2015", "0", "3", "09", "00"),
									type: sap.ui.unified.CalendarDayType.Type06,
									title: "Appointment 2",
									icon: "sap-icon://home",
									tooltip: "Tooltip 2",
									text: "Home",
									tentative: true
								}),
								new sap.ui.unified.CalendarAppointment("R1A3", {
									startDate: UI5Date.getInstance("2014", "11", "31", "08", "30"),
									endDate: UI5Date.getInstance("2015", "0", "1", "09", "30"),
									type: sap.ui.unified.CalendarDayType.Type02,
									title: "Blocker 3",
									icon: "sap-icon://home",
									tooltip: "Tooltip 3"
								}),
								new sap.ui.unified.CalendarAppointment("R1A4", {
									startDate: UI5Date.getInstance("2015", "0", "1", "09", "45"),
									endDate: UI5Date.getInstance("2015", "0", "1", "10", "45"),
									type: sap.ui.unified.CalendarDayType.Type09,
									title: "Meeting 4",
									tooltip: "Tooltip 4",
									selected: true
								})
							  ]
				}),
			new sap.m.PlanningCalendarRow("Row2", {
				icon: "../ui/unified/images/m_01.png",
				title: "Edward",
				text: "the great",
				tooltip: "Header tooltip",
				intervalHeaders: [ new sap.ui.unified.CalendarAppointment("R2H1",{
									startDate: UI5Date.getInstance("2015", "0", "2", "00", "00"),
									endDate: UI5Date.getInstance("2015", "0", "2", "23", "59"),
									type: sap.ui.unified.CalendarDayType.Type01,
									title: "SAPUI5",
									tooltip: "Test",
									icon: "sap-icon://sap-ui5"
								   })
								 ],
				appointments: [ new sap.ui.unified.CalendarAppointment("R2A1", {
									startDate: UI5Date.getInstance("2015", "0", "1", "00", "00"),
									endDate: UI5Date.getInstance("2015", "0", "2", "23", "59"),
									type: sap.ui.unified.CalendarDayType.Type01,
									title: "Event 1",
									icon: "../ui/unified/images/m_01.png",
									tooltip: "Tooltip 1",
									text: "Room 1"
								}),
								new sap.ui.unified.CalendarAppointment("R2A2", {
									startDate: UI5Date.getInstance("2015", "0", "2", "00", "00"),
									endDate: UI5Date.getInstance("2015", "0", "2", "23", "59"),
									type: sap.ui.unified.CalendarDayType.Type02,
									title: "Event 2",
									icon: "sap-icon://home",
									tooltip: "Tooltip 2",
									text: "Home"
								}),
								new sap.ui.unified.CalendarAppointment("R2A3", {
									startDate: UI5Date.getInstance("2015", "0", "3", "00", "00"),
									endDate: UI5Date.getInstance("2015", "0", "4", "23", "59"),
									type: sap.ui.unified.CalendarDayType.Type03,
									title: "Event 3",
									icon: "sap-icon://home",
									tooltip: "Tooltip 3"
								}),
								new sap.ui.unified.CalendarAppointment("R2A4", {
									startDate: UI5Date.getInstance("2015", "1", "1", "00", "00"),
									endDate: UI5Date.getInstance("2015", "1", "28", "23", "59"),
									type: sap.ui.unified.CalendarDayType.Type04,
									title: "Event 4",
									icon: "sap-icon://home",
									tooltip: "Tooltip 4"
								})
				]
				}),
				new sap.m.PlanningCalendarRow("Row3", {
					icon: "sap-icon://palette",
					title: "Color Mixer",
					tooltip: "Colors",
					intervalHeaders: [ new sap.ui.unified.CalendarAppointment("R3H1",{
										startDate: UI5Date.getInstance("2015", "0", "1", "08", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "08", "59"),
										type: sap.ui.unified.CalendarDayType.Type01,
										title: "Type01",
										tooltip: "Type01",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H2",{
										startDate: UI5Date.getInstance("2015", "0", "1", "09", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "09", "59"),
										type: sap.ui.unified.CalendarDayType.Type02,
										title: "Type02",
										tooltip: "Type02",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H3",{
										startDate: UI5Date.getInstance("2015", "0", "1", "10", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "10", "59"),
										type: sap.ui.unified.CalendarDayType.Type03,
										title: "Type03",
										tooltip: "Type03",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H4",{
										startDate: UI5Date.getInstance("2015", "0", "1", "11", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "11", "59"),
										type: sap.ui.unified.CalendarDayType.Type04,
										title: "Type04",
										tooltip: "Type04",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H5",{
										startDate: UI5Date.getInstance("2015", "0", "1", "12", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "12", "59"),
										type: sap.ui.unified.CalendarDayType.Type05,
										title: "Type05",
										tooltip: "Type05",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H6",{
										startDate: UI5Date.getInstance("2015", "0", "1", "13", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "13", "59"),
										type: sap.ui.unified.CalendarDayType.Type06,
										title: "Type06",
										tooltip: "Type06",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H7",{
										startDate: UI5Date.getInstance("2015", "0", "1", "14", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "14", "59"),
										type: sap.ui.unified.CalendarDayType.Type07,
										title: "Type07",
										tooltip: "Type07",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H8",{
										startDate: UI5Date.getInstance("2015", "0", "1", "15", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "15", "59"),
										type: sap.ui.unified.CalendarDayType.Type08,
										title: "Type08",
										tooltip: "Type08",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H9",{
										startDate: UI5Date.getInstance("2015", "0", "1", "16", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "16", "59"),
										type: sap.ui.unified.CalendarDayType.Type09,
										title: "Type09",
										tooltip: "Type09",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H10",{
										startDate: UI5Date.getInstance("2015", "0", "1", "17", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "17", "59"),
										type: sap.ui.unified.CalendarDayType.Type10,
										title: "Type10",
										tooltip: "Type10",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R3H11",{
										startDate: UI5Date.getInstance("2015", "0", "1", "18", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "18", "59"),
										type: sap.ui.unified.CalendarDayType.None,
										title: "None",
										tooltip: "None",
										icon: "sap-icon://palette"
									   })
									 ],
					appointments: [ new sap.ui.unified.CalendarAppointment("R3A1", {
										startDate: UI5Date.getInstance("2015", "0", "1", "08", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "08", "59"),
										type: sap.ui.unified.CalendarDayType.Type01,
										title: "Type01",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 1"
									}),
									new sap.ui.unified.CalendarAppointment("R3A2", {
										startDate: UI5Date.getInstance("2015", "0", "1", "09", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "09", "59"),
										type: sap.ui.unified.CalendarDayType.Type02,
										title: "Type02",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 2"
									}),
									new sap.ui.unified.CalendarAppointment("R3A3", {
										startDate: UI5Date.getInstance("2015", "0", "1", "10", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "10", "59"),
										type: sap.ui.unified.CalendarDayType.Type03,
										title: "Type03",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 3"
									}),
									new sap.ui.unified.CalendarAppointment("R3A4", {
										startDate: UI5Date.getInstance("2015", "0", "1", "11", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "11", "59"),
										type: sap.ui.unified.CalendarDayType.Type04,
										title: "Type04",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 4"
									}),
									new sap.ui.unified.CalendarAppointment("R3A5", {
										startDate: UI5Date.getInstance("2015", "0", "1", "12", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "12", "59"),
										type: sap.ui.unified.CalendarDayType.Type05,
										title: "Type05",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 5"
									}),
									new sap.ui.unified.CalendarAppointment("R3A6", {
										startDate: UI5Date.getInstance("2015", "0", "1", "13", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "13", "59"),
										type: sap.ui.unified.CalendarDayType.Type06,
										title: "Type06",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 6"
									}),
									new sap.ui.unified.CalendarAppointment("R3A7", {
										startDate: UI5Date.getInstance("2015", "0", "1", "14", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "14", "59"),
										type: sap.ui.unified.CalendarDayType.Type07,
										title: "Type07",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 7"
									}),
									new sap.ui.unified.CalendarAppointment("R3A8", {
										startDate: UI5Date.getInstance("2015", "0", "1", "15", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "15", "59"),
										type: sap.ui.unified.CalendarDayType.Type08,
										title: "Type08",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 8"
									}),
									new sap.ui.unified.CalendarAppointment("R3A9", {
										startDate: UI5Date.getInstance("2015", "0", "1", "16", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "16", "59"),
										type: sap.ui.unified.CalendarDayType.Type09,
										title: "Type09",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 9"
									}),
									new sap.ui.unified.CalendarAppointment("R3A10", {
										startDate: UI5Date.getInstance("2015", "0", "1", "17", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "17", "59"),
										type: sap.ui.unified.CalendarDayType.Type10,
										title: "Type10",
										icon: "sap-icon://palette",
										tooltip: "Tooltip 10"
									}),
									new sap.ui.unified.CalendarAppointment("R3A11", {
										startDate: UI5Date.getInstance("2015", "0", "1", "18", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "18", "59"),
									type: sap.ui.unified.CalendarDayType.None,
										title: "None",
										icon: "sap-icon://palette",
										tooltip: "None"
									})
					]
					}),
				new sap.m.PlanningCalendarRow("Row4", {
					icon: "sap-icon://palette",
					title: "Custom Color",
					tooltip: "Custom Colors",
					intervalHeaders: [ new sap.ui.unified.CalendarAppointment("R4H1",{
										startDate: UI5Date.getInstance("2015", "0", "1", "08", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "10", "59"),
										color: "#c14646",
										title: "Red",
										tooltip: "Red",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R4H2",{
										startDate: UI5Date.getInstance("2015", "0", "1", "11", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "13", "59"),
										color: "#759421",
										title: "Green",
										tooltip: "Green",
										icon: "sap-icon://palette"
									   }),
									   new sap.ui.unified.CalendarAppointment("R4H3",{
										startDate: UI5Date.getInstance("2015", "0", "1", "14", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "16", "59"),
										color: "#0092d1",
										title: "Blue",
										tooltip: "Blue",
										icon: "sap-icon://palette"
									   })
									 ],
					appointments: [ new sap.ui.unified.CalendarAppointment("R4A1", {
										startDate: UI5Date.getInstance("2015", "0", "1", "08", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "08", "59"),
										color: "#e09d00",
										title: "#e09d00",
										tooltip: "#e09d00",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A2", {
										startDate: UI5Date.getInstance("2015", "0", "1", "09", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "09", "59"),
										color: "#e6600d",
										title: "#e6600d",
										tooltip: "#e6600d",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A3", {
										startDate: UI5Date.getInstance("2015", "0", "1", "10", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "10", "59"),
										color: "#c14646",
										title: "#c14646",
										tooltip: "#c14646",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A4", {
										startDate: UI5Date.getInstance("2015", "0", "1", "11", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "11", "59"),
										color: "#853808",
										title: "#853808",
										tooltip: "#853808",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A5", {
										startDate: UI5Date.getInstance("2015", "0", "1", "12", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "12", "59"),
										color: "#de54c1",
										title: "#de54c1",
										tooltip: "#de54c1",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A6", {
										startDate: UI5Date.getInstance("2015", "0", "1", "13", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "13", "59"),
										color: "#0092d1",
										title: "#0092d1",
										tooltip: "#0092d1",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A7", {
										startDate: UI5Date.getInstance("2015", "0", "1", "14", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "14", "59"),
										color: "#1a9898",
										title: "#1a9898",
										tooltip: "#1a9898",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A8", {
										startDate: UI5Date.getInstance("2015", "0", "1", "15", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "15", "59"),
										color: "#759421",
										title: "#759421",
										tooltip: "#759421",
										icon: "sap-icon://palette"
									}),
									   new sap.ui.unified.CalendarAppointment("R4A9", {
										startDate: UI5Date.getInstance("2015", "0", "1", "16", "00"),
										endDate: UI5Date.getInstance("2015", "0", "1", "16", "59"),
										color: "#1fbbff",
										title: "#1fbbff",
										tooltip: "#1fbbff",
										icon: "sap-icon://palette"
									})
					]
					}),
					new sap.m.PlanningCalendarRow("Row5", {
						icon: "sap-icon://employee",
						title: "Appointments of the same type",
						tooltip: "Header tooltip",
						intervalHeaders: [ new sap.ui.unified.CalendarAppointment("R5H1",{
							startDate: UI5Date.getInstance("2015", "0", "1", "09", "00"),
							endDate: UI5Date.getInstance("2015", "0", "1", "11", "00"),
							type: sap.ui.unified.CalendarDayType.Type02,
							title: "SAPUI5",
							tooltip: "Test",
							icon: "sap-icon://sap-ui5"
						})
						],
						appointments: [ new sap.ui.unified.CalendarAppointment("R5A1", {
							startDate: UI5Date.getInstance("2015", "0", "1", "08", "00"),
							endDate: UI5Date.getInstance("2015", "0", "2", "09", "00"),
							type: sap.ui.unified.CalendarDayType.Type02,
							title: "2 days meeting",
							icon: "../ui/unified/images/m_01.png",
							tooltip: "2 days meeting",
							text: "Room 1"
						}),
							new sap.ui.unified.CalendarAppointment("R5A2", {
								startDate: UI5Date.getInstance("2014", "11", "31", "10", "45"),
								endDate: UI5Date.getInstance("2015", "0", "3", "09", "00"),
								type: sap.ui.unified.CalendarDayType.Type02,
								title: "Appointment 2",
								icon: "sap-icon://home",
								tooltip: "Tooltip 2",
								text: "Home",
								tentative: true
							}),
							new sap.ui.unified.CalendarAppointment("R5A3", {
								startDate: UI5Date.getInstance("2014", "11", "31", "08", "30"),
								endDate: UI5Date.getInstance("2015", "0", "1", "09", "30"),
								type: sap.ui.unified.CalendarDayType.Type02,
								title: "Blocker 3",
								icon: "sap-icon://home",
								tooltip: "Tooltip 3"
							}),
							new sap.ui.unified.CalendarAppointment("R5A4", {
								startDate: UI5Date.getInstance("2015", "0", "1", "09", "45"),
								endDate: UI5Date.getInstance("2015", "0", "1", "10", "45"),
								type: sap.ui.unified.CalendarDayType.Type02,
								title: "Meeting 4",
								tooltip: "Tooltip 4",
								selected: true
							})
						]
					})
		],
	specialDates: [ new sap.ui.unified.DateTypeRange({
						startDate: UI5Date.getInstance(2015, 0, 1, 12, 00),
						endDate: UI5Date.getInstance(2015, 0, 1, 14, 00),
						type: sap.ui.unified.CalendarDayType.Type01,
						tooltip: "Lunch"
					}),
					new sap.ui.unified.DateTypeRange({
						startDate: UI5Date.getInstance(2015, 0, 6),
						type: sap.ui.unified.CalendarDayType.Type02,
						tooltip: "Heilige 3 Könige"
					}),
					new sap.ui.unified.DateTypeRange({
						startDate: UI5Date.getInstance(2015, 1, 1),
						endDate: UI5Date.getInstance(2015, 1, 3),
						type: sap.ui.unified.CalendarDayType.Type03,
						tooltip: "Test"
					})
				  ],
	legend: oLegend
});

var page1 = new sap.m.Page("page1", {
	title:"Mobile PlanningCalendar",
	content : [
		oPC1
	]
});

var oDynamicSideContent = new sap.ui.layout.DynamicSideContent({
	containerQuery: true,
	mainContent: [page1],
	sideContent: [oLegend]
});

oDynamicSideContent.placeAt("body");