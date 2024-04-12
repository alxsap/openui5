try{
	sap.ui.getCore().loadLibrary("sap.ui.commons");
}catch(e){
	alert("This test page requires the library 'sap.ui.commons' which is not available.");
	throw(e);
}

var oContainer = new sap.ui.unified.ContentSwitcher("mySwitcher", {
	content1: [new sap.ui.core.HTML({
		content : "<iframe style=\"height: 100%; width: 100%\" " +
			"src=\"http://en.wikipedia.org/wiki/SAP_SE\" " +
			"></iframe>"
	})],
	content2: [new sap.ui.core.HTML({
		content : "<iframe style=\"height: 100%; width: 100%\" " +
			"src=\"http://sap.com\" " +
			"></iframe>"
	})]
});
oContainer.placeAt("content");

var oButton = new sap.ui.commons.Button({
	text: "Toggle Content",
	press: function(){
		oContainer.switchContent();
	}
});

var oButton2 = new sap.ui.commons.Button({
	text: "Toggle Animation (None)",
	press: function(){
		var aAnimations = this.data("animations");
		var iAnimation = this.data("curAnimation");
		iAnimation = iAnimation >= aAnimations.length - 1 ? 0 : iAnimation + 1;

		oContainer.setAnimation(aAnimations[iAnimation], /* suppress rerendering: */ false);

		this.data("curAnimation", iAnimation);

		this.setText("Toggle Animation ("+ aAnimations[iAnimation] +")");
	}
});
oButton2.data(
	"animations",
	["None", "Rotate", "ZoomIn", "ZoomOut", "SlideRight", "SlideOver", "Fade"]
);
oButton2.data("curAnimation", 0);

oButton.placeAt("content");
oButton2.placeAt("content");