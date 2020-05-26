"use strict";
exports.__esModule = true;
exports.Right = void 0;
var React = require("react");
/**
 * Styles
 */
require("./right.scss");
var OtherCourses_1 = require("./OtherCourses");
exports.Right = function (_a) {
    var everydayStudy = _a.everydayStudy, midtermStudy = _a.midtermStudy, finalStudy = _a.finalStudy;
    return (<div className='right'>
    
    <OtherCourses_1.OtherCourses />
  </div>);
};
