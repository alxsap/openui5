sap.ui.require([
	"sap/m/App",
	"sap/m/Page",
	"sap/m/CheckBox",
	"sap/m/ToggleButton",
	"sap/ui/core/Core",
	"sap/ui/core/Element",
	"sap/uxap/ObjectPageSubSection",
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/XMLView"
],
function(App, Page, CheckBox, ToggleButton, Core, Element, ObjectPageSubSection, jQuery) {

	Core.ready(function() {
		var oApp = new App(),
			myView = sap.ui.xmlview({viewContent:jQuery('#view1').html()}),
			oSelectionForm = myView.byId("selectionForm"),
			oObjectPage = myView.byId("ObjectPageLayout"),
			oSection = oObjectPage.getSections()[0];

			function updateSubSection(iSubSectionIndex, bAuto) {
				var sColumnSpan = bAuto ? ObjectPageSubSection.COLUMN_SPAN.auto : ObjectPageSubSection.COLUMN_SPAN.all,
					oSubSection = Element.getElementById(oObjectPage.getSelectedSection()).getSubSections()[iSubSectionIndex];
					oSubSection._setColumnSpan(sColumnSpan);
					oSubSection.getBlocks().forEach(function(oBlock) {
						oBlock.getDomRef().innerHTML = 'I am a block with columnSpan = <span style="background: white">"' + sColumnSpan + '"</span>';
					})
			}
			oSection.getSubSections().forEach(function(oSubSection) {
				var oCheckBox = new CheckBox(oSubSection.getId() + "cb", {
					text: oSubSection.getTitle(),
					select: function(oEvent) {
						var index = oSelectionForm.indexOfContent(this),
							bAuto = oEvent.getParameter("selected");
						updateSubSection(index, bAuto);
					}
				});
				oSelectionForm.addContent(oCheckBox);
			});
			oSelectionForm.addContent(new ToggleButton({
				text: "Toggle all",
				press: function(oEvent) {
				var bPressed = oEvent.getParameter("pressed");
				oSelectionForm.getContent().forEach(function(oItem, index) {
					if (oItem.isA("sap.m.CheckBox")) {
						oItem.setSelected(bPressed);
					}
					updateSubSection(index, bPressed);
				});
			}}));

		oApp.addPage(new Page({
			showHeader: false,
			content: [myView]
		})).placeAt("content");
	});
});