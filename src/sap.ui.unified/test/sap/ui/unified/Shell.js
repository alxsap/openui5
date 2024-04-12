var state, oldState = null;


var configItm = new sap.ui.unified.ShellHeadItem({
	tooltip: "Configuration",
	icon: sap.ui.core.IconPool.getIconURI("menu2"),
	press: function(){
		oShell.setShowPane(!oShell.getShowPane());
		configItm.setSelected(!configItm.getSelected());
	}
});

var curtainConfigItm = new sap.ui.unified.ShellHeadItem({
	tooltip: "Configuration",
	icon: sap.ui.core.IconPool.getIconURI("menu2"),
	showMarker: true,
	press: function(){
		oShell.setShowCurtainPane(!oShell.getShowCurtainPane());
		curtainConfigItm.setSelected(!curtainConfigItm.getSelected());
		curtainConfigItm.setShowMarker(!curtainConfigItm.getShowMarker());
		sap.ui.getCore().byId("CurtainContent")/*Not inside AMD call*/.setHeaderHidden(oShell.getShowCurtainPane());
	}
});

(new sap.ui.core.InvisibleText("homeItm-txt", {text: "Home Screen"})).toStatic();

var homeItm = new sap.ui.unified.ShellHeadItem({
	tooltip: "Home",
	icon: sap.ui.core.IconPool.getIconURI("home"),
	press: function(){setState("HOME");},
	toggleEnabled: false,
	ariaLabelledBy: ["homeItm-txt"]
});

var filterItm = new sap.ui.unified.ShellHeadItem({
	tooltip: "Filter",
	icon: sap.ui.core.IconPool.getIconURI("filter"),
	press: function(){
		filterItm.setSelected(!filterItm.getSelected());
	}
});

var closeItm = new sap.ui.unified.ShellHeadItem({
	tooltip: "Close",
	icon: sap.ui.core.IconPool.getIconURI("decline"),
	press: function(){
		oShell.setShowCurtain(false);
		setState(oldState);
	}
});

var logoffItm = new sap.ui.unified.ShellHeadItem({
	tooltip: "Logoff",
	icon: sap.ui.core.IconPool.getIconURI("log"),
	toggleEnabled: false,
	press: function(){
	}
});


var oDialog = new sap.m.Dialog({
	width: "200px",
	height: "200px",
	title: "Dialog",
	endButton: new sap.m.Button({
		text: "Close",
		press: function() {
			oDialog.close();
		}
	})
});

var oCntnt = {
	"SEARCH" : {
		curt: [
			new CurtainContent("CurtainContent", {
				text: "Title",
				content: [
					new sap.m.Button({
						text: "Focussable Button #1",
						press: function() { alert("Yay, you pressed a button..."); }
					}),
					new sap.m.Text({text: "This is the search screen\n\n"+sLorem})
				]
			})
		],
		curtPane: [
		   new sap.m.Button({
				text: "Focussable Pane Button #1",
				press: function() { alert("Yay, you pressed a button..."); }
			}),
		   new sap.m.Text({text: "Configure the search screen ...\n\n"+sLorem})
		],
		items: [curtainConfigItm, homeItm],
		rightItems: [filterItm, closeItm, logoffItm]
	},
	"HOME" : {
		pane: [
				new sap.m.Button({
				text: "Focussable Button #2",
				press: function() { alert("Yay, you pressed a button..."); }
			}),
		   new sap.m.Text({text: "Configure the home screen ...\n\n"+sLorem})
			],
		cntnt: [new sap.m.Button({
					text: "Click to open App 1",
					press: function(){setState("APP1");}
				}),
				new sap.m.Button({
					text: "Click to open App 2",
					press: function(){setState("APP2");}
				}),
				new sap.m.Button({
					text: "Open a dialog",
					press: function(){
						oDialog.open();
					}
				}),
				new sap.m.Text({text: "Your home screen\n\n"+sLorem})],
		items: [configItm],
		rightItems: [logoffItm]
	},
	"APP1" : {
		cntnt: [new sap.m.Text({text: "This is App 1\n\n"+sLorem})],
		items: [homeItm],
		rightItems: [logoffItm]
	},
	"APP2" : {
		cntnt: [new sap.m.Text({text: "This is App 2\n\n"+sLorem})],
		items: [homeItm],
		rightItems: [logoffItm]
	}
};

function applyContent(){
	var cntnt = oCntnt[state];

	if(cntnt.pane){
		oShell.removeAllPaneContent();
		for(var i=0; i<cntnt.pane.length; i++){
			oShell.addPaneContent(cntnt.pane[i]);
		}
	}
	if(cntnt.curtPane){
		oShell.removeAllCurtainPaneContent();
		for(var i=0; i<cntnt.curtPane.length; i++){
			oShell.addCurtainPaneContent(cntnt.curtPane[i]);
		}
	}
	if(cntnt.curt){
		oShell.removeAllCurtainContent();
		for(var i=0; i<cntnt.curt.length; i++){
			oShell.addCurtainContent(cntnt.curt[i]);
		}
	}
	if(cntnt.cntnt){
		oShell.removeAllContent();
		for(var i=0; i<cntnt.cntnt.length; i++){
			oShell.addContent(cntnt.cntnt[i]);
		}
	}
	if(cntnt.items){
		oShell.removeAllHeadItems();
		for(var i=0; i<cntnt.items.length; i++){
			oShell.addHeadItem(cntnt.items[i]);
		}
	}
	if(cntnt.rightItems){
		oShell.removeAllHeadEndItems();
		for(var i=0; i<cntnt.rightItems.length; i++){
			oShell.addHeadEndItem(cntnt.rightItems[i]);
		}
	}
};

function setState(sState){
	switch(sState){
		case "SEARCH":
			oShell.setShowCurtain(true);
			oldState = state;
			break;
		case "APP1":
		case "APP2":
			oShell.setShowCurtain(false);
			oShell.setShowPane(false);
			oShell.setHeaderHiding(true);
			break;
		case "HOME":
		default:
			sState = "HOME";
			oShell.setHeaderHiding(false);
			oShell.setShowCurtain(false);
			break;
	}
	configItm.setSelected(false);
	filterItm.setSelected(false);

	state = sState;
	applyContent();
};

var oShell = new sap.ui.unified.Shell({
	icon: sLogo,
	search: new SearchFieldPlaceHolder("sf", {
		search: function(oEvent){
			if(state != "SEARCH"){
				setState("SEARCH");
			}
		}
	})
});
oShell.placeAt("content");

oShell.setUser(new sap.ui.unified.ShellHeadUserItem({
	image: "images/person.jpg",
	username: "Karl Mustermann",
	press: function(){alert("User Item pressed");}
}));

setState("HOME");