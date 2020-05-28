import * as React from 'react';

export const Header = () => {
  return (
    <div className='mx-auto'>
      <div className='mx-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='bg--primary'>
            <h3 className='font-medium font-2xl color-white'>ratemycourse</h3>
          </div>
          <div className='hidden md--block bg-lightblue px-7 py-3 rounded-base'>
            <button className='color-white bg-lightblue no-decoration border-none'>
              Add a review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
