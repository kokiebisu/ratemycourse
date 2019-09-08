import React from 'react';

import './card.scss';

export default props => (
  <div className="card">
    <img className="card__img" src={props.imgURL} alt={props.cardName} />
    <h3 className="card__heading">{props.title}</h3>
    <p className="card__text">{props.description}</p>
  </div>
);
