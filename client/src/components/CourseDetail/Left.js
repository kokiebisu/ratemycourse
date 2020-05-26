"use strict";
exports.__esModule = true;
exports.Left = void 0;
var React = require("react");
/**
 * Styles
 */
require("./left.scss");
/**
 * Components
 */
var AboutCourse_1 = require("./AboutCourse");
var Impression_1 = require("./Impression");
var Reviews_1 = require("./Reviews");
exports.Left = function (_a) {
    var name = _a.name, professor = _a.professor, description = _a.description, happy = _a.happy, sad = _a.sad, angry = _a.angry;
    return (<div className='left'>
    <AboutCourse_1.AboutCourse courseName={name} profName={professor} description={description}/>
    <Impression_1.Impression happy={happy} sad={sad} angry={angry}/>
    <Reviews_1.Reviews />
  </div>);
};
