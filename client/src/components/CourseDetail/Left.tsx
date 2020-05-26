import * as React from 'react';

/**
 * Styles
 */
import './left.scss';

/**
 * Components
 */
import { AboutCourse } from './AboutCourse';
import { Impression } from './Impression';
import { Reviews } from './Reviews';

/**
 * Interfaces
 */
interface Props {
  name: string;
  professor: string;
  description: string;
  happy: number;
  sad: number;
  angry: number;
}

export const Left: React.FC<Props> = ({
  name,
  professor,
  description,
  happy,
  sad,
  angry,
}) => (
  <div className='left'>
    <AboutCourse
      courseName={name}
      profName={professor}
      description={description}
    />
    <Impression happy={happy} sad={sad} angry={angry} />
    <Reviews />
  </div>
);
