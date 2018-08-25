import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Step = (props) => {
  return (
    <li className="step">
      <div className="step__icon hero__background">
        <FontAwesomeIcon icon={props.icon} />
      </div>
      <h3>{props.name}</h3>
      <hr/>
      <p>{props.description}</p>
    </li>
  )
}

export default Step;
