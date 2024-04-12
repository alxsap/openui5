var manifest1 = {
	"sap.app": {
		"id": "cardWithDesigntime",
		"type": "card"
	},
	"sap.card": {
		"type": "Table",
		"header": {
			"title": "Table Card with Top 5 Products",
			"subTitle": "These are the top sellers this month",
			"icon": {
				"src": "sap-icon://sales-order"
			},
			"status": {
				"text": "5 of 100"
			}
		},
		"content": {
			"data": {
				"json": [{
						"Name": "Comfort Easy",
						"Category": "PDA & Organizers"
					},
					{
						"Name": "ITelO Vault",
						"Category": "PDA & Organizers"
					},
					{
						"Name": "Notebook Professional 15",
						"Category": "Notebooks"
					},
					{
						"Name": "Ergo Screen E-I",
						"Category": "Monitors"
					},
					{
						"Name": "Laser Professional Eco",
						"Category": "Printers"
					}
				]
			},
			"row": {
				"columns": [{
						"title": "Name",
						"value": "{Name}"
					},
					{
						"title": "Category",
						"value": "{Category}"
					}
				]
			}
		}
	}
};

function configure(sId) {
	var oCard = document.getElementById(sId)
	oCard.loadDesigntime().then(function (oResult) {
		sap.ui.require(["sap/ui/integration/designtime/baseEditor/BaseEditor"], function (Editor) {
			var oEditor = new Editor();
			oEditor.setConfig(oResult.designtime);
			oEditor.setJson(oResult.manifest);
			oEditor.attachJsonChanged(function (oEvent) {
				oCard.setAttribute("manifest", JSON.stringify(oEvent.getParameter("json")));

				// save the whole modified manifest for later use
			});
			oEditor.placeAt("configuration_" + sId);
		})
	}).catch(function(oError) {
		document.getElementById("configuration_" + sId).innerHTML = oError.error;
	});
}


document.getElementById("card1").setAttribute("manifest", JSON.stringify(manifest1));