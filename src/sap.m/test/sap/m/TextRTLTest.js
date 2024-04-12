var app = new sap.m.App("myApp");
app.placeAt("body");

var lorem = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.";

var form = new sap.ui.layout.form.SimpleForm({
	minWidth : 1024,
	maxContainerCols : 2,
	editable: false,
	content : [
		new sap.m.Label({
			text: 'default behaviour'
		}),
		new sap.m.Text({
			text: '(012) 345 678'
		}),
		new sap.m.Label({
			text: 'textDirection -> ltr'
		}),
		new sap.m.Text({
			textDirection: 'LTR',
			text: '(012) 345 678'
		}),
		new sap.m.Label({
			text: 'textDirection -> ltr, textAlign -> right',
		}),
		new sap.m.Text({
			textDirection: 'LTR',
			textAlign: 'Right',
			text: '(012) 345 678'
		})
	]
});

var page = new sap.m.Page("page", {
	title:"Phone numbers with spaces in RTL page",
	content: [
		new sap.m.VBox({
			width : "100%",
			items : [
				form
			]
		})
	]
});

app.addPage(page);