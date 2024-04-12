jQuery.fn.filterByText = function($textbox) {
	return this.each(function() {
		var selectbox = this;
		var options = [];
		jQuery(selectbox).find("option").each(function() {
			options.push({value: jQuery(this).val(), text: jQuery(this).text()});
		});
		jQuery(selectbox).data("options", options);

		// jQuery object or a selector
		// (https://codeql.github.com/codeql-query-help/javascript/js-unsafe-jquery-plugin/)
		$textbox = ($textbox instanceof jQuery) ? $textbox : jQuery(jQuery.find($textbox));
		$textbox.on("change keyup", function() {
			var options = jQuery(selectbox).empty().data("options");
			var search = jQuery(this).val().trim();
			var regex = new RegExp(search, "gi");

			jQuery.each(options, function(i) {
				var option = options[i];
				if(option.text.match(regex) !== null) {
					jQuery(selectbox).append(jQuery("<option>").text(option.text).val(option.value).on("dblclick", function() {
						jQuery("#selectedTests").append(jQuery(this).clone());
					}));
				}
			});
		});
	});
};

function prepareNewRun() {
	jQuery("div#innerBar").width("0%");
	jQuery("#stop").toggle();
	jQuery("div.testResult").remove();
	jQuery("span.total").text("0");
	jQuery("span.passed").text("0");
	jQuery("span.failed").text("0");
	jQuery("#coverageFrame").remove();
	jQuery("div.test-coverage").hide();
}

jQuery(function() {

	jQuery("#testPageLabel").text(window.location.origin);

	function showResults() {
		jQuery("div.test-reporting").attr("style", "padding: 0px; display: block; border: 1px solid rgb(170, 170, 170); margin: 10px;");
		jQuery("#openReporting").attr("style", "width:0px;height:0px;margin:5px;border-style:solid;border-width:0 12px 12px 12px;border-color:transparent transparent #007dc0 transparent;float: right;position: relative;left: -10px;cursor: pointer;");
		var $this = jQuery("#showResults");
		if($this.val() === "Show all results") {
			jQuery("div.testResult").show();
			$this.val("Show errors only");
		} else {
			jQuery("div.testResult.pass").hide();
			jQuery("div.testResult.fail").show();
			$this.val("Show all results");
		}
	}
	jQuery("#showResults").on("click", showResults);

	jQuery("#testPage").val(sap.ui.qunit.TestRunner.getTestPageUrl());

	function find() {
		prepareNewRun();
		var oContext = { pages:[] };
		return sap.ui.qunit.TestRunner.checkTestPage(jQuery("#testPage").val(), document.getElementById("sequential").checked).then(function(aTestPages) {
			window.aTestPages = aTestPages;
			for (var i = 0; i < aTestPages.length; i++) {
				oContext.pages.push({page: aTestPages[i]});
			}
			var fnTemplate = Handlebars.compile(jQuery("#qunitResults").html());
			var sHTML = fnTemplate(oContext);
			jQuery("#testPageSelectDiv").html(sHTML);
			jQuery("#testPageSelect > option").on("dblclick", function () {
				jQuery("#selectedTests").append(jQuery("#find").clone());
			});
			jQuery("#copyButtons").show();
			jQuery("#selectedTestsDiv").show();

			jQuery("#testPageSelect").filterByText(jQuery("#filter"));
			jQuery("#filter").show();
			jQuery("#console").val(aTestPages.join("\n"));
		});
	}
	jQuery("#find").on("click", find);

	function copy() {
		var aSelectedTests = jQuery("#testPageSelect")[0].selectedOptions;
		for (var i = 0; i < aSelectedTests.length; i++) {
			jQuery("#selectedTests").append(jQuery("<option>").text(jQuery(aSelectedTests[i]).text()).val(jQuery(aSelectedTests[i]).text()));
		}
	}jQuery("#copy").on("click", copy);

	function copyAll() {
		jQuery("#selectedTests").append(jQuery("#testPageSelect > option").clone());
	}
	jQuery("#copyall").on("click", copyAll);

	function remove() {
		var aSelectedTests = jQuery("#selectedTests")[0].selectedOptions;
		for (var i = aSelectedTests.length-1; i >= 0; i--) {
			jQuery(aSelectedTests[i]).remove();
		}
	}jQuery("#remove").on("click", remove);

	function removeAll() {
		jQuery("#selectedTests > option").remove();
	}
	jQuery("#removeall").on("click", removeAll);

	function run() {
		jQuery("#open").trigger("click");
		window.oStartTime = new Date();
		var $this = jQuery("#run");
		if ($this.val() === "Run") {
			//$this.val("Stop");
			var aTests = [];
			var aSelectedTests = jQuery("#selectedTests")[0].children;
			for (var i = 0; i < aSelectedTests.length; i++) {
				aTests.push(jQuery(aSelectedTests[i]).text());
			}
			var nStep = 100 / aTests.length;
			console.log(aTests.length);
			console.log(nStep);
			jQuery("#reportingHeader").toggle();
			sap.ui.qunit.TestRunner.runTests(aTests, nStep).then(function(oResult) {
				$this.val("Run");
				jQuery("#stop").toggle();
				if (sap.ui.qunit.TestRunner.hasCoverage()) {
					var $testCoverage = jQuery("div.test-coverage");
					$testCoverage.toggle();
					sap.ui.qunit.TestRunner.reportCoverage( $testCoverage[0] );
				}
			}).then(function() {
				$this.val("Run");
			});

		} else {
			sap.ui.qunit.TestRunner.stopTests();
		}
	}

	jQuery("#run").on("click", function () {
		if(jQuery("#selectedTests>option").length === 0) {
			alert("Please select at least on test to execute");
		} else {
			prepareNewRun();
			run();
		}
	});

	function open() {
		var $testSelection = jQuery("div#test-selection");
		if($testSelection.hasClass("opened")) {
			$testSelection.removeClass("opened");
			jQuery("div#elements").toggle();
			$testSelection.animate({height: "40px"}, 500);
			jQuery("#open").attr("style", "width:0px;height:0px;margin:5px;border-style:solid;border-width: 12px 12px 0 12px;border-color:#007dc0 transparent transparent transparent;float: right;position: relative;left: -10px;cursor: pointer;");
		} else {
			$testSelection.addClass("opened");
			$testSelection.animate({height: "300px"}, 500, function() {
				jQuery("div#elements").toggle();
			});
			jQuery("#open").attr("style", "width:0px;height:0px;margin:5px;border-style:solid;border-width:0 12px 12px 12px;border-color:transparent transparent #007dc0 transparent;float: right;position: relative;left: -10px;cursor: pointer;");
		}
	}
	jQuery("#open").on("click", open);


	function openCoverage() {
		if(jQuery("#coverageContent").is(":visible")) {
			jQuery("#coverageContent").hide();
			jQuery("#openCoverage").attr("style", "width:0px;height:0px;margin:5px;border-style:solid;border-width: 12px 12px 0 12px;border-color:#007dc0 transparent transparent transparent;float: right;position: relative;left: -10px;cursor: pointer;");
		} else {
			jQuery("#coverageContent").show();
			jQuery("#openCoverage").attr("style", "width:0px;height:0px;margin:5px;border-style:solid;border-width:0 12px 12px 12px;border-color:transparent transparent #007dc0 transparent;float: right;position: relative;left: -10px;cursor: pointer;");
		}
	}
	jQuery("#openCoverage").on("click", openCoverage);

	function openReporting() {
		jQuery("#showResults").toggle();
		if(jQuery("#showResults").css("display") === "none") {
			jQuery("div.testResult").hide();
			jQuery("div.test-reporting").attr("style", "padding: 0px; display: block; border: 1px solid rgb(170, 170, 170); margin: 10px; height: 40px;");
			jQuery("#openReporting").attr("style", "width:0px;height:0px;margin:5px;border-style:solid;border-width: 12px 12px 0 12px;border-color:#007dc0 transparent transparent transparent;float: right;position: relative;left: -10px;cursor: pointer;");
		} else {
			jQuery("div.test-reporting").attr("style", "padding: 0px; display: block; border: 1px solid rgb(170, 170, 170); margin: 10px;");
			jQuery("div.testResult").show();
			jQuery("#showResults").val("Show errors only");
			jQuery("#openReporting").attr("style", "width:0px;height:0px;margin:5px;border-style:solid;border-width:0 12px 12px 12px;border-color:transparent transparent #007dc0 transparent;float: right;position: relative;left: -10px;cursor: pointer;");
		}
	}
	jQuery("#openReporting").on("click", openReporting);

	function stop() {
		sap.ui.qunit.TestRunner.stopTests();
	}
	jQuery("#stop").on("click", stop);

	setInterval(function() {
		if (window.aTestPages) {
			jQuery("#run").show();
		}
	}, 500);

	if (sap.ui.qunit.TestRunner.getAutoStart()) {
		find().then(function() {
			copyAll();
			run();
		})
	}

});