import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    const res = await axios.get(`/courses/${this.props.match.params.id}`);
    const { name, professor, description } = res.data.course;
    this.setState({
      name,
      professor,
      description
    });
  };

  componentDidMount() {
    console.log(this.props.history);
    this.fetchCourse();
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <p>{this.state.professor}</p>
        <p>{this.state.description}</p>
        <Link to="/courses">Go back</Link>
      </div>
    );
  }
}
