(function (jQuery, App, Page) {
	sap.ui.require(["sap/ui/core/Core"], Core => Core.ready(function() {
		var oApp = new App(),
				myView = sap.ui.xmlview({viewContent:jQuery('#view1').html()}),
				oToggleHeaderOnTitleClickBtn = myView.byId("toggleHeaderOnTitleClick"),
				oToggleUseIconTabBarBtn = myView.byId("toggleUseIconTabBar"),
				oToggleFooterBtn = myView.byId("toggleFooter"),
				oObjectPage = myView.byId("ObjectPageLayout"),
				aData = [],
				o,
				oModel;

		oToggleHeaderOnTitleClickBtn.setPressed(oObjectPage.getToggleHeaderOnTitleClick());
		oToggleHeaderOnTitleClickBtn.attachPress(function(oEvent) {
			oObjectPage.setToggleHeaderOnTitleClick(oEvent.getParameter("pressed"));
		});

		oToggleUseIconTabBarBtn.setPressed(oObjectPage.getUseIconTabBar());
		oToggleUseIconTabBarBtn.attachPress(function(oEvent) {
			oObjectPage.setUseIconTabBar(oEvent.getParameter("pressed"));
		});

		oToggleFooterBtn.setPressed(oObjectPage.getShowFooter());
		oToggleFooterBtn.attachPress(function(oEvent) {
			oObjectPage.setShowFooter(oEvent.getParameter("pressed"));
		});

		for (var i = 1; i < 20; i++) {
			o = {};
			for (var b = 1; b < 6; b++) {
				o["text" + b] = "test" + i;
			}
			aData.push(o);
		}
		oModel = new sap.ui.model.json.JSONModel();
		oModel.setProperty("/rows", aData);

		var oTable1 = new sap.ui.table.Table("testUITable",{
			rows:"{model>/rows}",
			visibleRowCountMode: "Auto",
			minAutoRowCount: 2,

		});
		oTable1.setModel(oModel,"model");

		oTable1.addColumn(new sap.ui.table.Column({
			label: "col01",
			autoResizable: true,
			template: new sap.m.Text({
				text:"{model>text1}"
			})
		}));

		oTable1.addColumn(new sap.ui.table.Column({
			label: "col02",
			autoResizable: true,
			template: new sap.m.Text({
				text:"{model>text2}"
			})
		}));
		oTable1.addColumn(new sap.ui.table.Column({
			label: "col03",
			autoResizable: true,
			template: new sap.m.Text({
				text:"{model>text3}"
			})
		}));

		myView.byId("goalsSubSection").addBlock(oTable1);


		oApp.addPage(new Page({
			title: "ObjectPage",
			content: [myView]
		})).placeAt("content");
	}));
}(jQuery, sap.m.App, sap.m.Page))