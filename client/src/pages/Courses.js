import React, { Component } from 'react';
import axios from 'axios';
import Course from '../components/Course';

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    };
    this.fetchCourse = this.fetchCourse.bind(this);
  }

  fetchCourse = async () => {
    const res = await axios.get('/courses');
    const courses = [];
    res.data.courses.map(course =>
      courses.push({
        id: course._id,
        name: course.name,
        professor: course.professor,
        description: course.description
      })
    );
    this.setState({
      courses
    });
  };

  componentDidMount() {
    this.fetchCourse();
  }
  render() {
    return (
      <div>
        <h3>This is the course page</h3>
        {this.state.courses.map((course, index) => {
          return (
            <Course
              key={index}
              name={course.name}
              professor={course.professor}
              description={course.description}
            />
          );
        })}
      </div>
    );
  }
}
