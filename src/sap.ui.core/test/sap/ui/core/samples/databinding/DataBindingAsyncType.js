sap.ui.require([
	"sap/ui/core/Messaging",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/SimpleType",
	"sap/ui/model/type/Float",
	"sap/m/Input"
], function(Messaging, JSONModel, SimpleType, Float, Input) {

	SimpleType.extend("AsyncFloat", {
		constructor: function(oFormatOptions, oConstraints) {
			SimpleType.apply(this, arguments);
			this.oFloat = new Float(oFormatOptions, oConstraints);
		},
		formatValue: function(oValue, sInternalType) {
			var that = this;
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					try {
						resolve(that.oFloat.formatValue(oValue, sInternalType));
					} catch (oException) {
						reject(oException);
					}
				}, 500);
			});
		},
		parseValue: function(oValue, sInternalType) {
			var that = this;
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					try {
						resolve(that.oFloat.parseValue(oValue, sInternalType));
					} catch (oException) {
						reject(oException);
					}
				}, 500);
			});
		},
		validateValue: function(oValue) {
			var that = this;
			return new Promise(function(resolve, reject) {
				setTimeout(function() {
					try {
						that.oFloat.validateValue(oValue);
						resolve(oValue);
					} catch (oException) {
						reject(oException);
					}
				}, 500);
			});
		}
	});
	var model = new JSONModel({
		float: 1.23
	});
	var input = new Input({
		models: model,
		value: {
			path: "/float",
			type: new AsyncFloat({decimals: 2}, {maximum: 5})
		}
	});
	Messaging.registerObject(input, true);
	input.placeAt('content');

});