var oShell = new sap.m.Shell("myShell", {
	title: "Shell AND App with Backgrounds",
	logo: "images/SAPUI5.png",
	headerRightText: "Avid Themer"
});

var oApp = new sap.m.SplitApp("myApp", {
	masterPages: new sap.m.Page("page1", {
		title: "Some Master"
	}),
	detailPages: new sap.m.Page("page2", {
		title:"Page 1",
		content : [
			new sap.ui.core.HTML({content:"<div><br><h3>Shell Settings</h3>"}),

			// background image switches
			new sap.m.Button({
				text : "Stretched Cheetah",
				press : function() {
					oShell.setBackgroundImage("images/demo/nature/huntingLeopard.jpg");
					oShell.setBackgroundColor("");
					oShell.setBackgroundOpacity(1);
					sap.ui.getCore().byId("opacitySlider")/*Not inside AMD call*/.setValue(1);
					oShell.setBackgroundRepeat(false);
					sap.ui.getCore().byId("repeatSwitch")/*Not inside AMD call*/.setState(false);
				}
			}),

			new sap.m.Button({
				text : "Repeating translucent red Cheetah",
				press : function() {
					oShell.setBackgroundImage("images/demo/nature/huntingLeopard.jpg");
					oShell.setBackgroundColor("#f00");
					oShell.setBackgroundOpacity(0.6);
					sap.ui.getCore().byId("opacitySlider")/*Not inside AMD call*/.setValue(0.6);
					oShell.setBackgroundRepeat(true);
					sap.ui.getCore().byId("repeatSwitch")/*Not inside AMD call*/.setState(true);
				}
			}),

			new sap.m.Button({
				text : "Clear Background",
				press : function() {
					oShell.setBackgroundImage("");
					oShell.setBackgroundColor("");
					oShell.setBackgroundOpacity(1);
					sap.ui.getCore().byId("opacitySlider")/*Not inside AMD call*/.setValue(1);
					oShell.setBackgroundRepeat(false);
					sap.ui.getCore().byId("repeatSwitch")/*Not inside AMD call*/.setState(false);
				}
			}),

			new sap.m.Label({
				text: "Repeat background:"
			}),

			new sap.m.Switch("repeatSwitch", {
				change: function(oEvent){
					var bRepeatState = oEvent.getParameter("state");
					oShell.setBackgroundRepeat(bRepeatState);
				}
			}),

			new sap.ui.core.HTML({content:"<br>"}),

			new sap.m.Slider("opacitySlider", {
				width: "50%",
				value: 1,
				min: 0,
				max: 1,
				step: 0.01,
				liveChange: function(oEvent){
					var value = oEvent.getParameter("value");
					oShell.setBackgroundOpacity(value);
				}
			}),


			new sap.ui.core.HTML({content:"<div><br><h3>App Settings</h3>"}),

			// app background image switches
			new sap.m.Button({
				text : "Stretched Cheetah",
				press : function() {
					oApp.setBackgroundImage("images/demo/nature/huntingLeopard.jpg");
					oApp.setBackgroundColor("");
					oApp.setBackgroundOpacity(1);
					sap.ui.getCore().byId("appOopacitySlider")/*Not inside AMD call*/.setValue(1);
					oApp.setBackgroundRepeat(false);
					sap.ui.getCore().byId("appRepeatSelect")/*Not inside AMD call*/.setSelectedKey("stretch");
				}
			}),

			new sap.m.Button({
				text : "Repeating translucent red Cheetah",
				press : function() {
					oApp.setBackgroundImage("images/demo/nature/huntingLeopard.jpg");
					oApp.setBackgroundColor("#f00");
					oApp.setBackgroundOpacity(0.6);
					sap.ui.getCore().byId("appOopacitySlider")/*Not inside AMD call*/.setValue(0.6);
					oApp.setBackgroundRepeat(true);
					sap.ui.getCore().byId("appRepeatSelect")/*Not inside AMD call*/.setSelectedKey("repeat");
				}
			}),

			new sap.m.Button({
				text : "Clear Background",
				press : function() {
					oApp.setBackgroundImage("");
					oApp.setBackgroundColor("");
					oApp.setBackgroundOpacity(1);
					sap.ui.getCore().byId("appOopacitySlider")/*Not inside AMD call*/.setValue(1);
					oApp.setBackgroundRepeat(false);
					sap.ui.getCore().byId("appRepeatSelect")/*Not inside AMD call*/.setSelectedKey("stretch");
				}
			}),

			new sap.m.Select("appRepeatSelect", {items:[
					new sap.ui.core.Item({text:"Stretch background",key:"stretch"}),
					new sap.ui.core.Item({text:"Repeat background",key:"tile"})
				],
				change: function(oEvent){
					var selectedItem = oEvent.getParameter("selectedItem");
					oApp.setBackgroundRepeat(selectedItem.getKey() === "stretch" ? false : true);
				}
			}),

			new sap.m.Slider("appOopacitySlider", {
				width: "50%",
				min: 0,
				max: 1,
				step: 0.01,
				liveChange: function(oEvent){
					var value = oEvent.getParameter("value");
					oApp.setBackgroundOpacity(value);
				}
			})
		]

	})
});

oShell.setApp(oApp).placeAt("body");