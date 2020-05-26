"use strict";
exports.__esModule = true;
exports.Course = void 0;
var react_1 = require("react");
/**
 * Styles
 */
require("./course.scss");
exports.Course = function (_a) {
    var courseName = _a.courseName;
    return (<div className='course-card'>
    <h3 className='course-card__title'>{courseName}</h3>
    
  </div>);
};
