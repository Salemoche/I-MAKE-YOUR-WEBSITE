import React from 'react';

const ServicePackage = (props) => {
  return (
    <li>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <hr />
    </li>
  )
}

export default ServicePackage;
