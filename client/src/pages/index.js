"use strict";
exports.__esModule = true;
exports.App = void 0;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
// Pages
var Landing_1 = require("./Landing");
var CourseDetail_1 = require("./CourseDetail");
var Login_1 = require("./Login");
exports.App = function () {
    return (<react_router_dom_1.BrowserRouter>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route exact path='/'>
          <Landing_1.Landing />
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='/courses/:id'>
          <CourseDetail_1.CourseDetail />
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path='/login'>
          <Login_1.Login />
        </react_router_dom_1.Route>
      </react_router_dom_1.Switch>
    </react_router_dom_1.BrowserRouter>);
};
