// Create Images
var imgDesert = new sap.m.Image("desert", {
	src: "images/demo/nature/desert.jpg",
	alt: "Majestic Desert",
	densityAware: false,
	decorative: false
});

var imgElephant = new sap.m.Image("elephant", {
	src: "images/demo/nature/elephant.jpg",
	alt: "Mighty Elephant",
	densityAware: false,
	decorative: false
});

var imgPrairie = new sap.m.Image("prairie", {
	src: "images/demo/nature/prairie.jpg",
	alt: "Prairie in Dawn",
	densityAware: false,
	decorative: false
});

var arrowsPlacementLabel = new sap.m.Label({
	text : "Carousel arrow placement"
});
var arrowsPlacementSelect = new sap.m.Select('arrowsPlacementSelect', {
	items : [
		new sap.ui.core.Item("arrowPlacementImageItem", {
			text : sap.m.CarouselArrowsPlacement.Content,
			key : sap.m.CarouselArrowsPlacement.Content
		}),
		new sap.ui.core.Item("arrowPlacementIndicatorItem", {
			text : sap.m.CarouselArrowsPlacement.PageIndicator,
			key : sap.m.CarouselArrowsPlacement.PageIndicator
		})
	],
	change : function (oEvent) {
		carousel.setArrowsPlacement(oEvent.getParameter('selectedItem').getKey());
	}
});

var backgroundDesignLabel = new sap.m.Label({
	text : "Carousel background design"
});
var backgroundDesignSelect = new sap.m.Select('backgroundDesignSelect', {
	items : [
		new sap.ui.core.Item("backgroundDesignTranslucent", {
			text : sap.m.BackgroundDesign.Translucent,
			key : sap.m.BackgroundDesign.Translucent
		}),
		new sap.ui.core.Item("backgroundDesignSolid", {
			text : sap.m.BackgroundDesign.Solid,
			key : sap.m.BackgroundDesign.Solid
		}),
		new sap.ui.core.Item("backgroundDesignTransparent", {
			text : sap.m.BackgroundDesign.Transparent,
			key : sap.m.BackgroundDesign.Transparent
		})
	],
	change : function (oEvent) {
		carousel.setBackgroundDesign(oEvent.getParameter('selectedItem').getKey());
	}
});

var pageIndicatorPlacementLabel = new sap.m.Label({
	text : "Page indicator placement"
});

var pageIndicatorPlacementSelect = new sap.m.Select('pageIndicatorPlacementSelect', {
	items : [
		new sap.ui.core.Item("pageIndicatorTopItem", {
			text : sap.m.PlacementType.Top,
			key : sap.m.PlacementType.Top
		}),
		new sap.ui.core.Item("pageIndicatorBottomItem", {
			text : sap.m.PlacementType.Bottom,
			key : sap.m.PlacementType.Bottom
		})
	],
	selectedKey : sap.m.PlacementType.Bottom,
	change : function (oEvent) {
		carousel.setPageIndicatorPlacement(oEvent.getParameter('selectedItem').getKey());
	}
});

var showPageIndicatorLabel = new sap.m.Label({
	text : "Show page indicator"
});

var showPageIndicatorSelect = new sap.m.Select('showPageIndicatorSelect', {
	items : [
		new sap.ui.core.Item("showPI", {
			text : 'Yes',
			key : 'true'
		}),
		new sap.ui.core.Item("hidePI", {
			text : 'No',
			key : 'false'
		})
	],
	change : function (oEvent) {
		var showPageIndicator = oEvent.getParameter('selectedItem').getKey() === 'true';
		carousel.setShowPageIndicator(showPageIndicator);
	}
});

var appearanceForm = new sap.ui.layout.form.SimpleForm({
	labelSpanL : 3,
	labelSpanM : 3,
	editable : true,
	layout : "ResponsiveGridLayout",
	content : [
		new sap.m.Toolbar({
			content : [
				new sap.m.Title({
					text : "Appearance",
					level : "H5",
					titleStyle : "H5"
				})
			]
		}),
		arrowsPlacementLabel,
		arrowsPlacementSelect,
		backgroundDesignLabel,
		backgroundDesignSelect,
		pageIndicatorPlacementLabel,
		pageIndicatorPlacementSelect,
		showPageIndicatorLabel,
		showPageIndicatorSelect
	]
}).placeAt("buttonsConatiner");

//Please uncomment any of the following lines to test the corresponding
//carousel attribute
var carousel = new sap.m.Carousel("myCarousel", {
	//pageIndicatorPlacement: sap.m.PlacementType.Top,
	//pageIndicatorPlacement: sap.m.PlacementType.Bottom,
	activePage: imgElephant,
	//width: "50%",
	//height: "50%",
	//showPageIndicator: false,
	loop: true,
	//showBusyIndicator: false,
	pages: [imgDesert, imgElephant, imgPrairie]
});


carousel.placeAt("carouselConatiner");

var buttonChangeHeightTo50Percents = new sap.m.Button("btnHeight50", {
	text: "change height to 50%",
	press: function () {
		carousel.setHeight("50%")
	}
}).placeAt("buttonsConatiner");

var buttonChangeHeightTo600px = new sap.m.Button("btnHeight600px", {
	text: "change height to 600 px",
	press: function () {
		carousel.setHeight("600px");
	}
}).placeAt("buttonsConatiner");

var buttonChangeWidthTo60Percents = new sap.m.Button("btnWidth60", {
	text: "change width to 60%",
	press: function () {
		carousel.setWidth("60%");
		carousel.rerender();
	}
}).placeAt("buttonsConatiner");

var buttonChangeWidthTo400px = new sap.m.Button("btnWidth400px", {
	text: "change width to 400 px",
	press: function () {
		carousel.setWidth("400px");
		carousel.rerender();
	}
}).placeAt("buttonsConatiner");

var buttonResetCarousel = new sap.m.Button("btnReset", {
	text: "Reset",
	press: function () {
		carousel.setWidth("");
		carousel.setHeight("");
		carousel.rerender();
	}
}).placeAt("buttonsConatiner");