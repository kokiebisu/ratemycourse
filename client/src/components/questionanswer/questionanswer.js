import React from 'react';

import './questionanswer.scss';

export default props => (
  <div className="qa">
    <h3 className="qa__answer">{props.answer}</h3>
    <h5 className="qa__question">{props.question}</h5>
  </div>
);
