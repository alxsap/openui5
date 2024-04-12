var data = {
	names: [
		{firstName: "Peter", lastName: "Mueller"},
		{firstName: "Petra", lastName: "Maier"},
		{firstName: "Thomas", lastName: "Smith"},
		{firstName: "John", lastName: "Williams"},
		{firstName: "Maria", lastName: "Jones"}
	]
};
var oModel = new sap.ui.model.json.JSONModel();
oModel.setData(data);

// create the UI
var oList = new sap.m.List({
	headerText:"Names - drag between or on items",
	dragDropConfig: new sap.ui.core.dnd.DragDropInfo({
		sourceAggregation: "items",
		targetAggregation: "items",
		dropPosition: sap.ui.core.dnd.DropPosition.OnOrBetween,
		drop: function(oEvent) {
			var iSourceIndex = oList.indexOfItem(oEvent.getParameter("draggedControl"));
			var iTargetIndex = oList.indexOfItem(oEvent.getParameter("droppedControl"));
			var aData = oModel.getObject("/names");
			var oMovedData = aData.splice(iSourceIndex, 1)[0];
			aData.splice(iTargetIndex, 0, oMovedData);
			oModel.refresh();
		}
	})
}).bindItems({
	path : "/names",
	template : new sap.m.StandardListItem({
		title: "{lastName}",
		description: "{firstName}"
	})
}).setModel(oModel);

var oPage = new sap.m.Page({
	title: "Drag And Drop Within List (on or between items)",
	content : oList
});

var oApp = new sap.m.App({
	pages: [oPage]
}).placeAt("content");