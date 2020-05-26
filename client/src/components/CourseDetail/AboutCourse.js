"use strict";
exports.__esModule = true;
exports.AboutCourse = void 0;
var React = require("react");
/**
 * Styles
 */
require("./aboutcourse.scss");
// import image from '../../assets/img/avatar.jpg';
exports.AboutCourse = function (_a) {
    var courseName = _a.courseName, profName = _a.profName, description = _a.description;
    return (<div className='aboutcourse'>
    <div className='aboutcourse__left'>
      <h3 className='aboutcourse__left--title'>{courseName}</h3>
      <div className='aboutcourse__left--prof'>
        
        <h5 className='aboutcourse__left--prof--name'>{profName}</h5>
      </div>
    </div>
    <div className='aboutcourse__right'>
      <p className='aboutcourse__right--description'>{description}</p>
    </div>
  </div>);
};
