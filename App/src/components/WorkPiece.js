import $ from "jquery";
import React from 'react';
import ShowreelItem from './ShowreelItem';
import { indentation } from '../scripts/indentation';
import { showreelItems } from './Work';

const urlSegment = window.location.pathname.split("/").pop();

const pieceID = () => {
  for(let i = 0; i< showreelItems.length; i++) {
    if (urlSegment == showreelItems[i].name) {
      return i;
    }
  }
}



const WorkPiece = () => {
  return (
    <div className="page page__work page__work__piece">
      <div className="page__content page__work__content">
        <div className="page__content__background-image">
          <img src={showreelItems[pieceID()].image} />
        </div>
        <div className="page__content__text">
          <h1>{showreelItems[pieceID()].name}</h1>
          <hr />
          <h2>{showreelItems[pieceID()].subtitle}</h2>
          <p>
            {showreelItems[pieceID()].description}
          </p>
        </div>
        <a target="_blank" rel="noopener noreferrer" href={showreelItems[pieceID()].link}>
          <div className="button hero__background page__content__button">
            <h6>Visit Website</h6>
          </div>
        </a>
      </div>
    </div>
  )
}

//
// Indentation
//

// $(document).ready( function () {
//   indentation($('.page__work .page__content__text').children(), -50);
// });

export default WorkPiece;
