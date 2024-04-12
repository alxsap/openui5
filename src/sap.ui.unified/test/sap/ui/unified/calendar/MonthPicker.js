var oMonthPicker = new sap.ui.unified.calendar.MonthPicker("MP1",{
	select: function(oEvent){
		var oTF = sap.ui.getCore().byId("TF1")/*Not inside AMD call*/;
		var oMP = oEvent.oSource;
		var iMonth = oMP.getMonth();
		oTF.setValue(iMonth);
	}
}).placeAt("sample1");

var oLabel = new sap.ui.commons.Label({text: "selected month", labelFor: "TF1"}).placeAt("event1");
var oInput = new sap.ui.commons.TextField("TF1",{
	editable: true,
	change: function(oEvent){
		oEvent.oSource;
		var sValue = oEvent.getParameter('newValue');
		var oMP = sap.ui.getCore().byId("MP1")/*Not inside AMD call*/;
		if(sValue && !isNaN(sValue)){
			var iMonth = parseInt(sValue);
			if(iMonth > 11) {
				iMonth = 11;
			}else if(iMonth <0) {
				iMonth = 0;
			}
			oMP.setMonth(iMonth);
		}
	}
}).placeAt("event1");

oMonthPicker = new sap.ui.unified.calendar.MonthPicker("MP2",{
	month: 5,
	months: 4,
	columns: 0,
	select: function(oEvent){
		var oTF = sap.ui.getCore().byId("TF2")/*Not inside AMD call*/;
		var oMP = oEvent.oSource;
		var iMonth = oMP.getMonth();
		oTF.setValue(iMonth);
	}
}).placeAt("sample2");

oLabel = new sap.ui.commons.Label({text: "selected month", labelFor: "TF2"}).placeAt("event2");
oInput = new sap.ui.commons.TextField("TF2",{
	editable: true,
	change: function(oEvent){
		oEvent.oSource;
		var sValue = oEvent.getParameter('newValue');
		var oMP = sap.ui.getCore().byId("MP2")/*Not inside AMD call*/;
		if(sValue && !isNaN(sValue)){
			var iMonth = parseInt(sValue);
			if(iMonth > 11) {
				iMonth = 11;
			}else if(iMonth <0) {
				iMonth = 0;
			}
			oMP.setMonth(iMonth);
		}
	}
}).placeAt("event2");