import React from 'react';

import QuestionAnswers from '../questionanswer';
import OtherCourses from '../othercourses';

import './right.scss';

export default props => (
  <div className="right">
    <QuestionAnswers
      everydayStudy={props.everydayStudy}
      midtermStudy={props.midtermStudy}
      finalStudy={props.finalStudy}
    />
    <OtherCourses />
  </div>
);
