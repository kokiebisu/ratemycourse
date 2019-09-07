import React, { Component } from 'react';
import axios from 'axios'

export default class Course extends Component {
    constructor(props) {
        super(props);
        this.state = {
            course = {}
        }

    }

    componentDidMount() {

    }
  render() {
    return <div>This is the Course Page</div>;
  }
}
