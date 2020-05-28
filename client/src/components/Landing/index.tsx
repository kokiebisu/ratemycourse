import * as React from 'react';

// Components
import { Header } from './header';

// Svg
import { TopShape } from '../../assets/svgs/Shapes';

export const Landing: React.FC<{}> = () => {
  return (
    <>
      <div className='w-screen h-auto'>
        <TopShape color='#414381' />
      </div>
      <div style={{ position: 'absolute', top: 0, width: '100vw' }}>
        <Header />
      </div>
    </>
  );
};
