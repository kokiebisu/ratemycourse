import React from 'react';
import Wave from 'react-wavify';
import './cando.scss';

// import Card from '../card';
// import faq from '../../assets/img/faq.svg';
// import growth from '../../assets/img/growth.svg';
// import research from '../../assets/img/research.svg';

export const CandoSection: React.FC<{}> = () => {
  return (
    <section className='cando__container'>
      <Wave fill='#ffffff' />
      <div className='cando__heading'>Courses</div>
      <div className='cando__cards'>
        {/* <Card
          imgURL={research}
          title='Find'
          description='Check the reviews from students who have already taken the course'
        />
        <Card
          imgURL={growth}
          title='Contribute'
          description='Check the reviews from students who have already taken the course'
        />
        <Card
          imgURL={faq}
          title='Help'
          description='Check the reviews from students who have already taken the course'
        /> */}
      </div>
    </section>
  );
};
