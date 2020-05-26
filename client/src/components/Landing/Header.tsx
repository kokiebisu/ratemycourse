import * as React from 'react';
import { useState } from 'react';

/**
 * Styles
 */
import './header.scss';

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
