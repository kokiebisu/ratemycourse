"use strict";
exports.__esModule = true;
exports.HeaderSection = void 0;
var React = require("react");
var react_1 = require("react");
/**
 * Styles
 */
require("./header.scss");
exports.HeaderSection = function () {
    var _a = react_1.useState([
        'Object Oriented',
        'Relational Database',
    ]), items = _a[0], setItems = _a[1];
    return (<>
      <section className='header__container'>
        <div className='headerboard__container'>
          <div className='headerboard'>
            <h3 className='headerboard__heading'>
              Learn about the course. <br />
              Don't waste your time.
            </h3>
          </div>
        </div>
      </section>
    </>);
};
