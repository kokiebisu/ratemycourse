import React from 'react';

import './aboutcourse.scss';

import image from '../../assets/img/avatar.jpg';

export default props => (
  <div className="aboutcourse">
    <div className="aboutcourse__left">
      <h3 className="aboutcourse__left--title">{props.courseName}</h3>
      <div className="aboutcourse__left--prof">
        <img
          border="1px"
          src={image}
          alt=""
          className="aboutcourse__left--prof--image"
        />
        <h5 className="aboutcourse__left--prof--name">{props.profName}</h5>
      </div>
    </div>
    <div className="aboutcourse__right">
      <p className="aboutcourse__right--description">{props.description}</p>
    </div>
  </div>
);
