
/*!
 * ${copyright}
 */

sap.ui.define([
], function () {
	"use strict";

	return {
		/**
		 * data exchange
		 */
		REQUEST_ALL_CONTROLS_DATA: "REQUEST_ALL_CONTROLS_DATA",
		RECEIVE_ALL_CONTROLS_DATA: "RECEIVE_ALL_CONTROL_DATA",

		REQUEST_CONTROL_DATA: "REQUEST_CONTROL_DATA",
		RECEIVE_CONTROL_DATA: "RECEIVE_CONTROL_DATA",

		REQUEST_CODE_SNIPPET: "REQUEST_CODE_SNIPPET",
		RECEIVE_CODE_SNIPPET: "RECEIVE_CODE_SNIPPET",

		SET_DIALECT: "SET_DIALECT",
		DIALECT_CHANGED: "DIALECT_CHANGED",

		/**
		 * interactions
		 */
		HIGHLIGHT_CONTROL: "HIGHLIGHT_CONTROL",
		SELECT_CONTROL_IN_TREE: "SELECT_CONTROL_IN_TREE",
		SHOW_CONTEXT: "SHOW_CONTEXT",

		CONTEXT_MENU_HIGHLIGHT: " CONTEXT_MENU_HIGHLIGHT",
		CONTEXT_MENU_PRESS: "CONTEXT_MENU_PRESS",
		CONTEXT_MENU_ENTER_TEXT: "CONTEXT_MENU_ENTER_TEXT",
		/*
		 * recorder frame events
		 */
		HIDE_IFRAME: "HIDE_IFRAME",
		SHOW_IFRAME: "SHOW_IFRAME",
		RESIZE_IFRAME_DOWN: "RESIZE_IFRAME_DOWN",
		RESIZE_IFRAME_UP: "RESIZE_IFRAME_UP",
		OPEN_NEW_WINDOW: "OPEN_NEW_WINDOW",
		CLOSE_IFRAME: "CLOSE_IFRAME",
		DOCK_IFRAME: "DOCK_IFRAME"
	};

});
