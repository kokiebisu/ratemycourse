"use strict";
exports.__esModule = true;
exports.Impression = void 0;
var react_1 = require("react");
// import { Progress } from 'semantic-ui-react';
/**
 * Styles
 */
require("./impression.scss");
/**
 * Images
 */
// import happy from '../../assets/img/happy.png';
// import sad from '../../assets/img/sad.png';
// import angry from '../../assets/img/angry.png';
exports.Impression = function (_a) {
    // const increment = () => {
    //   setState((prevState) => ({
    //     percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    //   }));
    // };
    var happy = _a.happy, sad = _a.sad, angry = _a.angry;
    return (<div className='impression'>
      <h3 className='impression__heading'>How was the course?</h3>
      <div className='impression__rating'>
        <div className='impression__expression'>
          

          <div className='impression__bar'>
            
          </div>
        </div>
        <div className='impression__expression'>
          

          <div className='impression__bar'>
            
          </div>
        </div>
        <div className='impression__expression'>
          

          <div className='impression__bar'>
            
          </div>
        </div>
      </div>
    </div>);
};
