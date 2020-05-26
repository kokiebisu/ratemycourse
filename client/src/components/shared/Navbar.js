"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Navbar = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
/**
 * Styles
 */
require("./navbar.scss");
/**
 * Components
 */
var CustomWave_1 = require("./CustomWave");
exports.Navbar = function () {
    return (<div className='navbar__container'>
      <CustomWave_1.CustomWave />
      <div className='navbar'>
        <h3>ratemycourse</h3>
        <div className='navbar__login'>
          <StyledLink to='login'>Login</StyledLink>
        </div>
      </div>
    </div>);
};
var StyledLink = styled_components_1["default"](react_router_dom_1.Link)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: white;\n  font-weight: 600;\n  font-size: 2rem;\n\n  &:hover {\n    color: white;\n  }\n"], ["\n  color: white;\n  font-weight: 600;\n  font-size: 2rem;\n\n  &:hover {\n    color: white;\n  }\n"])));
var templateObject_1;
