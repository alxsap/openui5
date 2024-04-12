//	jQuery.sap.require("sap.m.DraftIndicator");

	var draftInd = new sap.m.DraftIndicator({
	});

	var oSavingDraftButton = new sap.m.Button({
		text: "show Saving Draft",
		press: function () {
			draftInd.showDraftSaving();
		}
	});

	var oSavedDraftButton = new sap.m.Button({
		text: "show Draft Saved",
		press: function () {
			draftInd.showDraftSaved();
		}
	});

	var oClearDraftButton = new sap.m.Button({
		text: "clear Draft state",
		press: function () {
			draftInd.clearDraftState();
		}
	});


	oClearDraftButton.placeAt("content");
	oSavingDraftButton.placeAt("content");
	oSavedDraftButton.placeAt("content");
	draftInd.placeAt("content");