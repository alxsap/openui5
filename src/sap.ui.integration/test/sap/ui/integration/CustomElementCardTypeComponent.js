function handleAction(event) {
	sap.m.MessageToast.show("Event Type: " + event.type);
}

document.querySelectorAll("ui-integration-card").forEach(function (oCard) {
	oCard.addEventListener("action", handleAction);
});

customElements.whenDefined("ui-integration-card").then(function () {
	new sap.ui.integration.Host('host1', {
		resolveDestination: function(sDestinationName) {
			if (sDestinationName == "Northwind") {
				return Promise.resolve("https://services.odata.org/V3/Northwind/Northwind.svc");
			}
		}
	});
});