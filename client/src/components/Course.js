import React from 'react';

export default function Course(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.professor}</p>
      <p>{props.description}</p>
    </div>
  );
}
