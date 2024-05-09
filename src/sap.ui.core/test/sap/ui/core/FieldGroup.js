sap.ui.define([
  "sap/ui/commons/layout/VerticalLayout",
  "sap/ui/commons/layout/MatrixLayout",
  "sap/ui/commons/Label",
  "sap/ui/commons/TextField",
  "sap/ui/commons/CheckBox",
  "sap/m/DatePicker",
  "sap/base/Log"
], function(VerticalLayout, MatrixLayout, Label, TextField, CheckBox, DatePicker, Log) {
  "use strict";
  // Note: the HTML page 'FieldGroup.html' loads this module via data-sap-ui-on-init

  var oVerticalLayout = new VerticalLayout();
  oVerticalLayout.attachValidateFieldGroup(function(oEvent) {
	  Log.info("Validate " + oEvent.mParameters.fieldGroupIds[0]);
  });
  var oMatrixLayout = new MatrixLayout({width:"500px"});
  oMatrixLayout.setLayoutFixed(false);

  oMatrixLayout.createRow(
		  new Label({text: "Field 1 of group1",labelFor:"field11"}),
		  new TextField({id:"field11",width:"200px",fieldGroupIds:["group1"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 2 of group1",labelFor:"field12"}),
		  new TextField({id:"field12",width:"200px",fieldGroupIds:["group1"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 3 of group1",labelFor:"field13"}),
		  new TextField({id:"field13",width:"200px",fieldGroupIds:["group1"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 1 of group2",labelFor:"field21"}),
		  new CheckBox({id:"field21",width:"200px",fieldGroupIds:["group2"]})
  );
  oVerticalLayout.addContent(oMatrixLayout);

  var oMatrixLayout = new MatrixLayout({width:"500px"});
  oMatrixLayout.setLayoutFixed(false);
  oMatrixLayout.createRow(
		  new Label({text: "Field 2 of group2",labelFor:"field22"}),
		  new TextField({id:"field22",width:"200px",fieldGroupIds:["group2"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 1 with no group",labelFor:"field1"}),
		  new TextField({id:"field1",width:"200px"})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 3 of group2",labelFor:"field23"}),
		  new TextField({id:"field23",width:"200px",fieldGroupIds:["group2"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 1 of group3",labelFor:"field31"}),
		  new TextField({id:"field31",width:"200px",fieldGroupIds:["group3"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 2 of group3",labelFor:"field32"}),
		  new CheckBox({id:"field32",width:"200px",fieldGroupIds:["group3"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 3 of group3",labelFor:"field33"}),
		  new CheckBox({id:"field33",width:"200px",fieldGroupIds:["group3"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 4 with group3",labelFor:"field34"}),
		  new DatePicker({id:"field34",width:"200px",fieldGroupIds:["group3"]})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 2 with no group",labelFor:"field2"}),
		  new TextField({id:"field2",width:"200px"})
  );
  oMatrixLayout.createRow(
		  new Label({text: "Field 3 with no group",labelFor:"field3"}),
		  new TextField({id:"field3",width:"200px"})
  );

  oVerticalLayout.addContent(oMatrixLayout);
  oVerticalLayout.placeAt("content");
});