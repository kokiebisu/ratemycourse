import * as React from 'react';
import './about.scss';
// import image from '../../assets/img/bcit.png';
import './about.scss';

export const AboutSection: React.FC<{}> = () => {
  return (
    <section className='about__container'>
      <div className='about__heading'>About</div>
      <div className='about__cards'>
        {/* <img src={image} /> */}
        <h3>
          Built by a student at BCIT. I thought of this idea because I wanted to
          share my experience with classes that I took.
        </h3>
      </div>
    </section>
  );
};
