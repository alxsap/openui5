sap.ui.define([
], function() {
	"use strict";
	document.getElementById("my-card").addEventListener("action", function (event) {
		event.detail.getParameter("type") === "Submit" && console.log(event.detail.getParameter("parameters"));
	});
});
