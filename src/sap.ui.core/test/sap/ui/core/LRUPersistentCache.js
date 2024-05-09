// Note: the HTML page 'LRUPersistentCache.html' loads this module via data-sap-ui-on-init

var oCache;
sap.ui.define(["sap/ui/core/cache/CacheManager"], function (classCacheManager) {
	"use strict";
	oCache = classCacheManager;
});
function addEntry(key, idValue) {
	var oValue = document.getElementById(idValue).value,
			output = document.getElementById("output").innerHTML;
	key = "key" + Date.now();
	oCache.set(key, oValue).then(function () {
		output += "<br/> Added new entry with key " + key;
	}, function (eMsg) {
		output += "<br/> Error: key " + key + " was not added. Details: " + eMsg;
	}).then(function () {
		document.getElementById("output").innerHTML = output;
	});
}

function getEntry(idKey) {
	var key = document.getElementById(idKey).value,
			output = document.getElementById("output").innerHTML;
	oCache.get(key).then(function (v) {
		output += "<br/> Got entry of type [" + typeof v + "] for key [" + key + "]";
	}, function (eMsg) {
		output += "<br/> Error: entry for key [" + key + "] was not gotten. Details: " + eMsg;
	}).then(function () {
		document.getElementById("output").innerHTML = output;
	});
}

function addLargeEntry() {
	var oValue = m1;//came from the large script
	output = document.getElementById("output").innerHTML;
	key = "key" + Date.now();
	oCache.set(key, oValue).then(function () {
		output += "<br/> Added new entry with key " + key;
	}, function (eMsg) {
		output += "<br/> Error: key " + key + " was not added. Details: " + eMsg;
	}).then(function () {
		document.getElementById("output").innerHTML = output;
	});
}

function delFilters() {
	var oOptions = {};
	var oInputTimestamp = document.getElementById("timestamp");
	var iTimestamp;

	if (oInputTimestamp.value) {
		iTimestamp = parseInt(oInputTimestamp.value, 10);

		if (!isNaN(iTimestamp)) {
			oOptions.olderThan = new Date(iTimestamp);
		}
	}

	oOptions.prefix = document.getElementById("prefix").value;

	oCache.delWithFilters(oOptions);
}