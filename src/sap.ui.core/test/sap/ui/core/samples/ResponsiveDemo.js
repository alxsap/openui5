sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/Device",
	"sap/ui/table/Table",
	"sap/ui/table/Column",
	"sap/ui/commons/Label",
	"sap/ui/commons/TextView",
	"sap/ui/commons/RatingIndicator",
	"sap/ui/core/Control",
	"sap/ui/commons/library",
	"sap/ui/ux3/DataSetSimpleView",
	"sap/ui/ux3/DataSet",
	"sap/ui/ux3/DataSetItem",
	"sap/m/List",
	"sap/m/library",
	"sap/m/StandardListItem",
	"sap/m/SearchField",
	"sap/m/App",
	"sap/m/Page",
	"sap/m/Bar",
	"sap/ui/ux3/Shell",
	"sap/ui/ux3/NavigationItem",
	"sap/ui/thirdparty/jquery"
], function(
	JSONModel,
	Filter,
	FilterOperator,
	Device,
	Table,
	Column,
	Label,
	TextView,
	RatingIndicator,
	Control,
	commonsLibrary,
	DataSetSimpleView,
	DataSet,
	DataSetItem,
	List,
	mobileLibrary,
	StandardListItem,
	SearchField,
	App,
	Page,
	Bar,
	Shell,
	NavigationItem,
	jQuery
) {
	"use strict";

	// shortcut for sap.m.ListMode
	const ListMode = mobileLibrary.ListMode;

	//Initialize the Model
	var data = {selectionIdx: -1, filter: "", products:[]};
	var aTitles = ["Notebook Basic", "UMTS PDA", "Easy Hand", "Deskjet Super Highspeed",
				   "Copperberry Cellphone", "Notebook LCD Display", "PC Power Station",
				   "Gaming Monster Pro", "ITelO FlexTop I4000", "ITelO FlexTop I6300c",
				   "Goldberry Cellphone", "ITelO FlexTop I9100", "Notebook Professional",
				   "Smart Office", "Deskjet Super Highspeed", "Notebook Basic XS"];
	for(var i=0; i<aTitles.length; i++){
		var sTitle = aTitles[i];
		var oProduct = {id: ""+i, price: Math.floor((Math.random()*1000))+1+" $", category: "PC",
				title: sTitle, rating: Math.floor((Math.random()*5))+1, selected: false};
		if(sTitle.indexOf("Notebook") >= 0){
			oProduct.category = "Notebook";
		}else if(sTitle.indexOf("Cellphone") >= 0 || sTitle.indexOf("PDA") >= 0){
			oProduct.category = "Mobile";
		}
		oProduct.image = "../images/"+oProduct.category+".png";
		data.products.push(oProduct);
	}

	var oModel = new JSONModel();
	oModel.setData(data);

	//Some helper functions
	function select(idx){
		for(var i=0; i<data.products.length; i++){
			data.products[i].selected = false;
		}
		data.selectionIdx = -1;
	
		if(idx >=0 && idx < data.products.length){
			data.products[idx].selected = true;
			data.selectionIdx = idx;
		}
	
		oModel.setData(data);
	}

	function loadLib(sLib){
		try{
			sap.ui.getCore().loadLibrary(sLib);
		}catch(e){
			alert("This test page requires the library '"+sLib+"' which is not available.");
			throw(e);
		}
	}

	function doFilter(oEvent){
		var sQuery = oEvent.getParameter("query");
		currentFilter = !sQuery ? [] : [new Filter("title", FilterOperator.Contains, sQuery)];
		select(-1);
		currentControl.__refresh();
	}

	//Attach Media-Handler
	Device.media.attachHandler(function(mParams){
		initialize(mParams.from);
	}, null, 'myPoints');


	//Initialization Code
	var oTable, oDataSet, oApp, oShell;

	var currentFilter = [];
	var currentControl;
	var currentMobile = null;

	var aPoints = [420, 750, 1130];

	function initialize(from){
		var aInfo;
		if(from >= aPoints[2]){
			aInfo = initializeTable();
		}else if(from >= aPoints[1]){
			aInfo = initializeDataset(false);
		}else if(from >= aPoints[0]){
			aInfo = initializeDataset(true);
		}else{
			aInfo = initializeList();
		}
	
		var mobile = aInfo[1];
	
		function init(){
			Theming.detachApplied(init);
			currentControl = aInfo[0];
			var ctrl;
			if(!currentMobile){
				ctrl = initializeShell();
				ctrl.removeAllContent();
				ctrl.addContent(currentControl);
			}else{
				ctrl = oApp;
			}
	
			var uiArea = null;
			if(!uiArea || uiArea.getContent()[0] != ctrl){
				ctrl.placeAt("root", "only");
			}
		};
	
		if(currentMobile === null || currentMobile != mobile){
			Theming.attachApplied(init);
	
			if(!currentMobile && oShell){
				oShell._getSearchTool().close();
			}
	
			currentMobile = mobile;
			jQuery("#root").html("");
			Theming.setTheme(mobile ? "sap_belize" : "sap_bluecrystal");
		}else{
			init();
		}
	}


	function initializeTable(){
		if(oTable){
			oTable.__refresh();
			return [oTable, false];
		}
	
		loadLib("sap.ui.commons");
		loadLib("sap.ui.table");
	
		oTable = new Table({
			selectionMode: "Single",
			rowSelectionChange: function(oEvent){
				if(!oTable.__ignoreSelectionChange){
					select(oEvent.getParameter("rowIndex"));
				}
			},
			columns: [
				new Column({
					label: new Label({text: "Product Name"}),
					template: new TextView().bindProperty("text", "title")
				}),
				new Column({
					label: new Label({text: "Category"}),
					template: new TextView().bindProperty("text", "category")
				}),
				new Column({
					label: new Label({text: "Price"}),
					template: new TextView().bindProperty("text", "price")
				}),
				new Column({
					label: new Label({text: "Rating"}),
					template: new RatingIndicator({editable: false}).bindProperty("value", "rating")
				})
			],
			rows: {path: "/products"}
		});
		oTable.setModel(oModel);
	
		oTable.__refresh = function(){
			oTable.__ignoreSelectionChange = true;
			this.getBinding("rows").filter(currentFilter);
			oTable.__ignoreSelectionChange = false;
			this.setSelectedIndex(data.selectionIdx);
		};
	
		oTable.__refresh();
	
		return [oTable, false];
	}


	function initializeDataset(bSingleRow){
		if(oDataSet){
			oDataSet.__refresh(true, bSingleRow);
			return [oDataSet, false];
		}
	
		loadLib("sap.ui.commons");
		loadLib("sap.ui.ux3");
	
		Control.extend("ItemLayout", {
			metadata : {
				aggregations : {
					"link" : {type : "sap.ui.commons.Link", multiple : false},
					"image" : {type : "sap.ui.commons.Image", multiple : false},
					"form" : {type : "sap.ui.commons.form.Form", multiple : false},
				}
			},
	
			renderer: {
				apiVersion: 2,
				render: function(rm, ctrl){
					rm.openStart("div", ctrl);
					rm.class("CustomItemLayout");
					rm.openEnd();
						rm.openStart("div");
						rm.class("CustomItemLayoutInner");
						rm.openEnd();
							rm.openStart("div");
							rm.class("CustomItemLayoutTitle");
							rm.openEnd();
								rm.renderControl(ctrl.getImage());
								rm.openStart("div").openEnd();
									rm.renderControl(ctrl.getLink());
								rm.close("div");
							rm.close("div");
							rm.openStart("div");
							rm.class("CustomItemLayoutCntnt");
							rm.openEnd();
								rm.renderControl(ctrl.getForm());
							rm.close("div");
						rm.close("div");
					rm.close("div");
				}
			},
	
			onBeforeRendering : function(){
				if(this.resizeTimer){
					clearTimeout(this.resizeTimer);
					this.resizeTimer = null;
				}
			},
	
			onAfterRendering : function(){
				var $This = this.$();
				if($This.parent().parent().hasClass("sapUiUx3DSSVSingleRow")){
					this._resize();
				}else{
					$This.addClass("CustomItemLayoutSmall");
				}
			},
	
			_resize: function(){
				if(!this.getDomRef()){
					return;
				}
				var $This = this.$();
				if($This.outerWidth() >= 440){
					$This.removeClass("CustomItemLayoutSmall").addClass("CustomItemLayoutLarge");
				}else{
					$This.removeClass("CustomItemLayoutLarge").addClass("CustomItemLayoutSmall");
				}
				setTimeout(jQuery.proxy(this._resize, this), 300);
			}
		});
	
		function createTemplate(){
			var c = commonsLibrary;
			return new ItemLayout({
				link: new c.Link({text: "{title}"}),
				image: new c.Image({src: "{image}"}),
				form: new c.form.Form({
					width: "100%",
					layout: new c.form.GridLayout(),
					formContainers: [
						new c.form.FormContainer({
							formElements: [
								new c.form.FormElement({
									label: new c.Label({text: "Category", layoutData: new c.form.GridElementData({hCells: "5"})}),
									fields: [new c.TextField({value: "{category}", editable: false})]
								}),
								new c.form.FormElement({
									label: new c.Label({text: "Price", layoutData: new c.form.GridElementData({hCells: "5"})}),
									fields: [new c.TextField({value: "{price}", editable: false})]
								}),
								new c.form.FormElement({
									label: new c.Label({text: "Rating", layoutData: new c.form.GridElementData({hCells: "5"})}),
									fields: [new c.RatingIndicator({value: "{rating}", editable: false})]
								})
							]
						})
					]
				})
			});
		};
	
		var oResponsiveView = new DataSetSimpleView({
			floating: true,
			responsive: true,
			itemMinWidth: 200,
			template: createTemplate()
		});
		var oRowView = new DataSetSimpleView({
			floating: false,
			responsive: false,
			itemMinWidth: 0,
			template: createTemplate()
		});
	
		oDataSet = new DataSet({
			items: {
				path: "/products",
				template: new DataSetItem({
					title : "{title}",
					iconSrc : "{image}"
				})
			},
			views: [oResponsiveView, oRowView],
			showToolbar: false,
			selectionChanged: function(oEvent){
				select(oEvent.getParameter("newLeadSelectedIndex"));
			}
		});
		oDataSet.setModel(oModel);
	
		oDataSet.__refresh = function(bChangeCurrentView, bSingleRow){
			if(bChangeCurrentView){
				this.setSelectedView(bSingleRow ? oDataSet.getViews()[1] : oDataSet.getViews()[0]);
			}
			this.getBinding("items").filter(currentFilter);
			this.setLeadSelection(data.selectionIdx);
		};
	
		oDataSet.__refresh(true, bSingleRow);
	
		return [oDataSet, false];
	}


	function initializeList(){
		if(oApp){
			oApp.__refresh();
			return [oApp, true];
		}
	
		loadLib("sap.m");
	
		var oList = new List({
			inset : true,
			showUnread: false,
			mode: ListMode.SingleSelect,
			items: {
				path: "/products",
				template: new StandardListItem({
					type : "Active",
					title : "{title}",
					icon : "{image}",
					selected : "{selected}"
				})
			},
			"select": function(oEvent){
				select(oList.indexOfItem(oEvent.getParameter("listItem")));
			}
		});
	
		oList.setModel(oModel);
	
		var oSearchField = new SearchField({
			value: "{/filter}",
			search: doFilter
		});
	
		oSearchField.setModel(oModel);
	
		oApp = new App({
			pages: [new Page({
				title : "Products",
				content : [oList],
				footer: new Bar({
					contentRight: [oSearchField]
				})
			})]
		});
	
		oApp.__refresh = function(){
			var oList = oApp.getPages()[0].getContent()[0];
			oList.getBinding("items").filter(currentFilter);
		};
	
		oApp.__refresh();
	
		return [oApp, true];
	}


	function initializeShell(){
		if(oShell){
			return oShell;
		}
	
		loadLib("sap.ui.ux3");
	
		oShell = new Shell({
			appTitle: "Products",
			showFeederTool: false,
			fullHeightContent: true,
			worksetItems: [new NavigationItem({
				text: "Products"
			})]
		});
	
		var oSearchField = oShell.getSearchField();
		oSearchField.setModel(oModel);
		oSearchField.setEnableListSuggest(false);
		oSearchField.setEnableClear(true);
		oSearchField.setEnableFilterMode(true);
		oSearchField.bindProperty("value", "/filter");
		oSearchField.attachSearch(function(oEvent){
			doFilter(oEvent);
			oShell._getSearchTool().close();
		});
	
		return oShell;
	}
	Device.media.initRangeSet('myPoints', aPoints);
});
