var openPopup, closePopup, greenClicked, openAnim, closeAnim;

sap.ui.require(["sap/ui/core/Popup", "sap/ui/thirdparty/jquery"], function(Popup, jQuery) {
	openAnim = function($Ref, iDuration, fnCallback) {
	  $Ref.slideDown(iDuration, fnCallback);
	};

	closeAnim = function($Ref, iDuration, fnCallback) {
	  $Ref.slideUp(iDuration, fnCallback);
	};

	var popup = null;
	var modal = false;

	openPopup = function (iDuration, bModal, bAutoClose, fnOpenAnim, fnCloseAnim, oOf, bNotCenter) {
		if (bModal) {
			modal = true;
			var oWithinArea = Popup.getWithinAreaDomRef();
			if (oWithinArea !== window) {
				oOf = oWithinArea;
			}
			alert("Click the green rectangle to close the popup!");
		}

		if (popup) {
			alert("This test page only allows one open popup at a time");
			return;
		}

		var element = window.document.getElementById("popup");

		popup = new Popup(element, bModal, true, bAutoClose);
		popup.attachClosed(popupClosed);
		if (fnOpenAnim || fnCloseAnim) {
			popup.setAnimations(openAnim, fnCloseAnim);
		}

		if (bNotCenter) {
			popup.open(iDuration, "begin top", "end top", oOf || window, null, "fit");
		} else {
			popup.open(iDuration, "center center", "center center", oOf || window, null);
		}
	}

	closePopup = function (iDuration) {
	  if(popup) {
		popup.close(iDuration);
	  }
	}

	function popupClosed() {
		popup = null;
		modal = false;
	}

	greenClicked = function () {
		if (modal) {
			popup.close();
		}
	}

	jQuery(function() {
		document.getElementById("check").addEventListener("click", function(event) {
			if (event.target.checked) {
				var oWithinArea = document.getElementById("within");
				Popup.setWithinArea(oWithinArea);
				oWithinArea.style["background-color"] = "rgba(255, 0, 0, 0.5)";
			} else {
				Popup.setWithinArea(null);
				oWithinArea.style.removeProperty("background-color");
			}
		});
	});
});