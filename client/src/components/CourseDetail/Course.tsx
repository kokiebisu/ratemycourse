import React from 'react';

/**
 * Styles
 */
import './course.scss';

// import image from '../../assets/img/avatar.jpg';

interface Props {
  courseName: string;
}

export const Course: React.FC<Props> = ({ courseName }) => (
  <div className='course-card'>
    <h3 className='course-card__title'>{courseName}</h3>
    {/* <img border="1px" src={image} alt="" className="course-card__image" /> */}
  </div>
);
