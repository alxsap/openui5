var app = new sap.m.App("myApp");
app.placeAt("body");

var page = new sap.m.Page("page", {
	title:"Phone numbers with spaces in RTL page",
	content: [
		new sap.m.Label({
			text: 'Default behaviour',
			width: '100%'
		}),
		new sap.m.Label({
			text: '(012) 345 678',
			width: '100%'
		}),
		new sap.m.Label({
			text: 'LTR content direction, wrong default alignment',
			width: '100%'
		}),
		new sap.m.Label({
			text: '(012) 345 678',
			textDirection: 'LTR',
			width: '100%'
		}),
		new sap.m.Label({
			text: 'LTR content direction, right alignment',
			width: '100%'
		}),
		new sap.m.Label({
			text: '(012) 345 678',
			textDirection: 'LTR',
			textAlign: 'Right',
			width: '100%'
		})
	]
});

app.addPage(page);