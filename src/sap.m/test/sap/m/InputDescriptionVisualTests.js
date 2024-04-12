// Test page is added due to issue reported in this ticket - 1970315739
var title = new sap.m.Title({
	text: "Samples with Input, MultiInput (extends Input), StepInput (extends Input) and ComboBox (extends InputBase) in the different Content Densities"
});
title.placeAt('contentCozy');

var btn11 = new sap.m.HBox({
	items: [
		new sap.m.Input({}),
		new sap.m.Input({description: "description (Cozy)"})
	]
}).addStyleClass("border");
btn11.placeAt('contentCozy');

var btn12 = new sap.m.HBox({
	items: [
		new sap.m.MultiInput({}),
		new sap.m.MultiInput({description: "description (Cozy)"})
	]
}).addStyleClass("border");
btn12.placeAt('contentCozy');

var btn13 = new sap.m.HBox({
	items: [
		new sap.m.StepInput({}),
		new sap.m.StepInput({description: "description (Cozy)"})
	]
}).addStyleClass("border");
btn13.placeAt('contentCozy');

var btn21 = new sap.m.HBox({
	items: [
		new sap.m.Input({}),
		new sap.m.Input({description: "description (Compact)"})
	]
}).addStyleClass("border");
btn21.placeAt('contentCompact');

var btn22 = new sap.m.HBox({
	items: [
		new sap.m.MultiInput({}),
		new sap.m.MultiInput({description: "description (Compact)"})
	]
}).addStyleClass("border");
btn22.placeAt('contentCompact');

var btn23 = new sap.m.HBox({
	items: [
		new sap.m.StepInput({}),
		new sap.m.StepInput({description: "description (Compact)"})
	]
}).addStyleClass("border");
btn23.placeAt('contentCompact');

var btn31 = new sap.m.HBox({
	items: [
		new sap.m.Input({}),
		new sap.m.Input({description: "description (Condesed)"})
	]
}).addStyleClass("border");
btn31.placeAt('contentCondesed');

var btn32 = new sap.m.HBox({
	items: [
		new sap.m.MultiInput({}),
		new sap.m.MultiInput({description: "description (Condesed)"})
	]
}).addStyleClass("border");
btn32.placeAt('contentCondesed');

var btn33 = new sap.m.HBox({
	items: [
		new sap.m.StepInput({}),
		new sap.m.StepInput({description: "description (Condesed)"})
	]
}).addStyleClass("border");
btn33.placeAt('contentCondesed')

// Same samples without HBox containers
new sap.m.Input({width: "150px"}).placeAt('contentCozy');
new sap.m.Input({width: "150px", description: "description (Cozy)"}).placeAt('contentCozy');

new sap.m.MultiInput({width: "150px"}).placeAt('contentCozy');
new sap.m.MultiInput({width: "150px", description: "description (Cozy)"}).placeAt('contentCozy');

new sap.m.StepInput({width: "150px"}).placeAt('contentCozy');
new sap.m.StepInput({width: "150px", description: "description (Cozy)"}).placeAt('contentCozy');

new sap.m.Input({width: "150px"}).placeAt('contentCompact');
new sap.m.Input({width: "150px", description: "description (Compact)"}).placeAt('contentCompact');

new sap.m.MultiInput({width: "150px"}).placeAt('contentCompact');
new sap.m.MultiInput({width: "150px", description: "description (Compact)"}).placeAt('contentCompact');

new sap.m.StepInput({width: "150px"}).placeAt('contentCompact');
new sap.m.StepInput({width: "150px", description: "description (Compact)"}).placeAt('contentCompact')

new sap.m.Input({width: "150px"}).placeAt('contentCondesed');
new sap.m.Input({width: "150px", description: "description (Condesed)"}).placeAt('contentCondesed');

new sap.m.MultiInput({width: "150px"}).placeAt('contentCondesed');
new sap.m.MultiInput({width: "150px", description: "description (Condesed)"}).placeAt('contentCondesed');

new sap.m.StepInput({width: "150px"}).placeAt('contentCondesed');
new sap.m.StepInput({width: "150px", description: "description (Condesed)"}).placeAt('contentCondesed');