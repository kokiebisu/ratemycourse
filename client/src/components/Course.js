import React from 'react';
import { Link } from 'react-router-dom';

export default function Course(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.professor}</p>
      <p>{props.description}</p>
      <Link to={`/courses/${props.id}`}>Go to this course</Link>
    </div>
  );
}
