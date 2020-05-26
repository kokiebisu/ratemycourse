"use strict";
exports.__esModule = true;
exports.QuestionAnswer = void 0;
var React = require("react");
/**
 * Styles
 */
require("./questionanswer.scss");
exports.QuestionAnswer = function (_a) {
    var answer = _a.answer, question = _a.question;
    return (<div className='qa'>
    <h3 className='qa__answer'>{answer}</h3>
    <h5 className='qa__question'>{question}</h5>
  </div>);
};
