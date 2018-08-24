import React from 'react';
import { Link } from 'react-router-dom'

const ShowreelItem = (props) => {
  return (
    <div className="showreel__item">
      <Link to={`en/work/${props.name}`}>
        <img src={props.image} />
        <h5> {props.name} </h5>
      </Link>
    </div>
  )
}

export default ShowreelItem;
