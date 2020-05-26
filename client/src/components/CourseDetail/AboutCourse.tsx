import * as React from 'react';

/**
 * Styles
 */
import './aboutcourse.scss';

/**
 * Interfaces
 */
interface Props {
  courseName: string;
  profName: string;
  description: string;
}

// import image from '../../assets/img/avatar.jpg';

export const AboutCourse: React.FC<Props> = ({
  courseName,
  profName,
  description,
}) => (
  <div className='aboutcourse'>
    <div className='aboutcourse__left'>
      <h3 className='aboutcourse__left--title'>{courseName}</h3>
      <div className='aboutcourse__left--prof'>
        {/* <img
          border="1px"
          src={image}
          alt=""
          className="aboutcourse__left--prof--image"
        /> */}
        <h5 className='aboutcourse__left--prof--name'>{profName}</h5>
      </div>
    </div>
    <div className='aboutcourse__right'>
      <p className='aboutcourse__right--description'>{description}</p>
    </div>
  </div>
);
