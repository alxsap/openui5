sap.ui.define([
	"sap/m/Carousel"
], function(Carousel) {
	"use strict";
	var style = window.getComputedStyle(document.documentElement);
	console.log("style >> "+style);
	var oCarousel = new Carousel();
	oCarousel.placeAt("content");
	oCarousel.setHeight("300px");
	oCarousel.setWidth("300px");
});
