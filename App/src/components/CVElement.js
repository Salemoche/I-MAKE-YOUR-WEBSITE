import React from 'react';

const CVElement = (props) => {
  return (
    <React.Fragment>
      <li>
        <h4>{props.startTime} {props.endTime && `- ${props.endTime}`}</h4>
        <h4>{props.description}</h4>
        <h4>{'at '} <a target="_blank" rel="noopener noreferrer" className="hero__color" href={props.link}>{props.place}</a></h4>
        <hr/>
      </li>
    </React.Fragment>

  )
}


export default CVElement;
