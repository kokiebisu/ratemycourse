import React, { useState, useEffect } from 'react';
import CourseDetail from '../components/Course';
import ReactLoading from 'react-loading';

import { useFetch } from '../hooks/useFetch';

export const Courses: React.FC<{}> = () => {
  const [courses, setCourses] = useState<any>();
  const data = useFetch('http://localhost:5000/courses');

  useEffect(() => {
    const tempCourseDetail = [
      {
        id: 1,
        name: 'Ob',
        professor: 'pro',
        description: 'decsci',
      },
      {
        id: 2,
        name: 'Ob',
        professor: 'pro',
        description: 'decsci',
      },
    ];

    setCourses(tempCourseDetail);
  }, []);

  return (
    <div>
      <h3>This is the Courses page</h3>
      {courses.map((course, index) => {
        return (
          <CourseDetail
            key={index}
            id={course.id}
            name={course.name}
            professor={course.professor}
            description={course.description}
          />
        );
      })}
    </div>
  );
};
