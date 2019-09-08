import React from 'react';

import './othercourses.scss';

import Course from '../course-card';

export default () => (
  <div className="othercourses">
    <h3 className="othercourses__heading">Other Courses</h3>
    <div className="othercourses__courses">
      <Course courseName="Relational Database" />
      <Course courseName="Computer Architecture" />
      <Course courseName="Discrete Mathematics" />
    </div>
    <a href="" className="othercourses__find">
      More
    </a>
  </div>
);
