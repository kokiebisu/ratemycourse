import React, { useState } from 'react';
import './header.scss';
import AutoCompleteText from '../AutoCompleteText';

export const HeaderSection: React.FC<{}> = () => {
  const [items, setItems] = useState([
    'Object Oriented',
    'Relational Database',
  ]);

  return (
    <>
      <section className='header__container'>
        <div className='headerboard__container'>
          <div className='headerboard'>
            <h3 className='headerboard__heading'>
              Learn about the course. <br />
              Don't waste your time.
            </h3>
          </div>
        </div>
      </section>
    </>
  );
};
