import React, { Component } from 'react';
import { Progress } from 'semantic-ui-react';

import './impression.scss';

import happy from '../../assets/img/happy.png';
import sad from '../../assets/img/sad.png';
import angry from '../../assets/img/angry.png';

export default class impression extends Component {
  increment = () =>
    this.setState(prevState => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20
    }));

  render() {
    return (
      <div className="impression">
        <h3 className="impression__heading">How was the course?</h3>
        <div className="impression__rating">
          <div className="impression__expression">
            <img src={happy} alt="" className="impression__emoji" />

            <div className="impression__bar">
              <Progress percent={this.props.happy} indicating />
            </div>
          </div>
          <div className="impression__expression">
            <img src={sad} alt="" className="impression__emoji" />

            <div className="impression__bar">
              <Progress percent={this.props.sad} indicating />
            </div>
          </div>
          <div className="impression__expression">
            <img src={angry} alt="" className="impression__emoji" />

            <div className="impression__bar">
              <Progress percent={this.props.angry} indicating />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
