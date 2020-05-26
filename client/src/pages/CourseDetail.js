"use strict";
exports.__esModule = true;
exports.CourseDetail = void 0;
var React = require("react");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Navbar_1 = require("../components/shared/Navbar");
var Left_1 = require("../components/CourseDetail/Left");
var Right_1 = require("../components/CourseDetail/Right");
var Footer_1 = require("../components/shared/Footer");
// Hooks
var useFetch_1 = require("../hooks/useFetch");
exports.CourseDetail = function () {
    var id = react_router_dom_1.useParams().id;
    var _a = react_1.useState(), course = _a[0], setCourse = _a[1];
    var response = useFetch_1.useFetch("/courses/" + id);
    react_1.useEffect(function () {
        var tempData = {
            name: 'Object',
            professor: 'pro',
            description: 'description',
            sad: 0,
            angry: 0,
            happy: 0
        };
        setCourse(tempData);
    }, []);
    return (<div>
      <Navbar_1.Navbar />
      <div className=''>
        <Left_1.Left {...course}/>
        <Right_1.Right {...course}/>
      </div>
      <Footer_1.Footer />
    </div>);
};
