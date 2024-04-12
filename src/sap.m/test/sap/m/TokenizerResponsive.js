//*******************************
var oNotAdjustedTokenizer = new sap.m.Tokenizer("nonAdjustedTokenizer", {
	tokens: [
		new sap.m.Token({text: "Token 1", key: "0001"}),
		new sap.m.Token({text: "Token 2", key: "0002"}),
		new sap.m.Token({text: "Token 3", key: "0003"}),
		new sap.m.Token({text: "Token 4 - long text example", key: "0004"}),
		new sap.m.Token({text: "Token 5", key: "0005"}),
		new sap.m.Token({text: "Token 6", key: "0006"}),
		new sap.m.Token({text: "Token 7", key: "0007"}),
		new sap.m.Token({text: "Token 8", key: "0008"}),
		new sap.m.Token({text: "Token 9 - ABCDEF", key: "0009"})
	]
});

var oAdjustedTokenizer = new sap.m.Tokenizer("adjustedTokenizer", {
	tokens: [
		new sap.m.Token({text: "Token 1", key: "0001"}),
		new sap.m.Token({text: "Token 2", key: "0002"}),
		new sap.m.Token({text: "Token 3", key: "0003"}),
		new sap.m.Token({text: "Token 4 - long text example", key: "0004"}),
		new sap.m.Token({text: "Token 5", key: "0005"}),
		new sap.m.Token({text: "Token 6", key: "0006"}),
		new sap.m.Token({text: "Token 7", key: "0007"}),
		new sap.m.Token({text: "Token 8", key: "0008"}),
		new sap.m.Token({text: "Token 9 - ABCDEF", key: "0009"})
	]
});

var oMultiInput1 = new sap.m.MultiInput("multiInput", {
	tokens: [
		new sap.m.Token({text: "Token 1", key: "0001"}),
		new sap.m.Token({text: "Token 2", key: "0002"}),
		new sap.m.Token({text: "Token 3", key: "0003"}),
		new sap.m.Token({text: "Token 4 - long text example", key: "0004"}),
		new sap.m.Token({text: "Token 5", key: "0005"}),
		new sap.m.Token({text: "Token 6", key: "0006"}),
		new sap.m.Token({text: "Token 7", key: "0007"}),
		new sap.m.Token({text: "Token 8", key: "0008"}),
		new sap.m.Token({text: "Token 9 - ABCDEF", key: "0009"})
	],
	showSuggestion: true,
	suggestionItems: [
		new sap.ui.core.Item({text: "Token 1", key: "0001"}),
		new sap.ui.core.Item({text: "Token 2", key: "0002"}),
		new sap.ui.core.Item({text: "Token 3", key: "0003"}),
		new sap.ui.core.Item({text: "Token 4 - long text example", key: "0004"}),
		new sap.ui.core.Item({text: "Token 5", key: "0005"}),
		new sap.ui.core.Item({text: "Token 6", key: "0006"}),
		new sap.ui.core.Item({text: "Token 7", key: "0007"}),
		new sap.ui.core.Item({text: "Token 8", key: "0008"}),
		new sap.ui.core.Item({text: "Token 9 - ABCDEF", key: "0009"})
	]
});

var oMultiCombo1 = new sap.m.MultiComboBox("multiComboBox", {
	items: [
		new sap.ui.core.Item({text: "Token 1", key: "0001"}),
		new sap.ui.core.Item({text: "Token 2", key: "0002"}),
		new sap.ui.core.Item({text: "Token 3", key: "0003"}),
		new sap.ui.core.Item({text: "Token 4 - long text example", key: "0004"}),
		new sap.ui.core.Item({text: "Token 5", key: "0005"}),
		new sap.ui.core.Item({text: "Token 6", key: "0006"}),
		new sap.ui.core.Item({text: "Token 7", key: "0007"}),
		new sap.ui.core.Item({text: "Token 8", key: "0008"}),
		new sap.ui.core.Item({text: "Token 9 - ABCDEF", key: "0009"})
	],
	selectedKeys: [
		"0001",
		"0002",
		"0003",
		"0004",
		"0005",
		"0006",
		"0007",
		"0008",
		"0009"
	]
});

//*******************************
var oLayout = new sap.m.VBox({
	width: "100%",
	items: [
		oNotAdjustedTokenizer,
		oAdjustedTokenizer,
		oMultiInput1,
		oMultiCombo1
	]
});

//*******************************
var oSlider = new sap.m.Slider("slider", {
	value: 100,
	width: "100%",
	change: function (oEvent) {
		var oHandleRect = oEvent.getSource().getClosestHandleDomRef().getClientRects()[0];
		var iMaxWidth = oHandleRect.right - oHandleRect.width / 2;
		//oNotAdjustedTokenizer.setMaxWidth(iMaxWidth + "px");
		oAdjustedTokenizer.setMaxWidth(iMaxWidth + "px");
		// oMultiInput1.setWidth(iMaxWidth + "px");
		// oMultiCombo1.setWidth(iMaxWidth + "px");
		//oLayout.setWidth(iMaxWidth + "px");
		oLayout.setWidth(oEvent.getParameter("value") + "%");
	}
});

var oToggleExpandedButton = new sap.m.Button({
	text: "Toggle Expanded on the adjustable tokenizer (second one)",
	press: function () {
		oAdjustedTokenizer.setExpanded(!oAdjustedTokenizer.getExpanded());
	}
});

oToggleExpandedButton.placeAt("content");
oSlider.placeAt("content");
oLayout.placeAt("content");