import React from 'react';
// import { Progress } from 'semantic-ui-react';

/**
 * Styles
 */
import './impression.scss';

interface Props {
  happy: number;
  sad: number;
  angry: number;
}

/**
 * Images
 */
// import happy from '../../assets/img/happy.png';
// import sad from '../../assets/img/sad.png';
// import angry from '../../assets/img/angry.png';

export const Impression: React.FC<Props> = ({ happy, sad, angry }) => {
  // const increment = () => {
  //   setState((prevState) => ({
  //     percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
  //   }));
  // };

  return (
    <div className='impression'>
      <h3 className='impression__heading'>How was the course?</h3>
      <div className='impression__rating'>
        <div className='impression__expression'>
          {/* <img src={happy} alt='' className='impression__emoji' /> */}

          <div className='impression__bar'>
            {/* <Progress percent={happy} indicating /> */}
          </div>
        </div>
        <div className='impression__expression'>
          {/* <img src={sad} alt='' className='impression__emoji' /> */}

          <div className='impression__bar'>
            {/* <Progress percent={sad} indicating /> */}
          </div>
        </div>
        <div className='impression__expression'>
          {/* <img src={angry} alt='' className='impression__emoji' /> */}

          <div className='impression__bar'>
            {/* <Progress percent={angry} indicating /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
