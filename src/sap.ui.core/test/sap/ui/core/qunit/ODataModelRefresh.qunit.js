//TODO currently we rely on northwind odata service for tests...
//TODO tests depends on server response time and northwind content...so tests may be unstable

// time to wait for server responses
var timeout = 3000,
	sReadURI = "../../../../../proxy/http/services.odata.org/V3/Northwind/Northwind.svc/",
	sWriteURI = "../../../../../proxy/http/services.odata.org/V3/(S(iigy1oswxpi3mnmpdk0edd2l))/odata/odata.svc/";

var oLabel = new sap.ui.commons.Label("myLabel");
oLabel.placeAt("target1");

function initModel(sURI, bJSON, bUseBatch){
	var oModel = new sap.ui.model.odata.ODataModel(sURI, {
		json: bJSON,
		useBatch: bUseBatch,
		tokenHandling: false,
		maxDataServiceVersion : "3.0"
	});
	oModel.forceNoCache(true);
	return oModel;
}

function createContextBinding(oModel, sPath, fnChange) {
	var oBinding = oModel.bindContext(sPath);
	if (fnChange) oBinding.attachChange(fnChange);
	oBinding.initialize();
	return oBinding;
}

function createListBinding(oModel, sPath, iSkip, iTop, fnChange) {
	var oBinding = oModel.bindList(sPath);
	oBinding.attachRefresh(function() {
		oBinding.getContexts(iSkip, iTop);
	});
	if (fnChange) oBinding.attachChange(fnChange);
	oBinding.initialize();
	return oBinding;
}

function readTests(bJSON, bUseBatch) {

	QUnit.module("After read, " + (bJSON ? "JSON" : "XML") + ", " + (bUseBatch ? "w/" : "w/o") + " $batch");

	QUnit.test("Context & Context", function(assert) {
		var done = assert.async();
		var bChanged2,
			bChanged3,
			oModel = initModel(sReadURI, bJSON, bUseBatch),
			iRequestCount = 0,
			oBinding1 = createContextBinding(oModel, "/Products(1)");
		createContextBinding(oModel, "/Products(2)", function() {bChanged3 = true;});
		createContextBinding(oModel, "/Products(1)", function() {bChanged2 = true;});
		oModel.attachRequestCompleted(function() {
			iRequestCount++;
			if (iRequestCount == 3) {
				bChanged2 = false;
				bChanged3 = false;
				oBinding1.refresh();
			}
			if (iRequestCount == 4) {
				assert.ok(!bChanged2, "No change event on same entity (not needed for context binding)");
				assert.ok(!bChanged3, "No change event on different entity");
				done();
			}
		});
	});

	QUnit.test("Context & List, Context refreshes", function(assert) {
		var done = assert.async();
		var bChanged2,
			bChanged3,
			bChanged4,
			oModel = initModel(sReadURI, bJSON, bUseBatch),
			iRequestCount = 0,
			oBinding1 = createContextBinding(oModel, "/Products(1)");
		createListBinding(oModel, "/Suppliers", 0, 3, function() {bChanged4 = true;});
		createListBinding(oModel, "/Products", 4, 3, function() {bChanged3 = true;});
		createListBinding(oModel, "/Products", 0, 3, function() {bChanged2 = true;});
		oModel.attachRequestCompleted(function() {
			iRequestCount++;
			if (iRequestCount == 4) {
				bChanged2 = false;
				bChanged3 = false;
				bChanged4 = false;
				oBinding1.refresh();
			}
			if (iRequestCount == 5) {
				assert.ok(bChanged2, "ListBinding with contained entity must fire Change event");
				assert.ok(!bChanged3, "No change event on ListBinding with different subset");
				assert.ok(!bChanged4, "No change event on ListBinding on different collection");
				done();
			}
		});
	});

	QUnit.test("Context & List, List refreshes", function(assert) {
		var done = assert.async();
		var bChanged2,
			bChanged3,
			bChanged4,
			oModel = initModel(sReadURI, bJSON, bUseBatch),
			iRequestCount = 0,
			oBinding1 = createListBinding(oModel, "/Products", 0, 3);
		createContextBinding(oModel, "/Suppliers(1)", function() {bChanged4 = true;});
		createContextBinding(oModel, "/Products(5)", function() {bChanged3 = true;});
		createContextBinding(oModel, "/Products(1)", function() {bChanged2 = true;});
		oModel.attachRequestCompleted(function() {
			iRequestCount++;
			if (iRequestCount == 4) {
				bChanged2 = false;
				bChanged3 = false;
				bChanged4 = false;
				oBinding1.refresh();
			}
			if (iRequestCount == 5) {
				assert.ok(!bChanged2, "No change event on same entity (not needed for context binding)");
				assert.ok(!bChanged3, "No change event on not contained entity");
				assert.ok(!bChanged4, "No change event on unrelated entity from different collection");
				done();
			}
		});
	});

	QUnit.test("List & List", function(assert) {
		var done = assert.async();
		var bChanged2,
			bChanged3,
			bChanged4,
			oModel = initModel(sReadURI, bJSON, bUseBatch),
			iRequestCount = 0,
			oBinding1 = createListBinding(oModel, "/Products", 0, 3);
		createListBinding(oModel, "/Suppliers", 0, 3, function() {bChanged4 = true;});
		createListBinding(oModel, "/Products", 4, 3, function() {bChanged3 = true;});
		createListBinding(oModel, "/Products", 2, 3, function() {bChanged2 = true;});
		oModel.attachRequestCompleted(function() {
			iRequestCount++;
			if (iRequestCount == 4) {
				bChanged2 = false;
				bChanged3 = false;
				bChanged4 = false;
				oBinding1.refresh();
			}
			if (iRequestCount == 5) {
				assert.ok(bChanged2, "ListBinding with intersecting entities must fire Change event");
				assert.ok(!bChanged3, "No change event if there are not shared entities");
				assert.ok(!bChanged4, "No change event if bound to unrelated collection");
				done();
			}
		});
	});
}

readTests(true, true);
readTests(true, false);
readTests(false, true);
readTests(false, false);

QUnit.module("After write");

QUnit.test("Create", function(assert) {
	var done = assert.async();
	var bChanged1,
		bChanged2,
		oModel = initModel(sWriteURI),
		iRequestCount = 0;
	createListBinding(oModel, "/Suppliers", 0, 3, function() {bChanged2 = true;});
	createListBinding(oModel, "/Products", 0, 3, function() {bChanged1 = true;});
	oModel.attachRequestCompleted(function() {
		iRequestCount++;
		if (iRequestCount == 2) {
			bChanged1 = false;
			bChanged2 = false;
			oModel.create("/Products", {
				__metadata: {type: "ODataDemo.Product"},
				ID: "1",
				Rating: 5,
				Price: 12.75,
				ReleaseDate: new Date()
			}, {
				success: function() {

				}
			});
		}
		if (iRequestCount == 3) {
			assert.ok(bChanged1, "ListBinding with contained entity must refresh");
			assert.ok(!bChanged2, "No change event if bound to unrelated collection");
			done();
		}
	});
});