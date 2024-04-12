var oLCI1 = new sap.ui.integration.controls.ListContentItem({
	title: "BulletMicroChart",
	description: "Description",
	chartDisplayValue: "This is the value of the chart",
	chart: new sap.suite.ui.microchart.BulletMicroChart({
		size: "Responsive",
		targetValue: 90,
		minValue: 0,
		maxValue: 100,
		scaleColor: "Light",
		actual: new sap.suite.ui.microchart.BulletMicroChartData({
			value: 55,
			color: "Good"
		})
	})
});

var oLCI2 = new sap.ui.integration.controls.ListContentItem({
	title: "StackedBarMicroChart",
	description: "Description",
	chartDisplayValue: "This is the value of the chart",
	chart: new sap.suite.ui.microchart.StackedBarMicroChart({
		size: "Responsive",
		maxValue: 100,
		bars: [
			new sap.suite.ui.microchart.StackedBarMicroChartBar({
				value: 55,
				color: "Good",
				label: "First bar label, custom"
			}),
			new sap.suite.ui.microchart.StackedBarMicroChartBar({
				value: 300,
				color: "Good",
				label: "Second bar label, custom"
			})
		]
	})
});

oLCI1.placeAt("preview");
oLCI2.placeAt("preview");