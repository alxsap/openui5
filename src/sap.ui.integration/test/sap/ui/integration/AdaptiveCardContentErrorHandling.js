// Note: the HTML page 'AdaptiveCardContentErrorHandling.html' loads this module via data-sap-ui-on-init

document.getElementById("my-card").addEventListener("action", function (event) {
	event.detail.getParameter("type") === "Submit" && console.log(event.detail.getParameter("parameters"));
});