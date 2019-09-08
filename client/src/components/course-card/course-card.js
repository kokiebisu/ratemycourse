import React from 'react';

import './course-card.scss';

import image from '../../assets/img/avatar.jpg';

export default props => (
  <div className="course-card">
    <h3 className="course-card__title">{props.courseName}</h3>
    <img border="1px" src={image} alt="" className="course-card__image" />
  </div>
);
