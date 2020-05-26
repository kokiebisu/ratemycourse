"use strict";
exports.__esModule = true;
exports.CandoSection = void 0;
var React = require("react");
/**
 * Styles
 */
require("./cando.scss");
/**
 * Components
 */
var react_wavify_1 = require("react-wavify");
// import Card from '../card';
// import faq from '../../assets/img/faq.svg';
// import growth from '../../assets/img/growth.svg';
// import research from '../../assets/img/research.svg';
exports.CandoSection = function () {
    return (<section className='cando__container'>
      <react_wavify_1["default"] fill='#ffffff'/>
      <div className='cando__heading'>Courses</div>
      <div className='cando__cards'>
        
      </div>
    </section>);
};
