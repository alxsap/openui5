/*!
 * ${copyright}
 */
sap.ui.define([
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator'
], function (
	Filter,
	FilterOperator
) {
	"use strict";

	const _getSearchKeys = (oValueHelp) => {
		return oValueHelp?.getPayload()?.['searchKeys'];
	};

	const _parseSearchKeys = (vSearchPaths, sControlId) => {
		if (typeof vSearchPaths === "string") { // 'a,b,c'
			return vSearchPaths && vSearchPaths.split(",");
		} else if (Array.isArray(vSearchPaths)) { // [a,b,c]
			return vSearchPaths.length && vSearchPaths;
		}
		return vSearchPaths && sControlId && Object.keys(vSearchPaths).reduce((vResult, sLocalId) => { // {id1: 'a,b,c', id2: [a,b,c]} // We allow our search paths to be content-specific, if necessary
			return sControlId.endsWith(sLocalId) && _parseSearchKeys(vSearchPaths[sLocalId], sControlId) || vResult;
		}, undefined);
	};

	const _extractSearchKeys = (oValueHelp, oContent) => {
		const vSearchKeys = _getSearchKeys(oValueHelp);
		return vSearchKeys && _parseSearchKeys(vSearchKeys, oContent?.getId());
	};

	const _combineFilters = function (aFilters, bAnd) {
		if (aFilters) {
			if (aFilters.length > 1) {
				return [new Filter(aFilters, bAnd)];
			}
			return aFilters;
		}
		return [];
	};

	const _createSearchFilters = (aSearchPaths, sSearch) => {
		return _combineFilters(aSearchPaths.map((sPath) => new Filter({
			path: sPath,
			operator: FilterOperator.Contains,
			value1: sSearch
		})), false);
	};


	/**
	 * Exemplatory, payload based alternative to the deprecated filterFields property of FilterableListContents.
	 *
	 * Simple formats: {searchKeys: 'a,b,c'}, {searchKeys: [a,b,c]}
	 * Complex format (per Content): {searchKeys: {contentIdA: 'a,b,c', contentIdB: [a,b,c]}}
	 * Falsy strings/Empty arrays can be used to disable the search similar to the filterFields mechanic: {searchKeys: ''}, {searchKeys: []}, {searchKeys: {contentIdA: '', contentIdB: [a,b,c]}
	 */
	const PayloadSearchKeys = {
		getFilters: function (oValueHelp, oContent) {
			const sSearch = oContent?.getSearch();
			if (sSearch) {
				const sSearchPaths = _extractSearchKeys(oValueHelp, oContent);
				if (sSearchPaths) {
					return _createSearchFilters(sSearchPaths, sSearch);
				}
			}
			return [];
		},
		inUse: function (oValueHelp) {
			return typeof _getSearchKeys(oValueHelp) !== 'undefined';
		},
		isEnabled: function (oValueHelp, oContent) {
			return !!_extractSearchKeys(oValueHelp, oContent);
		},
		combineFilters: _combineFilters
	};

	return PayloadSearchKeys;
});