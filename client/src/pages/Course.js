import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Left from '../components/left';
import Right from '../components/right';
import Footer from '../components/footer';

export default class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      professor: '',
      description: '',
      happy: 0,
      sad: 0,
      angry: 0,
      everydayStudy: 0,
      midtermStudy: 0,
      finalStudy: 0
    };
    this.fetchCourse = this.fetchCourse.bind(this);
  }

  fetchCourse = async () => {
    const res = await axios.get(`/courses/${this.props.match.params.id}`);
    const {
      name,
      professor,
      description,
      happy,
      sad,
      angry,
      everydayStudy,
      midtermStudy,
      finalStudy
    } = res.data.course;
    this.setState({
      name,
      professor,
      description,
      happy,
      sad,
      angry,
      everydayStudy,
      midtermStudy,
      finalStudy
    });
  };

  componentDidMount() {
    console.log(this.props.history);
    this.fetchCourse();
  }
  render() {
    return (
      <div>
        <Navbar />
        <Container>
          <Left
            name={this.state.name}
            professor={this.state.professor}
            description={this.state.description}
            happy={this.state.happy}
            sad={this.state.sad}
            angry={this.state.angry}
          />
          <Right
            everydayStudy={this.state.everydayStudy}
            midtermStudy={this.state.midtermStudy}
            finalStudy={this.state.finalStudy}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  margin: 8rem;
`;

// return (
//   <div>
//     <h3>{this.state.name}</h3>
//     <p>{this.state.professor}</p>
//     <p>{this.state.description}</p>
//     <Link to="/courses">Go back</Link>
//   </div>
// );
