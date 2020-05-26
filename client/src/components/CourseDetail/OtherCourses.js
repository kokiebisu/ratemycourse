"use strict";
exports.__esModule = true;
exports.OtherCourses = void 0;
var React = require("react");
/**
 * Styles
 */
require("./othercourses.scss");
/**
 * Components
 */
var Course_1 = require("./Course");
exports.OtherCourses = function () { return (<div className='othercourses'>
    <h3 className='othercourses__heading'>Other Courses</h3>
    <div className='othercourses__courses'>
      <Course_1.Course courseName='Relational Database'/>
      <Course_1.Course courseName='Computer Architecture'/>
      <Course_1.Course courseName='Discrete Mathematics'/>
    </div>
    <a href='' className='othercourses__find'>
      More
    </a>
  </div>); };
