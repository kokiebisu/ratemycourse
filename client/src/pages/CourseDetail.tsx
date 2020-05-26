import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

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

  return (
    <div>
      <Navbar />
      <div className=''>
        <Left
          name={this.state.name}
          professor={this.state.professor}
          description={this.state.description}
          happy={this.state.happy}
          sad={this.state.sad}
          angry={this.state.angry}
        />
        <Right
          everydayStudy={this.state.everydayStudy}
          midtermStudy={this.state.midtermStudy}
          finalStudy={this.state.finalStudy}
        />
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
