"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.CustomWave = void 0;
var React = require("react");
var react_wavify_1 = require("react-wavify");
var styled_components_1 = require("styled-components");
exports.CustomWave = function () {
    return (<StyledWave fill='#569DEC' paused={false} options={{
        height: 10,
        amplitude: 7,
        speed: 0.35,
        points: 15
    }}/>);
};
var StyledWave = styled_components_1["default"](react_wavify_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  transform: rotate(180deg);\n"], ["\n  transform: rotate(180deg);\n"])));
var templateObject_1;
