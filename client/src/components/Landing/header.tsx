import * as React from 'react';

export const Header = () => {
  return (
    <div className='mx-auto'>
      <div className='mx-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='bg--primary'>
            <h3 className='font-medium font-2xl color-white'>ratemycourse</h3>
          </div>
          <div className='bg-lightblue'>
            <button className='color-white'>button</button>
          </div>
        </div>
      </div>
    </div>
  );
};
