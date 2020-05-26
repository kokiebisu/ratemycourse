import * as React from 'react';

/**
 * Styles
 */
import './right.scss';

/**
 * Componetns
 */
import { QuestionAnswer } from './QuestionAnswer';
import { OtherCourses } from './OtherCourses';

/**
 * Interface
 */
interface Props {
  everydayStudy: number;
  midtermStudy: number;
  finalStudy: number;
}

export const Right: React.FC<Props> = ({
  everydayStudy,
  midtermStudy,
  finalStudy,
}) => (
  <div className='right'>
    {/* <QuestionAnswer
      everydayStudy={everydayStudy}
      midtermStudy={midtermStudy}
      finalStudy={finalStudy}
    /> */}
    <OtherCourses />
  </div>
);
