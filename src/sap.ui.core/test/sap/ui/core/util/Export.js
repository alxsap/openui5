sap.ui.require(['sap/ui/model/json/JSONModel', 'sap/ui/model/odata/ODataModel', 'sap/ui/core/util/Export', 'sap/ui/core/util/ExportTypeCSV', "sap/ui/thirdparty/jquery"],
		function(JSONModel, ODataModel, Export, ExportTypeCSV, jQuery) {
		'use strict';

		var getSettings = function() {

			var sExportType = jQuery('#export-type').val(),
				sSeparatorChar = jQuery('#separator-char').val(),
				bByteOrderMark = jQuery('#byte-order-mark').val() === "default" ? undefined : jQuery('#byte-order-mark').val() === "true";

			var oExportType;

			if (sExportType === 'csv') {
				oExportType = new ExportTypeCSV({
					separatorChar: sSeparatorChar,
					byteOrderMark: bByteOrderMark
				});
			}

			var sDataSource = jQuery("#data-source").val();

			if (sDataSource === "json") {

				// Settings
				var iRows = jQuery("#json-rows").val(),
					iColumns = jQuery("#json-columns").val();

				// Create Model
				var aData = [];
				for (var i = 0; i < iRows; i++) {
					var mRow = {};
					for (var k = 0; k < iColumns; k++) {
						mRow["column" + k] = (Math.random() + 1).toString(36).substring(7) + " ✓ \t";
					}
					aData.push(mRow);
				}
				var oModel = new JSONModel(aData);

				var aColumns = [];
				for (var i = 0; i < iColumns; i++) {
					aColumns.push({
						name: "Column " + i,
						template: {
							content: {
								path: "column" + i
							}
						}
					});
				}

				return {
					exportType: oExportType,
					rows: {
						path: "/"
					},
					columns: aColumns,
					models: oModel
				};
			} else if (sDataSource === "odata") {

				var oModel = new ODataModel(jQuery("#odata-service-url").val());

				return {
					exportType: oExportType,
					rows: {
						path: '/' + jQuery("#odata-collection").val()
					},
					columns: [ {
						name: jQuery("#odata-column-name").val(),
						template: {
							content: {
								path: jQuery("#odata-column-property").val()
							}
						}
					} ],
					models: oModel
				};
			}

			return {};
		}

		jQuery("#export").on("click", function() {
			var oExport = new Export(getSettings());

			function destroyExportObject() {
				oExport.destroy();
			}

			oExport.generate()
			.then(function(sFile) {
				jQuery("#result").html(sFile.replace(/\n/g, '<br>'));
			})
			.then(destroyExportObject, destroyExportObject);
		});

		jQuery("#download").on("click", function() {
			jQuery("#result").html('');

			var oExport = new Export(getSettings());

			function destroyExportObject() {
				oExport.destroy();
			}

			oExport.saveFile().then(destroyExportObject, destroyExportObject);
		});

		var $json = jQuery(".data-source-json"),
			$odata = jQuery(".data-source-odata");
		jQuery("#data-source").on("change", function() {
			if (jQuery(this).val() === 'json') {
				$odata.css('display', 'none');
				$json.css('display', '');
			} else {
				$json.css('display', 'none');
				$odata.css('display', '');
			}
		});

	});