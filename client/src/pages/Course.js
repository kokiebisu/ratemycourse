import React, { Component } from 'react';
import axios from 'axios';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      professor: '',
      description: ''
    };
    this.fetchCourse = this.fetchCourse.bind(this);
  }

  fetchCourse = async () => {
    const course = await axios.get('/course/:id');
    console.log(course);
  };

  componentDidMount() {
    this.fetchCourse();
  }
  render() {
    return <div>This is the Courses Page</div>;
  }
}
