import React from 'react';

import './questionanswer.scss';
import QuestionAnswer from './questionanswer';

export default props => (
  <div className="qa__container">
    <QuestionAnswer
      answer={`${props.everydayStudy}h`}
      question="How many hours did you study everyday?"
    />
    <QuestionAnswer
      answer={`${props.midtermStudy}h`}
      question="How many hours did you study before midterm?"
    />
    <QuestionAnswer
      answer={`${props.finalStudy}h`}
      question="How many hours did you study before the finals"
    />
  </div>
);
