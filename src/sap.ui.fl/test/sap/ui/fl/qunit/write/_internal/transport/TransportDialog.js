var bTemp = false;
var bPackages = false;
var bLrep = false;
var bHidePackage = false;
var oApp = new sap.m.App("myApp", {
	initialPage : "page1"
});

var fPress = function() {
	var oDialog, fOnOkay, fOnCancel, sPackage, aPackages;

	fOnOkay = function(oEvent) {
		var sTransport, sPackage;

		sTransport = oEvent.mParameters.selectedTransport;
		sPackage = oEvent.mParameters.selectedPackage;
	};
	fOnCancel = function() {
		//debugger;
	};

	if (bTemp) {
		sPackage = "TW1";
	} else {
		sPackage = "";
	}

	if (bPackages) {
		aPackages = [
			{
				transportId : "T1",
				description : "Transport 1"
			},
			{
				transportId : "T2",
				description : "Transport 2"
			},
			{
				transportId : "T3",
				description : "Transport 3"
			},
			{
				transportId : "T4",
				description : "Transport 4"
			},
			{
				transportId : "T5",
				description : "Transport 5"
			}
		]
	} else {
		aPackages = [ ];
	}

	var oObject = null;

	if (bLrep) {
		oObject = { "type":"variant","name":"id_1414740501651_318","namespace":"" };
	}

	oDialog = new sap.ui.fl.write._internal.transport.TransportDialog({
		hidePackage : bHidePackage,
		pkg : sPackage,
		transports : aPackages,
		lrepObject : oObject
	});
	oDialog.attachOk(fOnOkay);
	oDialog.attachCancel(fOnCancel);
	oDialog.open();
};
var oStartButton = new sap.m.Button({
	text : "Start Dialog",
	press : fPress
});

var oUseTemp = new sap.m.CheckBox({
	text : "Use Package",
	checked: true,
	select : function() {
		bTemp= !bTemp;
	}
});

var oUseLREP = new sap.m.CheckBox({
	text : "Use LREP Object",
	checked: true,
	select : function() {
		bLrep= !bLrep;
	}
});

var oUsePackages = new sap.m.CheckBox({
	text : "Use Transports",
	checked: true,
	select : function() {
		bPackages= !bPackages;
	}
});

var oHidePackage = new sap.m.CheckBox({
	text : "Hide Package",
	checked: true,
	select : function() {
		bHidePackage= !bHidePackage;
	}
});

var oCompactMode = new sap.m.CheckBox({
	selected: true,
	text: "compactMode",
	select : function() {
		$("body").toggleClass("sapUiSizeCompact");
	}
});

var oPage = new sap.m.Page("page1", {
	title : "Transport Dialog Control",
	content : [oStartButton, oUseTemp, oUsePackages, oHidePackage, oUseLREP,oCompactMode]
});

oApp.addPage(oPage);
oApp.placeAt("body");

$(document).ready(function() {
	$("#myApp").toggleClass("sapUiSizeCompact");
});