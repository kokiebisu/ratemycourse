"use strict";
exports.__esModule = true;
exports.AboutSection = void 0;
var React = require("react");
require("./about.scss");
// import image from '../../assets/img/bcit.png';
require("./about.scss");
exports.AboutSection = function () {
    return (<section className='about__container'>
      <div className='about__heading'>About</div>
      <div className='about__cards'>
        
        <h3>
          Built by a student at BCIT. I thought of this idea because I wanted to
          share my experience with classes that I took.
        </h3>
      </div>
    </section>);
};
