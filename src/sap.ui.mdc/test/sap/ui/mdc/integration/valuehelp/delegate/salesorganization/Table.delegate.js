/*!
 * ${copyright}
 */

sap.ui.define([
	"./TableDelegateUtils",
	"sap/ui/mdc/TableDelegate",
	"sap/ui/mdc/table/Column",
	"sap/ui/mdc/util/FilterUtil",
	"sap/ui/model/Filter",
	"sap/ui/core/Core"
], function(
	TableDelegateUtils,
	TableDelegate,
	Column,
	FilterUtil,
	Filter,
	Core
) {
	"use strict";

	var TestTableDelegate = Object.assign({}, TableDelegate);

	TestTableDelegate.fetchProperties = function (oTable) {
		return Promise.resolve(['key', 'text', 'salesOrganization', 'division'].map(function (sProp) {
			return {
				caseSensitive: false,
				filterable: true,
				groupable: false,
				key: sProp === "key",
				label: sProp,
				maxConditions: -1,
				name: sProp,
				path: sProp,
				sortable: true,
				text: undefined,
				dataType: "String",
				unit: undefined
			};
		}));
	};

	TestTableDelegate.addItem = function(sPropertyName, oTable, mPropertyBag) {
		return TableDelegateUtils.createColumn(oTable, sPropertyName);
	};

	TestTableDelegate.updateBindingInfo = function(oMDCTable, oBindingInfo) {
		TableDelegate.updateBindingInfo.apply(this, arguments);
		var oMetadataInfo = oMDCTable.getPayload();
		oBindingInfo.path = oBindingInfo.path || oMetadataInfo.collectionPath || "/" + oMetadataInfo.collectionName;
		oBindingInfo.model = oBindingInfo.model || oMetadataInfo.model;

		var oFilter = Core.byId(oMDCTable.getFilter());
		var bFilterEnabled = oMDCTable.isFilteringEnabled();
		var aFilters = [];
		var oDataStateIndicator = oMDCTable.getDataStateIndicator();

		if (bFilterEnabled) {
			var aTableProperties = oMDCTable.getPropertyHelper().getProperties();
			var oInnerFilterInfo = FilterUtil.getFilterInfo(TestTableDelegate.getTypeMap(), oMDCTable.getConditions(), aTableProperties);

			if (oInnerFilterInfo.filters) {
				aFilters.push(oInnerFilterInfo.filters);
			}
		}

		if (oFilter) {
			var mConditions = oFilter.getConditions();

			if (mConditions) {
				var aPropertiesMetadata = oFilter.getPropertyInfoSet ? oFilter.getPropertyInfoSet() : null;
				var oFilterInfo = FilterUtil.getFilterInfo(TestTableDelegate.getTypeMap(), mConditions, aPropertiesMetadata);

				if (oFilterInfo.filters) {
					aFilters.push(oFilterInfo.filters);
				}
			}
		}

		if (!oDataStateIndicator || !oDataStateIndicator.isFiltering()) {
			oBindingInfo.filters = new Filter(aFilters, true);
		}
	};

	return TestTableDelegate;
});