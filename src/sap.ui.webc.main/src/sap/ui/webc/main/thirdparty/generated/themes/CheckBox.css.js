sap.ui.define(['sap/ui/webc/common/thirdparty/base/asset-registries/Themes', 'sap/ui/webc/common/thirdparty/theming/generated/themes/sap_fiori_3/parameters-bundle.css', './sap_fiori_3/parameters-bundle.css'], function (Themes, defaultThemeBase, parametersBundle_css) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e['default'] : e; }

	var defaultThemeBase__default = /*#__PURE__*/_interopDefaultLegacy(defaultThemeBase);

	Themes.registerThemePropertiesLoader("@ui5/webcomponents-theming", "sap_fiori_3", () => defaultThemeBase__default);
	Themes.registerThemePropertiesLoader("@ui5/webcomponents", "sap_fiori_3", () => parametersBundle_css);
	var checkboxCss = {packageName:"@ui5/webcomponents",fileName:"themes/CheckBox.css",content:".ui5-hidden-text{position:absolute;clip:rect(1px,1px,1px,1px);user-select:none;left:-1000px;top:-1000px;pointer-events:none;font-size:0}:host{-webkit-tap-highlight-color:rgba(0,0,0,0)}:host(:not([hidden])){display:inline-block}:host{overflow:hidden;max-width:100%;outline:none;border-radius:var(--_ui5_checkbox_border_radius);transition:var(--_ui5_checkbox_transition);cursor:pointer}:host([disabled]){cursor:default}:host([disabled]) .ui5-checkbox-root{opacity:.5}:host([disabled]) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_disabled_border_color)}:host([disabled]) .ui5-checkbox-label{color:var(--_ui5_checkbox_disabled_label_color)}:host([readonly]:not([value-state=Warning]):not([value-state=Error])) .ui5-checkbox-inner{background:var(--sapField_ReadOnly_Background);border:var(--_ui5_checkbox_inner_readonly_border);color:var(--sapContent_NonInteractiveIconColor)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root{min-height:auto;box-sizing:border-box;align-items:flex-start;padding-top:var(--_ui5_checkbox_root_side_padding);padding-bottom:var(--_ui5_checkbox_root_side_padding)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-inner,:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-label{margin-top:var(--_ui5_checkbox_wrapped_content_margin_top)}:host([wrapping-type=Normal][text]) .ui5-checkbox-root .ui5-checkbox-label{word-break:break-all;align-self:center}:host([wrapping-type=Normal]) .ui5-checkbox-root:focus:before{bottom:var(--_ui5_checkbox_wrapped_focus_left_top_bottom_position)}:host([value-state=Error]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover,:host([value-state=Error]) .ui5-checkbox-inner{background:var(--sapField_InvalidBackground);border:var(--_ui5_checkbox_inner_error_border);color:var(--sapField_InvalidColor)}:host([value-state=Error]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover{box-shadow:var(--_ui5_checkbox_inner_error_box_shadow);background:var(--_ui5_checkbox_inner_error_background_hover)}:host([value-state=Warning]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover,:host([value-state=Warning]) .ui5-checkbox-inner{background:var(--sapField_WarningBackground);border:var(--_ui5_checkbox_inner_warning_border);color:var(--sapField_WarningColor)}:host([value-state=Warning]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover{box-shadow:var(--_ui5_checkbox_inner_warning_box_shadow);background:var(--_ui5_checkbox_inner_warning_background_hover)}:host([value-state=Information]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover,:host([value-state=Information]) .ui5-checkbox-inner{background:var(--sapField_InformationBackground);border:var(--_ui5_checkbox_inner_information_border)}:host([value-state=Information]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover{box-shadow:var(--_ui5_checkbox_inner_information_box_shadow);background:var(--_ui5_checkbox_inner_information_background_hover)}:host([value-state=Success]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover,:host([value-state=Success]) .ui5-checkbox-inner{background:var(--sapField_SuccessBackground);border:var(--_ui5_checkbox_inner_success_border);color:var(--sapField_SuccessColor)}:host([value-state=Success]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover{box-shadow:var(--_ui5_checkbox_inner_success_box_shadow);background:var(--_ui5_checkbox_inner_success_background_hover)}:host(:not([value-state])) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover,:host([value-state=None]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover{box-shadow:var(--_ui5_checkbox_inner_default_box_shadow)}:host([value-state=Warning]) .ui5-checkbox-icon,:host([value-state=Warning][indeterminate]) .ui5-checkbox-inner:after{color:var(--_ui5_checkbox_checkmark_warning_color)}:host([text]) .ui5-checkbox-root{padding-right:0}:host([text]) .ui5-checkbox-root:focus:before{right:0}.ui5-checkbox-root{position:relative;display:inline-flex;align-items:center;width:100%;min-height:var(--_ui5_checkbox_width_height);min-width:var(--_ui5_checkbox_width_height);padding:0 var(--_ui5_checkbox_wrapper_padding);outline:none;transition:var(--_ui5_checkbox_transition);border:var(--_ui5_checkbox_default_focus_border);border-radius:var(--_ui5_checkbox_border_radius);box-sizing:border-box}.ui5-checkbox-root:after{content:\"\";min-height:inherit;font-size:0}.ui5-checkbox-root:focus:before{display:var(--_ui5_checkbox_focus_outline_display);content:\"\";position:absolute;top:var(--_ui5_checkbox_focus_position);left:var(--_ui5_checkbox_focus_position);right:var(--_ui5_checkbox_focus_position);bottom:var(--_ui5_checkbox_focus_position);border:var(--_ui5_checkbox_focus_outline);border-radius:var(--_ui5_checkbox_focus_border_radius)}:host .ui5-checkbox-root:focus{border:var(--_ui5_checkbox_focus_border);border-radius:.5rem}:host(:hover:not([disabled])){background:var(--_ui5_checkbox_outer_hover_background);box-shadow:var(--_ui5_checkbox_box_shadow)}.ui5-checkbox--hoverable .ui5-checkbox-label:hover{color:var(--_ui5_checkbox_label_color)}:host(:not([active]):not([checked]):not([value-state])) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover,:host(:not([active]):not([checked])[value-state=None]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover{background:var(--_ui5_checkbox_hover_background);border-color:var(--_ui5_checkbox_inner_hover_border_color)}:host(:not([active])[checked]:not([value-state])) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover,:host(:not([active])[checked][value-state=None]) .ui5-checkbox--hoverable .ui5-checkbox-inner:hover{background:var(--_ui5_checkbox_hover_background);border-color:var(--_ui5_checkbox_inner_hover_checked_border_color)}:host([checked]:not([value-state])) .ui5-checkbox-inner,:host([checked][value-state=None]) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_selected_border_color)}:host([active]:not([checked]):not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active]:not([checked])[value-state=None]:not([disabled])) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_active_border_color);background-color:var(--_ui5_checkbox_active_background)}:host([active][checked]:not([value-state]):not([disabled])) .ui5-checkbox-inner,:host([active][checked][value-state=None]:not([disabled])) .ui5-checkbox-inner{border-color:var(--_ui5_checkbox_inner_selected_border_color)}.ui5-checkbox-inner{min-width:var(--_ui5_checkbox_inner_width_height);max-width:var(--_ui5_checkbox_inner_width_height);height:var(--_ui5_checkbox_inner_width_height);max-height:var(--_ui5_checkbox_inner_width_height);border:var(--_ui5_checkbox_inner_border);border-radius:var(--_ui5_checkbox_inner_border_radius);background:var(--_ui5_checkbox_inner_background);color:var(--_ui5_checkbox_checkmark_color);box-sizing:border-box;position:relative;cursor:inherit}:host([indeterminate][checked]) .ui5-checkbox-inner:after{content:\"\";background-color:currentColor;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:var(--_ui5_checkbox_partially_icon_size);height:var(--_ui5_checkbox_partially_icon_size)}.ui5-checkbox-inner input{-webkit-appearance:none;visibility:hidden;width:0;left:0;position:absolute;font-size:inherit}.ui5-checkbox-root .ui5-checkbox-label{margin-left:var(--_ui5_checkbox_label_offset_left);margin-right:var(--_ui5_checkbox_label_offset_right);cursor:inherit;text-overflow:ellipsis;overflow:hidden;pointer-events:none;user-select:none;-ms-user-select:none;-webkit-user-select:none;color:var(--_ui5_checkbox_label_color)}.ui5-checkbox-icon{width:var(--_ui5_checkbox_icon_size);height:var(--_ui5_checkbox_icon_size);color:currentColor;cursor:inherit;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}:host([text]) [dir=rtl].ui5-checkbox-root{padding-left:0;padding-right:var(--_ui5_checkbox_wrapper_padding)}:host([text]) [dir=rtl].ui5-checkbox-root:focus:before{left:0;right:var(--_ui5_checkbox_focus_position)}:host([text]) [dir=rtl].ui5-checkbox-root .ui5-checkbox-label{margin-left:0;margin-right:var(--_ui5_checkbox_compact_wrapper_padding)}"};

	return checkboxCss;

});
