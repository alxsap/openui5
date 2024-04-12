sap.ui.define([
	"sap/ui/commons/layout/MatrixLayout",
	"sap/ui/commons/Label",
	"sap/ui/commons/Button",
	"sap/ui/commons/layout/MatrixLayoutCell",
	"sap/ui/core/Icon",
	"sap/ui/layout/FixFlex",
	"sap/ui/layout/HorizontalLayout",
	"sap/ui/layout/VerticalLayout",
	"sap/ui/commons/CheckBox",
	"sap/ui/commons/FormattedTextView",
	"sap/ui/commons/HorizontalDivider",
	"sap/ui/commons/Image",
	"sap/ui/commons/Link",
	"sap/ui/commons/ListBox",
	"sap/ui/core/Item",
	"sap/ui/commons/MenuBar",
	"sap/ui/unified/MenuItem",
	"sap/ui/commons/Panel",
	"sap/ui/commons/ProgressIndicator",
	"sap/ui/commons/RadioButton",
	"sap/ui/commons/RadioButtonGroup",
	"sap/ui/commons/RatingIndicator",
	"sap/ui/commons/RoadMap",
	"sap/ui/commons/RoadMapStep",
	"sap/ui/commons/RowRepeater",
	"sap/ui/commons/SearchField",
	"sap/ui/commons/SegmentedButton",
	"sap/ui/commons/Slider",
	"sap/ui/commons/Splitter",
	"sap/ui/commons/TextField",
	"sap/ui/commons/TriStateCheckBox",
	"sap/ui/commons/TextView",
	"sap/ui/commons/Toolbar",
	"sap/ui/commons/layout/AbsoluteLayout",
	"sap/ui/commons/layout/PositionContainer",
	"sap/ui/commons/layout/MatrixLayoutRow",
	"sap/ui/layout/form/Form",
	"sap/ui/layout/form/GridLayout",
	"sap/ui/layout/form/FormContainer",
	"sap/ui/layout/form/FormElement",
	"sap/ui/table/Table",
	"sap/ui/table/Column",
	"sap/ui/unified/FileUploader",
	"sap/ui/ux3/ExactArea",
	"sap/ui/ux3/ExactBrowser",
	"sap/ui/ux3/ExactAttribute",
	"sap/ui/ux3/FacetFilter",
	"sap/ui/ux3/FacetFilterList",
	"sap/ui/core/ListItem",
	"sap/ui/ux3/NavigationBar",
	"sap/ui/ux3/NavigationItem",
	"sap/m/BusyIndicator",
	"sap/m/Bar",
	"sap/m/Button",
	"sap/m/CheckBox",
	"sap/m/Carousel",
	"sap/m/FacetFilter",
	"sap/m/FacetFilterList",
	"sap/m/FeedInput",
	"sap/m/FlexBox",
	"sap/m/IconTabBar",
	"sap/m/Image",
	"sap/m/Input",
	"sap/m/Label",
	"sap/m/Link",
	"sap/m/List",
	"sap/m/StandardListItem",
	"sap/m/NavContainer",
	"sap/m/ObjectAttribute",
	"sap/m/ObjectIdentifier",
	"sap/m/ObjectNumber",
	"sap/m/ObjectStatus",
	"sap/m/P13nColumnsPanel",
	"sap/m/P13nFilterPanel",
	"sap/m/P13nGroupPanel",
	"sap/m/P13nPanel",
	"sap/m/P13nSortPanel",
	"sap/m/Panel",
	"sap/m/ProgressIndicator",
	"sap/m/PullToRefresh",
	"sap/m/RadioButton",
	"sap/m/RadioButtonGroup",
	"sap/m/RatingIndicator",
	"sap/m/ScrollContainer",
	"sap/m/SearchField",
	"sap/m/SegmentedButton",
	"sap/m/Select",
	"sap/m/SelectList",
	"sap/m/Slider",
	"sap/m/Switch",
	"sap/m/Text",
	"sap/m/Token",
	"sap/m/Tokenizer",
	"sap/m/Toolbar",
	"sap/ui/thirdparty/jquery"
], function(
	MatrixLayout,
	Label,
	Button,
	MatrixLayoutCell,
	Icon,
	FixFlex,
	HorizontalLayout,
	VerticalLayout,
	CheckBox,
	FormattedTextView,
	HorizontalDivider,
	Image,
	Link,
	ListBox,
	Item,
	MenuBar,
	MenuItem,
	Panel,
	ProgressIndicator,
	RadioButton,
	RadioButtonGroup,
	RatingIndicator,
	RoadMap,
	RoadMapStep,
	RowRepeater,
	SearchField,
	SegmentedButton,
	Slider,
	Splitter,
	TextField,
	TriStateCheckBox,
	TextView,
	Toolbar,
	AbsoluteLayout,
	PositionContainer,
	MatrixLayoutRow,
	Form,
	GridLayout,
	FormContainer,
	FormElement,
	Table,
	Column,
	FileUploader,
	ExactArea,
	ExactBrowser,
	ExactAttribute,
	FacetFilter,
	FacetFilterList,
	ListItem,
	NavigationBar,
	NavigationItem,
	BusyIndicator,
	Bar,
	MButton,
	MCheckBox,
	Carousel,
	MFacetFilter,
	MFacetFilterList,
	FeedInput,
	FlexBox,
	IconTabBar,
	MImage,
	Input,
	MLabel,
	MLink,
	List,
	StandardListItem,
	NavContainer,
	ObjectAttribute,
	ObjectIdentifier,
	ObjectNumber,
	ObjectStatus,
	P13nColumnsPanel,
	P13nFilterPanel,
	P13nGroupPanel,
	P13nPanel,
	P13nSortPanel,
	MPanel,
	MProgressIndicator,
	PullToRefresh,
	MRadioButton,
	MRadioButtonGroup,
	MRatingIndicator,
	ScrollContainer,
	MSearchField,
	MSegmentedButton,
	Select,
	SelectList,
	MSlider,
	Switch,
	Text,
	Token,
	Tokenizer,
	MToolbar,
	jQuery
) {
	"use strict";
	try{
		sap.ui.getCore().loadLibrary("sap.ui.commons");
		sap.ui.getCore().loadLibrary("sap.ui.ux3");
		sap.ui.getCore().loadLibrary("sap.ui.unified");
		sap.ui.getCore().loadLibrary("sap.m");
		sap.ui.getCore().loadLibrary("sap.ui.table");
	}catch(e){
		alert("This test page requires the library 'sap.ui.commons' which is not available.");
		throw(e);
	}

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "aInvisibleControls", {
		configurable: "false",
		writable: "true",
		value: []
	});

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oLayout", {
		configurable: "false",
		writable: "true",

		value: new MatrixLayout({
			width: "95%"
		}).addStyleClass("displayTable").addDelegate({
			onAfterRendering: function() {
				var $Status = jQuery("#status_renderings");
				$Status.text(parseInt($Status.text(), 10) + 1);
			}
		})
	});

	function toggleVisible(i, oControl) {
		oControl.setVisible(!oControl.getVisible());
	}

	function toggleAllVisible() {
		jQuery.each(aInvisibleControls, toggleVisible);
	}

	function addRow(sTitle, oControl) {
		var oInvisibleControl = oControl.clone().setVisible(false);
		aInvisibleControls.push(oInvisibleControl);

		oLayout.createRow(
			new Label({ text: sTitle }),
			oControl,
			oInvisibleControl,
			new Button({
				text: "toggle",
				press: function() {
					toggleVisible(0, oInvisibleControl);
				}
			})
		);
	}

	function addHeadingRow() {
		var aRowArgs = [];

		for (var i = 0; i < arguments.length; i++) {
			var oContent = arguments[i];
			if (typeof oContent === "string") {
				oContent = new Label({text: oContent});
			}
			var oCell = new MatrixLayoutCell({content: oContent});
			oCell.addStyleClass("heading");
			aRowArgs.push(oCell);
		}

		switch (arguments.length) {
			case 1:
				oCell.setColSpan(4);
				oCell.addStyleClass("groupsSeparator");
		}

		return oLayout.createRow.apply(oLayout, aRowArgs);
	}


	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "oFirstRow", {
		configurable: "false",
		writable: "true",

		value: addHeadingRow(
			"Control name",
			"Visible",
			"Invisible",
			new Button({ text: "Toggle All", press: toggleAllVisible })
		)
	});

	oLayout.getRows()[0].addStyleClass("firstRow")

	oLayout.placeAt("uiArea1");

	addHeadingRow("sap.ui.core");
	addRow("core/Icon", new Icon({src: "sap-icon://menu"}));

	addHeadingRow("sap.ui.layout");
	addRow("layout/FixFlex", new FixFlex({ fixContent: [new Button({ text: "A"}), new Button({ text: "B"})] }));
	addRow("layout/HorizontalLayout", new HorizontalLayout({ content: [new Button({ text: "A"}), new Button({ text: "B"})] }));
	addRow("layout/VerticalLayout", new VerticalLayout({ content: [new Button({ text: "A"}), new Button({ text: "B"})] }));

	addHeadingRow("sap.ui.commons");
	addRow("commons/Button", new Button({ text: "A" }));
	addRow("commons/CheckBox", new CheckBox());
	addRow("commons/FormattedTextView", new FormattedTextView({ htmlText: "Test<strong>Test</strong>Test" }));
	addRow("commons/HorizontalDivider", new HorizontalDivider());
	addRow("commons/Image", new Image({ src: "https://sdk.openui5.org/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png" }));
	addRow("commons/Label", new Label({ text: "A" }));
	addRow("commons/Link", new Link({text: "Link", href: "https://sdk.openui5.org/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png"}));
	addRow("commons/ListBox", new ListBox({ items: [new Item({ text: 'A'}),new Item({ text: 'B'}) ]}));
	addRow("commons/MenuBar", new MenuBar({ items: [new MenuItem({text: "A"}), new MenuItem({text: "B"})]}));
	// addRow("commons/MessageBar", new sap.ui.commons.MessageBar()); // TODO: Not a standard rendered control. Talk to owner.
	// addRow("commons/MessageList", new sap.ui.commons.MessageList()); // TODO: Not a standard rendered control. Talk to owner.
	addRow("commons/Panel", new Panel({ content: new Button({text: "A"})}));
	addRow("commons/ProgressIndicator", new ProgressIndicator());
	addRow("commons/RadioButton", new RadioButton());
	addRow("commons/RadioButtonGroup", new RadioButtonGroup({ items: [new Item({ text: 'A'}),new Item({ text: 'B'}) ]}));
	addRow("commons/RatingIndicator", new RatingIndicator());
	addRow("commons/RoadMap", new RoadMap({ steps: [new RoadMapStep({label: "A"}), new RoadMapStep({label: "B"})] }));
	addRow("commons/RowRepeater", new RowRepeater({ rows: [new Button({ text: "A"}), new Button({ text: "B"})] }));
	addRow("commons/SearchField", new SearchField());
	addRow("commons/SegmentedButton", new SegmentedButton({ buttons: [new Button({ text: "A"}), new Button({ text: "B"})] }));
	addRow("commons/Slider", new Slider());
	addRow("commons/Splitter", new Splitter({ firstPaneContent: new Button({ text: "A"}), secondPaneContent: new Button({ text: "B"}) }));
	addRow("commons/TextField", new TextField());
	addRow("commons/TriStateCheckBox", new TriStateCheckBox());
	addRow("commons/TextView", new TextView({ text: "Test" }));
	addRow("commons/Toolbar", new Toolbar({ items: [new Button({ text: "A"}), new Button({ text: "B"})] }));

	addHeadingRow("sap.ui.commons.layout");
	addRow("commons.layout/AbsoluteLayout", new AbsoluteLayout({width: "100%", height: "30px", positions: [
		new PositionContainer({top: "0", left: "0", control: new Button({ text: "B"})})
	]})); // TODO: Renderer had doBeforeRendring before returning when invisible.
	addRow("commons.layout/MatrixLayout", new MatrixLayout({ rows: [
		new MatrixLayoutRow({cells: [
			new MatrixLayoutCell({content: [
				new Button({ text: "A"}), new Button({ text: "B"})
			]})
		]})
	]}));

	addHeadingRow("sap.ui.layout.form");
	addRow("layout.form/Form", new Form({
		title: "Test",
		layout: new GridLayout(),
		formContainers: [
			new FormContainer({
				formElements: [
					new FormElement({
						label: "A",
						fields: [new Button({ text: "A"})]
					})
				]
			})
		]
	}));

	addHeadingRow("sap.ui.table");
	addRow("table/Table", new Table({
		columns: [
			new Column({
				label: new Label({text: "Test"})
			})
		]
	}));

	addHeadingRow("sap.ui.unified");
	addRow("unified/FileUploader", new FileUploader());


	addHeadingRow("sap.ui.ux3");
	addRow("ux3/ExactArea", new ExactArea({ content: [new Button({text: "A"})]}));
	addRow("ux3/ExactBrowser", new ExactBrowser({ attributes: [new ExactAttribute({text: "A"}), new ExactAttribute({text: "B"})]}));
	addRow("ux3/FacetFilter", new FacetFilter({ lists: [new FacetFilterList({ items: [new ListItem({text: "A"}), new ListItem({text: "B"})]}), new FacetFilterList({ items: [new ListItem({text: "A"}), new ListItem({text: "B"})]})]}));
	addRow("ux3/NavigationBar", new NavigationBar({ items: [new NavigationItem({text: "A"}), new NavigationItem({text: "B"})]}));

	addHeadingRow("sap.m");
	addRow("m/BusyIndicator", new BusyIndicator());
	addRow("m/Bar", new Bar({contentLeft: new Button({ text: "A"}), contentMiddle: new Button({ text: "B"}), contentRight: new Button({ text: "C"})}));
	addRow("m/Button", new MButton({text: "A"}));
	addRow("m/CheckBox", new MCheckBox({text: "A"}));
	addRow("m/Carousel", new Carousel({pages: [new Button({ text: "A"}), new Button({ text: "B"})]}));
	addRow("[TODO: Leads to double rendering] m/FacetFilter", new MFacetFilter({lists: [new MFacetFilterList({title: "A"}), new MFacetFilterList({title: "B"})]}));
	addRow("m/FacetFilterList", new MFacetFilterList({title: "A"}));
	addRow("m/FeedInput", new FeedInput({value: "A"}));
	addRow("m/FlexBox", new FlexBox({items: [new Button({ text: "A"}), new Button({ text: "B"})]}));
	addRow("m/IconTabBar", new IconTabBar({content: [new Button({ text: "A"}), new Button({ text: "B"})]}));
	// addRow("m/IconTabHeader", new sap.m.IconTabHeader({items: [new sap.m.IconTabFilter({ text: "A"}), new sap.m.IconTabFilter({ text: "B"})]}));
	addRow("m/Image", new MImage({src: "https://sdk.openui5.org/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png"}));
	addRow("m/Input(Base)", new Input({value: "A"}));
	addRow("m/Label", new MLabel({text: "A"}));
	addRow("m/Link", new MLink({text: "Link", href: "https://sdk.openui5.org/resources/sap/ui/core/mimes/logo/icotxt_white_220x72_blue.png"}));
	addRow("m/List(Base),ListItem(Base)", new List({items: [new StandardListItem({title: "A"}), new StandardListItem({title: "B"})]}));
	addRow("m/NavContainer", new NavContainer({height: "20px", initialPage: "navpage1", pages: [new Button("navpage1", { text: "A"}), new Button({ text: "B"})]}));
	addRow("m/ObjectAttribute", new ObjectAttribute({text: "A"}));
	// addRow("m/ObjectHeader", new sap.m.ObjectHeader({title: "A"})); // TODO: Uses its own invisible logic in renderer, talk to owner..
	addRow("m/ObjectIdentifier", new ObjectIdentifier({text: "A"}));
	addRow("m/ObjectNumber", new ObjectNumber({number: 1, unit: "A"}));
	addRow("m/ObjectStatus", new ObjectStatus({text: "A"}));
	addRow("m/P13nColumnsPanel", new P13nColumnsPanel({title: "A"}));
	addRow("m/P13nFilterPanel", new P13nFilterPanel({title: "A"}));
	addRow("m/P13nGroupPanel", new P13nGroupPanel({title: "A"}));
	addRow("m/P13nPanel", new P13nPanel({title: "A"}));
	addRow("m/P13nSortPanel", new P13nSortPanel({title: "A"}));
	addRow("m/Panel", new MPanel({headerText: "A"}));
	addRow("m/ProgressIndicator", new MProgressIndicator({percentValue: 33, displayValue: "33%"}));
	addRow("m/PullToRefresh", new PullToRefresh({description: "A"}));
	addRow("m/RadioButton", new MRadioButton({text: "A"}));
	addRow("m/RadioButtonGroup", new MRadioButtonGroup({buttons: [new MRadioButton({text: "A"}), new MRadioButton({text: "B"})]}));
	addRow("m/RatingIndicator", new MRatingIndicator({text: "A"}));
	addRow("m/ScrollContainer", new ScrollContainer({content: [new MButton({text: "A"})]}));
	addRow("m/SearchField", new MSearchField({value: "A"}));
	addRow("m/SegmentedButton", new MSegmentedButton({buttons: [new MButton({text: "A"}), new MButton({text: "B"})]}));
	addRow("m/Select", new Select({items: [new Item({text: "A"}), new Item({text: "B"})]}));
	addRow("m/SelectList", new SelectList({items: [new Item({text: "A"}), new Item({text: "B"})]}));
	addRow("m/Slider", new MSlider());
	addRow("m/Switch", new Switch());
	addRow("m/Text", new Text({text: "A"}));
	addRow("m/Token", new Token({text: "A"}));
	addRow("m/Tokenizer", new Tokenizer({tokens: [new Token({text: "A"}), new Token({text: "B"})]}));
	addRow("m/Toolbar", new MToolbar({content: [new MButton({text: "A"}), new MButton({text: "B"})]}));
});