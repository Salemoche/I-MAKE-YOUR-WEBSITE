import React from 'react';

const Button = (props) => {

  return (
    <button
      className="button hero__background contrast__color"
    >
      <h6 className="contrast__color">{props.name}</h6>
    </button>
  )
}

export default Button;
