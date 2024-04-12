var app = new sap.m.App("myApp");
var UI5Date = sap.ui.require("sap/ui/core/date/UI5Date");

var page1 = new sap.m.Page("page1", {
	title:"DateTimePicker with Timezone",
	content : [
		new sap.m.VBox("VBOX1", {
			width: "40%",
			items: [
				new sap.m.DateTimePicker("DTP1", {
					displayFormat: "medium",
					width: "100%",
					dateValue: UI5Date.getInstance(Date.UTC(2000, 10, 20, 8, 10, 10)),
					showTimezone: true,
					timezone: "America/Argentina/Buenos_Aires"
				}),
				new sap.m.DateTimePicker("DTP2", {
					displayFormat: "medium",
					width: "100%",
					dateValue: UI5Date.getInstance(Date.UTC(2000, 10, 20, 8, 10, 10)),
					timezone: "America/Argentina/Buenos_Aires"
				}),
				new sap.m.DateTimePicker("DTP3", {
					displayFormat: "medium",
					width: "100%",
					dateValue: UI5Date.getInstance(Date.UTC(2021, 2, 24, 22, 30)),
					showTimezone: true
				})
			]
		}),
		new sap.m.Slider("SLD1", {
			value: 40,
			step: 1,
			min: 1,
			max: 100,
			change: function(oEvent) {
				sap.ui.getCore().byId("VBOX1")/*Not inside AMD call*/.setWidth(this.getValue() + "%");
			}
		}),
		new sap.m.Button("BTN20", {
			text: "20%",
			press: function() {
				sap.ui.getCore().byId("SLD1")/*Not inside AMD call*/.setValue(20);
				sap.ui.getCore().byId("VBOX1")/*Not inside AMD call*/.setWidth("20%");
			}
		}),
		new sap.m.Button("BTN40", {
			text: "40%",
			press: function() {
				sap.ui.getCore().byId("SLD1")/*Not inside AMD call*/.setValue(40);
				sap.ui.getCore().byId("VBOX1")/*Not inside AMD call*/.setWidth("40%");
			}
		}),
		new sap.m.Button("BTNBA", {
			text: "America/Argentina/Buenos_Aires",
			press: function() {
				sap.ui.getCore().byId("DTP1")/*Not inside AMD call*/.setTimezone(this.getText());
				sap.ui.getCore().byId("DTP2")/*Not inside AMD call*/.setTimezone(this.getText());
			}
		}),
		new sap.m.Button("BTNNY", {
			text: "America/New_York",
			press: function() {
				sap.ui.getCore().byId("DTP1")/*Not inside AMD call*/.setTimezone(this.getText());
				sap.ui.getCore().byId("DTP2")/*Not inside AMD call*/.setTimezone(this.getText());
			}
		}),
		new sap.m.Button("BTNS", {
			text: "Europe/Sofia",
			press: function() {
				sap.ui.getCore().byId("DTP1")/*Not inside AMD call*/.setTimezone(this.getText());
				sap.ui.getCore().byId("DTP2")/*Not inside AMD call*/.setTimezone(this.getText());
			}
		}),
		new sap.m.Button("BTNLASTTIME", {
			text: "Etc/GMT+12",
			press: function() {
				sap.ui.getCore().byId("DTP1")/*Not inside AMD call*/.setTimezone(this.getText());
				sap.ui.getCore().byId("DTP2")/*Not inside AMD call*/.setTimezone(this.getText());
			}
		}),
		new sap.m.Button("BTNCHANGEAPPTIMEZONE", {
			text: "change app timezone",
			press: function() {
				var sTZ1 = "Europe/Sofia",
					sTZ2 = "Europe/Berlin",
					sCurrentTimezone = null.getTimezone()/*Not inside AMD call*/;

				sap.ui.getCore();

				null.setTimezone(sCurrentTimezone === sTZ1 ? sTZ2 : sTZ1)/*Not inside AMD call*/;
			}
		})
	],
});

app.addPage(page1);
app.placeAt("body");