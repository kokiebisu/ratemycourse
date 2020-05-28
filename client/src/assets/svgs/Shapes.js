import * as React from 'react';

export const TopShape = (props) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
      <path
        fill={props.color}
        fill-opacity='1'
        d='M0,288L48,266.7C96,245,192,203,288,202.7C384,203,480,245,576,224C672,203,768,117,864,90.7C960,64,1056,96,1152,122.7C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'></path>
    </svg>
  );
};
