import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Left from '../components/left';
import Right from '../components/right';
import Footer from '../components/footer';

// Hooks
import { useFetch } from '../hooks/useFetch';

export const CourseDetail: React.FC<{}> = () => {
  const { id } = useParams();

  const [course, setCourse] = useState<any>();

  const response = useFetch(`/courses/${id}`);

  useEffect(() => {
    const tempData = {
      name: 'Object',
      professor: 'pro',
      description: 'description',
      sad: 0,
      angry: 0,
      happy: 0,
    };

    setCourse(tempData);
  }, []);

  return (
    <div>
      <Navbar />
      <div className=''>
        <Left {...course} />
        <Right {...course} />
      </div>
      <Footer />
    </div>
  );
};
