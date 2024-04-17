sap.ui.define(["sap/ui/thirdparty/jquery", 'sap/ui/model/json/JSONModel'],
		function($, JSONModel) {
		'use strict';

		var getSettings = function() {

			var sExportType = $('#export-type').val(),
				sSeparatorChar = $('#separator-char').val(),
				bByteOrderMark = $('#byte-order-mark').val() === "default" ? undefined : $('#byte-order-mark').val() === "true";

			var oExportType;

			if (sExportType === 'csv') {
				oExportType = new undefined/*ExportTypeCSV*/({
					separatorChar: sSeparatorChar,
					byteOrderMark: bByteOrderMark
				});
			}

			var sDataSource = $("#data-source").val();

			if (sDataSource === "json") {

				// Settings
				var iRows = $("#json-rows").val(),
					iColumns = $("#json-columns").val();

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

				var oModel = new undefined/*ODataModel*/($("#odata-service-url").val());

				return {
					exportType: oExportType,
					rows: {
						path: '/' + $("#odata-collection").val()
					},
					columns: [ {
						name: $("#odata-column-name").val(),
						template: {
							content: {
								path: $("#odata-column-property").val()
							}
						}
					} ],
					models: oModel
				};
			}

			return {};
		}

		$("#export").on("click", function() {
			var oExport = new undefined/*Export*/(getSettings());

			function destroyExportObject() {
				oExport.destroy();
			}

			oExport.generate()
			.then(function(sFile) {
				$("#result").html(sFile.replace(/\n/g, '<br>'));
			})
			.then(destroyExportObject, destroyExportObject);
		});

		$("#download").on("click", function() {
			$("#result").html('');

			var oExport = new undefined/*Export*/(getSettings());

			function destroyExportObject() {
				oExport.destroy();
			}

			oExport.saveFile().then(destroyExportObject, destroyExportObject);
		});

		var $json = $(".data-source-json"),
			$odata = $(".data-source-odata");
		$("#data-source").on("change", function() {
			if ($(this).val() === 'json') {
				$odata.css('display', 'none');
				$json.css('display', '');
			} else {
				$json.css('display', 'none');
				$odata.css('display', '');
			}
		});

	});