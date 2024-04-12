var app = new sap.m.App("myApp", {initialPage: "page1"});

var oBeginButton = new sap.m.Button({
	text: "Modal",
	type: sap.m.ButtonType.Reject,
	press: function () {
		oPopover.setModal(!oPopover.getModal());
	}
});

var oEndButton = new sap.m.Button({
	text: "Close",
	type: sap.m.ButtonType.Accept,
	press: function () {
		oPopover.close();
	}
});

var footer = new sap.m.Bar({
	contentLeft: [new sap.m.Button({text: "short"})],
	contentRight: [new sap.m.Button({text: "loooooong text"})]
});

var oPopover = new sap.m.Popover("pop1", {
	placement: sap.m.PlacementType.Auto,
	title: "Popover",
	showHeader: true,
	beginButton: oBeginButton,
	endButton: oEndButton,
	content: [
		new sap.m.Image({
			src: "images/SAPLogo.jpg",
			alt: "test image",
			decorative: false,
			densityAware: true,
			press: function(){
				this.setSrc("images/SAPUI5.png");
			}
		}).addStyleClass("img1")
	],
	footer: footer
});

var oButton = new sap.m.Button("btn0", {
	text: "Placement Auto",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Auto);
		oPopover.openBy(this);
	}
});

var oButton1 = new sap.m.Button("btn1", {
	text: "Placement Auto",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Auto);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned1");

var oButton2 = new sap.m.Button("btn2", {
	text: "Placement Bottom",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Bottom);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned2");

var oButton3 = new sap.m.Button("btn3", {
	text: "Placement Horizontal",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Horizontal);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned3");


var oButton4 = new sap.m.Button("btn4", {
	text: "Placement Horizontal",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Horizontal);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned25");

var oButton5 = new sap.m.Button("btn5", {
	text: "Placement HorizontalPreferredLeft",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.HorizontalPreferredLeft);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned5");

var oButton6 = new sap.m.Button("btn6", {
	text: "Placement HorizontalPreferredLeft",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.HorizontalPreferredLeft);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned6");

var oButton7 = new sap.m.Button("btn7", {
	text: "Placement HorizontalPreferredRight",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.HorizontalPreferredRight);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned7");

var oButton8 = new sap.m.Button("btn8", {
	text: "Placement HorizontalPreferredRight",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.HorizontalPreferredRight);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned8");

var oButton9 = new sap.m.Button("btn9", {
	text: "Placement Left",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Left);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned9");

var oButton10 = new sap.m.Button("btn10", {
	text: "Placement Right",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Right);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned10");

var oButton11 = new sap.m.Button("btn11", {
	text: "Placement PreferredBottomOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredBottomOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned11");

var oButton12 = new sap.m.Button("btn12", {
	text: "Placement PreferredBottomOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredBottomOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned12");

var oButton13 = new sap.m.Button("btn13", {
	text: "Placement PreferredLeftOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredLeftOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned13");

var oButton14 = new sap.m.Button("btn14", {
	text: "Placement PreferredLeftOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredLeftOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned14");

var oButton15 = new sap.m.Button("btn15", {
	text: "Placement PreferredRightOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredRightOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned15");

var oButton16 = new sap.m.Button("btn16", {
	text: "Placement PreferredRightOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredRightOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned16");

var oButton17 = new sap.m.Button("btn17", {
	text: "Placement PreferredTopOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredTopOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned17");

var oButton18 = new sap.m.Button("btn18", {
	text: "Placement PreferredTopOrFlip",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.PreferredTopOrFlip);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned18");

var oButton19 = new sap.m.Button("btn19", {
	text: "Placement Top",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Top);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned19");

var oButton20 = new sap.m.Button("btn20", {
	text: "Placement Verical",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Vertical);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned20");

var oButton21 = new sap.m.Button("btn21", {
	text: "Placement Verical",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.Vertical);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned21");

var oButton22 = new sap.m.Button("btn22", {
	text: "Placement VerticalPreferredBottom",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.VerticalPreferredBottom);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned22");

var oButton23 = new sap.m.Button("btn23", {
	text: "Placement VerticalPreferredBottom",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.VerticalPreferredBottom);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned23");

var oButton24 = new sap.m.Button("btn24", {
	text: "Placement VerticalPreferredTop",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.VerticalPreferredTop);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned24");

var oButton25 = new sap.m.Button("btn25", {
	text: "Placement VerticalPreferredTop",
	press: function () {
		oPopover.setPlacement(sap.m.PlacementType.VerticalPreferredTop);
		oPopover.openBy(this);
	}
}).addStyleClass("positioned4");

var page1 = new sap.m.Page("page1", {
	title: "sap.m.Popover",
	content: [
		oButton, oButton1, oButton2, oButton3, oButton4, oButton5, oButton6, oButton7, oButton8, oButton9, oButton10, oButton11, oButton12, oButton13,
		oButton14, oButton15, oButton16, oButton17, oButton18, oButton19, oButton20, oButton21, oButton22, oButton23, oButton24, oButton25
	]
}).addStyleClass("sapUiContentPadding");

app.addPage(page1);
app.placeAt("body");