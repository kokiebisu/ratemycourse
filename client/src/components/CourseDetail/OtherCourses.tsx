import * as React from 'react';

/**
 * Styles
 */
import './othercourses.scss';

/**
 * Components
 */
import { Course } from './Course';

export const OtherCourses: React.FC<{}> = () => (
  <div className='othercourses'>
    <h3 className='othercourses__heading'>Other Courses</h3>
    <div className='othercourses__courses'>
      <Course courseName='Relational Database' />
      <Course courseName='Computer Architecture' />
      <Course courseName='Discrete Mathematics' />
    </div>
    <a href='' className='othercourses__find'>
      More
    </a>
  </div>
);
