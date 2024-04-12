var oShell = new sap.m.Shell("myShell", {
	title: "Shell with Backgrounds",
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
			})
		]

	})
});

oShell.setApp(oApp).placeAt("body");