var on1 = new sap.m.ObjectNumber("on1", {
	number: "300,000,000",
	unit: "Euro"
});

var on2 = new sap.m.ObjectNumber("on2", {
	number: "300,000,000",
	unit: "Euro"
}).addStyleClass("sapMObjectNumberLarge");

var oButtonEmphasized =new sap.m.Button("emphasized", {
	text:"Toggle emphasized",
	press: function(){
		on1.setEmphasized(!on1.getEmphasized());
		on2.setEmphasized(!on2.getEmphasized());
	}
});

var oButtonNum =new sap.m.Button("num", {
	text:"Set number",
	press: function(){
		on1.setNumber("100");
		on2.setNumber("100");
	}
});

var oButtonUnit =new sap.m.Button("unit", {
	text:"Set unit",
	press: function(){
		on1.setUnit("Dollars");
		on2.setUnit("Dollars");
	}
});

var oButtonStateS =new sap.m.Button("change_stateS", {
	text:"Success state",
	press: function(){
		on1.setState(sap.ui.core.ValueState.Success);
		on2.setState(sap.ui.core.ValueState.Success);
	}
});

var oButtonStateE =new sap.m.Button("change_stateE", {
	text:"Error state",
	press: function(){
		on1.setState(sap.ui.core.ValueState.Error);
		on2.setState(sap.ui.core.ValueState.Error);
	}
});

var oButtonStateW =new sap.m.Button("change_stateW", {
	text:"Warning state",
	press: function(){
		on1.setState(sap.ui.core.ValueState.Warning);
		on2.setState(sap.ui.core.ValueState.Warning);
	}
});

var oButtonStateI =new sap.m.Button("change_stateI", {
	text:"Information state",
	press: function(){
		on1.setState(sap.ui.core.ValueState.Information);
		on2.setState(sap.ui.core.ValueState.Information);
	}
});

var app = new sap.m.App();
var page = new sap.m.Page({
	showHeader : false,
	enableScrolling : true,
	content: [
		on1,
		on2,
		oButtonEmphasized,
		oButtonNum,
		oButtonUnit,
		oButtonStateS,
		oButtonStateE,
		oButtonStateW,
		oButtonStateI
	]
});
app.setInitialPage(page.getId());
app.addPage(page);

app.placeAt('body');