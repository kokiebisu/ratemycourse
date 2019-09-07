import React, { Component } from 'react';
import axios from 'axios';
import Course from '../components/Course';
import ReactLoading from 'react-loading';

export default class Courses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      loading: true
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
      courses,
      loading: false
    });
  };

  componentDidMount() {
    this.fetchCourse();
  }

  render() {
    return (
      <div>
        <h3>This is the Courses page</h3>
        {this.state.loading ? (
          <ReactLoading type="balls" color="#000000" height={100} width={100} />
        ) : (
          this.state.courses.map((course, index) => {
            return (
              <Course
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
  }
}
