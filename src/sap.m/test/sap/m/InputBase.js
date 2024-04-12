var oApp = new sap.m.App;

var aTextAligns = Object.keys(sap.ui.core.TextAlign).map(function(sTextAlign) {
	return new sap.ui.core.Item({
		key: sTextAlign,
		text: sTextAlign
	});
});

var aTextDirections = Object.keys(sap.ui.core.TextDirection).map(function(sTextDirection) {
	return new sap.ui.core.Item({
		key: sTextDirection,
		text: sTextDirection
	});
});

var aValueStates = Object.keys(sap.ui.core.ValueState).map(function(sValueState) {
	return new sap.ui.core.Item({
		key: sValueState,
		text: sValueState
	});
});

var oProperties = {
	value: "Value",
	name: "Name",
	placeholder: "Placeholder",
	width: "100%",
	enabled: true,
	editable: true,
	valueState: sap.ui.core.ValueState.None,
	valueStateText: "",
	showValueStateMessage: true,
	textAlign: sap.ui.core.TextAlign.Initial,
	textDirection: sap.ui.core.TextDirection.Inherit,
	tooltip: "Tooltip",
	visible: true,
	required: true,
	busy: false,
	formattedText: ""
};

var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(oProperties);

var oInput = new sap.m.InputBase("input-base1", {
	value: "{/value}",
	name: "{/name}",
	placeholder: "{/placeholder}",
	width: "{/width}",
	enabled: "{/enabled}",
	editable: "{/editable}",
	valueState: "{/valueState}",
	valueStateText: "{/valueStateText}",
	showValueStateMessage: "{/showValueStateMessage}",
	textAlign: "{/textAlign}",
	textDirection: "{/textDirection}",
	tooltip: "{/tooltip}",
	visible: "{/visible}",
	busy: "{/busy}",
});

var oToolbar = new sap.m.Toolbar({
	content: [
		oInput
	]
});

var oReferenceForm = new sap.ui.layout.form.SimpleForm({
	editable: true,
	content: [
		new sap.ui.core.Title({
			text: "InputBase in Form"
		}),
		new sap.m.Label({
			text: "Reference field",
			required: "{/required}"
		}),
		oInput.clone()
	]
});

var oConfigForm = new sap.ui.layout.form.SimpleForm({
	editable: true,
	content: [
		new sap.ui.core.Title({
			text:"Own Properties"
		}),
		new sap.m.Label({
			text: "Value"
		}),
		new sap.m.Input({
			value: "{/value}",
			valueLiveUpdate: true
		}),
		new sap.m.Label({
			text: "Name"
		}),
		new sap.m.Input({
			value: "{/name}",
			valueLiveUpdate: true
		}),
		new sap.m.Label({
			text: "Placeholder"
		}),
		new sap.m.Input({
			value: "{/placeholder}",
			valueLiveUpdate: true
		}),
		new sap.m.Label({
			text: "Width"
		}),
		new sap.m.Input({
			value: "{/width}",
			valueLiveUpdate: true
		}),
		new sap.m.Label({
			text: "Enabled"
		}),
		new sap.m.Switch({
			state: "{/enabled}"
		}),
		new sap.m.Label({
			text: "Editable"
		}),
		new sap.m.Switch({
			state: "{/editable}"
		}),
		new sap.m.Label({
			text: "ValueState"
		}),
		new sap.m.Select({
			items: aValueStates,
			selectedKey: "{/valueState}"
		}),
		new sap.m.Label({
			text: "ValueState Text"
		}),
		new sap.m.Input({
			value: "{/valueStateText}",
			valueLiveUpdate: true
		}),
		new sap.m.Label({
			text: "Formatted ValueState Text"
		}),
		new sap.m.Input({
			value: "{/formattedText}",
			valueLiveUpdate: false,
			change: function() {
				var oInput = sap.ui.core.Element.getElementById("input-base1");

				if (this.getValue()) {
					var oFormattedText = new sap.m.FormattedText({htmlText: this.getValue() });
					oInput.setFormattedValueStateText(oFormattedText);
				} else {
					oInput.removeAllAggregation("formattedValueStateText");
				}
			}
		}),
		new sap.m.Label({
			text: "Add a link in Formatted ValueState Text"
		}),
		new sap.m.Input({
			value: "{/formattedValueStateTextLink}",
			valueLiveUpdate: false,
			change: function() {
				var oInput = sap.ui.core.Element.getElementById("input-base1");

				if (oInput.getFormattedValueStateText()) {
					if (this.getValue()) {
						oInput.getFormattedValueStateText().addAggregation("controls",new sap.m.Link({
						text: "{/formattedValueStateTextLink}", href:"#", target: "_blank"
						}));
						oInput.getFormattedValueStateText().setHtmlText(oInput.getFormattedValueStateText().getHtmlText() + " %%0");
					} else {
						oInput.getFormattedValueStateText().removeAllAggregation("controls");
						oInput.getFormattedValueStateText().setHtmlText(oInput.getFormattedValueStateText().getHtmlText().replace("%%0", ""));
					}
				}
			}
		}),
		new sap.m.Label({
			text: "Text Align"
		}),
		new sap.m.Select({
			items: aTextAligns,
			selectedKey: "{/textAlign}"
		}),
		new sap.m.Label({
			text: "Text Direction"
		}),
		new sap.m.Select({
			items: aTextDirections,
			selectedKey: "{/textDirection}"
		}),
		new sap.ui.core.Title({
			text:"Inherited Properties"
		}),
		new sap.m.Label({
			text: "Tooltip"
		}),
		new sap.m.Input({
			value: "{/tooltip}",
			valueLiveUpdate: true
		}),
		new sap.m.Label({
			text: "Visible"
		}),
		new sap.m.Switch({
			state: "{/visible}"
		}),
		new sap.m.Label({
			text: "Required"
		}),
		new sap.m.Switch({
			state: "{/required}"
		}),
		new sap.m.Label({
			text: "Busy"
		}),
		new sap.m.Switch({
			state: "{/busy}"
		})
	]
});

var oPage = new sap.m.Page({
	title: "InputBase Test Page",
	enableScrolling: true,
	subHeader: [oToolbar],
	footer: [oToolbar.clone()],
	content: [oReferenceForm, oConfigForm]
});

oApp.setModel(oModel);
oApp.addPage(oPage).placeAt("body");