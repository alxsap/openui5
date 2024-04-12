function generatePickerListValues(from, to, step) {
	var aValues = [];

	for (var iIndex = from; iIndex <= to; iIndex += 1) {
		if (iIndex % step === 0) {
			aValues.push(new sap.ui.core.Item({
				key: iIndex.toString(),
				text: iIndex.toString()
			}));
		}
	}

	return aValues;
};

function generatePickerListValues2(from, to, step) {
	var aValues = [];

	for (var iIndex = from; iIndex <= to; iIndex += 1) {
		if (iIndex % step === 0) {
			aValues.push(new sap.ui.core.Item({
				key: "a" + iIndex.toString(),
				text: "b" + iIndex.toString()
			}));
		}
	}

	return aValues;
};

new sap.m.WheelSlider("slider1", {
	selectedKey: "65",
	items: generatePickerListValues(0, 150, 1),
	isCyclic: false,
	label: "Years"
}).placeAt("container1");

new sap.m.WheelSliderContainer("slidercontainer1", {
	sliders: [
		new sap.m.WheelSlider("slidercontainer1-listYears", {
			items: generatePickerListValues(0, 150, 1),
			label: "Periods",
			selectedKey: "65",
			isCyclic: false
		}),
		new sap.m.WheelSlider("slidercontainer1-listMins", {
			items: generatePickerListValues(0, 59, 5),
			label: "Minutes",
			isCyclic: true
		}),
		new sap.m.WheelSlider("slidercontainer1-listSecs", {
			items: generatePickerListValues(0, 59, 5),
			label: "Seconds",
			isCyclic: true
		}),
		new sap.m.WheelSlider("slidercontainer1-format", {
			items: [
				new sap.ui.core.Item({ key: "am", text: "AM" }),
				new sap.ui.core.Item({ key: "pm", text: "PM" })
			],
			label: "Format",
			isCyclic: false
		})
	]
}).placeAt("content");