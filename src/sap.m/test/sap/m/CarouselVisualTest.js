sap.ui.define([
	"sap/ui/qunit/utils/nextUIUpdate",
	"sap/m/Image",
	"sap/m/Label",
	"sap/m/Select",
	"sap/ui/core/Item",
	"sap/m/library",
	"sap/ui/layout/form/SimpleForm",
	"sap/m/Toolbar",
	"sap/m/Title",
	"sap/m/Carousel",
	"sap/m/Button",
	"sap/ui/core/Core"
], function(nextUIUpdate, Image, Label, Select, Item, mobileLibrary, SimpleForm, Toolbar, Title, Carousel, Button, Core) {
	"use strict";

	// shortcut for sap.m.PlacementType
	const PlacementType = mobileLibrary.PlacementType;

	// shortcut for sap.m.BackgroundDesign
	const BackgroundDesign = mobileLibrary.BackgroundDesign;

	// shortcut for sap.m.CarouselArrowsPlacement
	const CarouselArrowsPlacement = mobileLibrary.CarouselArrowsPlacement;

	// Create Images
	var imgDesert = new Image("desert", {
		src: "images/demo/nature/desert.jpg",
		alt: "Majestic Desert",
		densityAware: false,
		decorative: false
	});

	var imgElephant = new Image("elephant", {
		src: "images/demo/nature/elephant.jpg",
		alt: "Mighty Elephant",
		densityAware: false,
		decorative: false
	});

	var imgPrairie = new Image("prairie", {
		src: "images/demo/nature/prairie.jpg",
		alt: "Prairie in Dawn",
		densityAware: false,
		decorative: false
	});

	var arrowsPlacementLabel = new Label({
		text : "Carousel arrow placement"
	});
	var arrowsPlacementSelect = new Select('arrowsPlacementSelect', {
		items : [
			new Item("arrowPlacementImageItem", {
				text : CarouselArrowsPlacement.Content,
				key : CarouselArrowsPlacement.Content
			}),
			new Item("arrowPlacementIndicatorItem", {
				text : CarouselArrowsPlacement.PageIndicator,
				key : CarouselArrowsPlacement.PageIndicator
			})
		],
		change : function (oEvent) {
			carousel.setArrowsPlacement(oEvent.getParameter('selectedItem').getKey());
		}
	});

	var backgroundDesignLabel = new Label({
		text : "Carousel background design"
	});
	var backgroundDesignSelect = new Select('backgroundDesignSelect', {
		items : [
			new Item("backgroundDesignTranslucent", {
				text : BackgroundDesign.Translucent,
				key : BackgroundDesign.Translucent
			}),
			new Item("backgroundDesignSolid", {
				text : BackgroundDesign.Solid,
				key : BackgroundDesign.Solid
			}),
			new Item("backgroundDesignTransparent", {
				text : BackgroundDesign.Transparent,
				key : BackgroundDesign.Transparent
			})
		],
		change : function (oEvent) {
			carousel.setBackgroundDesign(oEvent.getParameter('selectedItem').getKey());
		}
	});

	var pageIndicatorPlacementLabel = new Label({
		text : "Page indicator placement"
	});

	var pageIndicatorPlacementSelect = new Select('pageIndicatorPlacementSelect', {
		items : [
			new Item("pageIndicatorTopItem", {
				text : PlacementType.Top,
				key : PlacementType.Top
			}),
			new Item("pageIndicatorBottomItem", {
				text : PlacementType.Bottom,
				key : PlacementType.Bottom
			})
		],
		selectedKey : PlacementType.Bottom,
		change : function (oEvent) {
			carousel.setPageIndicatorPlacement(oEvent.getParameter('selectedItem').getKey());
		}
	});

	var showPageIndicatorLabel = new Label({
		text : "Show page indicator"
	});

	var showPageIndicatorSelect = new Select('showPageIndicatorSelect', {
		items : [
			new Item("showPI", {
				text : 'Yes',
				key : 'true'
			}),
			new Item("hidePI", {
				text : 'No',
				key : 'false'
			})
		],
		change : function (oEvent) {
			var showPageIndicator = oEvent.getParameter('selectedItem').getKey() === 'true';
			carousel.setShowPageIndicator(showPageIndicator);
		}
	});

	new SimpleForm({
		labelSpanL : 3,
		labelSpanM : 3,
		editable : true,
		layout : "ResponsiveGridLayout",
		content : [
			new Toolbar({
				content : [
					new Title({
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
	var carousel = new Carousel("myCarousel", {
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
	nextUIUpdate.runSync()/*context not obviously suitable for an async function*/;

	new Button("btnHeight50", {
		text: "change height to 50%",
		press: function () {
			carousel.setHeight("50%")
		}
	}).placeAt("buttonsConatiner");

	new Button("btnHeight600px", {
		text: "change height to 600 px",
		press: function () {
			carousel.setHeight("600px");
		}
	}).placeAt("buttonsConatiner");

	new Button("btnWidth60", {
		text: "change width to 60%",
		press: function () {
			carousel.setWidth("60%");
			carousel.invalidate();
		}
	}).placeAt("buttonsConatiner");

	new Button("btnWidth400px", {
		text: "change width to 400 px",
		press: function () {
			carousel.setWidth("400px");
			carousel.invalidate();
		}
	}).placeAt("buttonsConatiner");

	new Button("btnReset", {
		text: "Reset",
		press: function () {
			carousel.setWidth("");
			carousel.setHeight("");
			carousel.invalidate();
		}
	}).placeAt("buttonsConatiner");
});
