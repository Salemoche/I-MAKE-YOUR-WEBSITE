import React from 'react';

const ScrollButton = (props) => {

  return (
    <div className={`scroll-button ${props.position}`}
      // onClick={props.history.push(`${props.link}`)}
    >
      <div className='hero__border scroll-button__icon' ></div>
      <p>{props.direction}</p>
      {/* <p>{props.history}</p> */}
    </div>
  )
}

export default ScrollButton;
