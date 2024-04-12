sap.ui.define([
	"sap/m/Carousel",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/m/Dialog",
	"sap/m/Bar",
	"sap/m/Title",
	"sap/m/Button",
	"sap/ui/model/json/JSONModel",
	"sap/m/PDFViewer",
	"sap/ui/thirdparty/jquery",
	"sap/ui/core/mvc/XMLView",
	"sap/ui/core/mvc/Controller"
], function(Carousel, Filter, FilterOperator, Dialog, Bar, Title, Button, JSONModel, PDFViewer, jQuery) {
	"use strict";

	/* TODO: Consider replacing this
		* with a local var (let x=...) or 
		* with an AMD export/import (export.x=..., ...=X.x) */
	Object.defineProperty(globalThis, "myPDF", {
		configurable: "false",
		writable: "true",
		value: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
	});

	data = {
		previewItems: [
			{id: 8, objectType: "1", src: myPDF},
			{id: 9, objectType: "X", src: myPDF},
			{id: 18, objectType: "1", src: myPDF},
			{objectType: "1", src: myPDF},
			{objectType: "1", src: myPDF},
			{id: 1, objectType: "1", src: myPDF},
			{id: 5, objectType: "1", src: myPDF},
			{id: 10, objectType: "1", src: myPDF},
			{objectType: "1", src: myPDF},
			{objectType: "1", src: myPDF},
			{id: 2, objectType: "X", src: myPDF},
			{id: 6, objectType: "1", src: myPDF},
			{id: 11, objectType: "1", src: myPDF},
			{id: 17, objectType: "1", src: myPDF},
			{objectType: "1", src: myPDF},
			{id: 3, objectType: "1", src: myPDF},
			{id: 15, objectType: "1", src: myPDF},
			{id: 12, objectType: "1", src: myPDF},
			{id: 16, objectType: "1", src: myPDF},
			{objectType: "1", src: myPDF},
			{id: 4, objectType: "1", src: myPDF},
			{id: 7, objectType: "X", src: myPDF},
			{id: 13, objectType: "1", src: myPDF},
			{id: 14, objectType: "1", src: myPDF},
			{objectType: "1", src: myPDF}
		]
	}
	sap.ui.controller("myController", {
		onInit: function () {
			this.x = 1;

		},
		doSomething: function () {



			this.getView().byId("page").addContent(this.createDialog(null));

		},

		createDialog: function (aSorters) {
			var activePage;
			if (this.dialog) {
				this.dialog.destroy();
				this.dialog = undefined;
			}
			var that = this;
			carousel = new Carousel({
				showPageIndicator: true,
				busyIndicatoryDelay: 0,
				pageChanged: this.onCarouselPageChanged,
				pages: {
					path: "/previewItems",
					factory: function (id, context) {
						var previewObject = context.getProperty("");
						var page = that.createPage(previewObject);
						page.setBindingContext(context);
						if (previewObject.id === context.getModel().getProperty('/initialPreviewId')) {
							activePage = page;
							carousel.setActivePage(activePage);
							carousel.firePageChanged({
								newActivePageId: activePage.getId()
							});
						}
						return page;
					},
					filters: [new Filter("objectType", FilterOperator.NE, "X")],
					sorter: aSorters
				}
			})
			that.dialog = new Dialog({
				horizontalScrolling: false, verticalScrolling: false,
				contentHeight: '100%', contentWidth: '100%', stretch: true, stretchOnPhone: true,
				customHeader: new Bar({contentMiddle: [new Title({text: "title}"})]}),
				content: [carousel],
				buttons: new Button({
					text: "Close", press: function () {
						if (that.dialog)
							that.dialog.close();
					}
				})//getOperationButtons()
			});
			this.getView().addDependent(that.dialog);
			that.dialog.open();
			var model = new JSONModel();
			model.setData(data);
			model.setProperty("/initialPreviewId", 1);
			this.getView().setModel(model);


		},
		onCarouselPageChanged: function (evt) {
			//alert(evt.getParameter("newActivePageId"));
		},
		createPage: function (obj) {
			return new PDFViewer({source: obj.src});
		}

	});
	sap.ui.xmlview({viewContent: jQuery('#myXml').html()}).placeAt("content");
});