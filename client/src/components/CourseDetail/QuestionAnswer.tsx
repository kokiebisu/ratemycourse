import * as React from 'react';

/**
 * Styles
 */
import './questionanswer.scss';

/**
 * Interfaces
 */
interface Props {
  answer: string;
  question: string;
}

export const QuestionAnswer: React.FC<Props> = ({ answer, question }) => (
  <div className='qa'>
    <h3 className='qa__answer'>{answer}</h3>
    <h5 className='qa__question'>{question}</h5>
  </div>
);
