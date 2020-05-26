import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseDetail from '../components/Course';
import ReactLoading from 'react-loading';

import { useFetch, CourseDetailType, CourseType } from '../hooks/useFetch';

export const Courses: React.FC<{}> = () => {
  const [courses, setCourses] = useState<CourseDetailType | CourseType[]>();
  const fetchedCourses = useFetch('http://localhost:5000/courses');

  setCourses(fetchedCourses);

  return (
    <div>
      <h3>This is the Courses page</h3>
      {this.state.loading ? (
        <ReactLoading type='balls' color='#000000' height={100} width={100} />
      ) : (
        this.state.courses.map((course, index) => {
          return (
            <CourseDetail
              key={index}
              id={course.id}
              name={course.name}
              professor={course.professor}
              description={course.description}
            />
          );
        })
      )}
    </div>
  );
};
