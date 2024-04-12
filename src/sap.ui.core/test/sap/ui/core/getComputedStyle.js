var style = window.getComputedStyle(document.documentElement);
console.log("style >> "+style);
var oCarousel = new sap.m.Carousel();
oCarousel.placeAt("content");
oCarousel.setHeight("300px");
oCarousel.setWidth("300px");