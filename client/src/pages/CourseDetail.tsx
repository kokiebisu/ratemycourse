import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import Left from '../components/left';
import Right from '../components/right';
import Footer from '../components/footer';

// Hooks
import { useFetch, CourseDetailType, CourseType } from '../hooks/useFetch';

export const CourseDetail: React.FC<{}> = () => {
  const { id } = useParams();

  const [course, setCourse] = useState<CourseDetailType | CourseType[]>();

  const response = useFetch(`/courses/${id}`);

  setCourse(response);

  const tempData = {
    name: 'Object',
    professor: 'pro',
    description: 'description',
    sad: 0,
    angry: 0,
    happy: 0,
  };

  return (
    <div>
      <Navbar />
      <div className=''>
        <Left {...tempData} />
        <Right {...tempData} />
      </div>
      <Footer />
    </div>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: 5fr 3fr;
  margin: 8rem;
`;
