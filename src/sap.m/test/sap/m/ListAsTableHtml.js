var data = {
	navigation : [{
		name : "Headphone",
		qty : "10 EA",
		limit : "15.00",
		title : "Digital Services Unit",
		text : "2863548291",
		vendor : "Sunshine Inc.",
		price : "12.00",
		status : "Sold out",
		statusState: "Error"
	}, {
		name : "Mouse Pad",
		qty : "1 EA",
		limit : "5.00",
		title : "SAP News",
		text : "The Employee Channel",
		vendor : "Monster GmbH",
		price : "3.00",
		status : "In Stock",
		statusState: "None",
		info: "10.10.2013",
		infoState: "Success"
	}, {
		name : "Monitor",
		qty : "8 EA",
		limit : "60.00",
		title : "Sunshine Cleaning Products",
		vendor : "Sunshine Inc.",
		price : "45.00",
		status : "In Stock",
		statusState: "Success",
		info: "2 items left",
		infoState: "Warning"
	}, {
		name : "Optic Mouse",
		qty : "2 EA",
		limit : "40.00",
		title : "A Long Title That Spans Multiple Lines And Actually Goes Across More Than Two Lines And Into Four",
		text : "A set of information text that is very long and does not fit into a single line, so it will just have to span multiple lines.",
		vendor : "A company with a terribly long name that does not fit into a single line.",
		price : "15.00",
		info: "2 items left",
	}, {
		name : "Dock Station",
		qty : "1 EA",
		limit : "90.00",
		title : "Ñagçyfox Unit",
		text : " #D1234567890: Since April 11, 2013",
		vendor : "Northern United",
		price : "55.00"
	}]
};
var model = new sap.ui.model.json.JSONModel(data);
sap.ui.getCore();