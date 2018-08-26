import $ from "jquery";
import { indentation } from '../scripts/script'
import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const Package = (props) => {

  return (
    <div className="package">
      <div className="package__header">
        <h3>{props.name}</h3>
        {
          <div className="package__header__image">
            <svg xmlns="http://www.w3.org/2000/svg" width="59" height="123">
              <path id="package__header__image-1" className="hero__fill" fill="none" d="M30.6.6L.7 37.2v61.5L18 122.5 59 97V24.4L30.7.6zm.2 4.1L42.9 36l-24 9.5L30.7 4.7zm2 .2l23.8 20-12.1 10L32.8 5zM3 37.3L28.5 6 17 45.5 3 37.3zm42 48.6v-49l12.1-10.1v68l-12-8.9zm-26.7-3.7V47.5l24.9-9.7v47.5l-24.9-3zm-15.7-43l14 8.2v35.3l-14 13.5v-57zM18.4 84l24 3L19 118.6 18.4 84zM2.9 98.5l13.7-13.3.6 33.1L2.9 98.5zm41.4-10.9l12.1 8.9-34.6 21.4 22.5-30.3z"/>
            </svg>
          </div>
        }
        <h4>{props.price}</h4>
        <h5>excluding service package</h5>
      </div>
      <div className="package__info">
        <p className="package__info__text package__info__text-1">{props.text}</p>
        {
          props.text2 && <p className="package__info__text package__info__text-2">{props.text2}</p>
        }
        {
          props.text3 && <p className="package__info__text package__info__text-3">{props.text3}</p>
        }
        <ul>
          {
            props.bullets.map((bullet) => {

              return (
                <li className="package__info__bullet">
                  <div className="package__info__bullet__style hero__background "></div>
                  {bullet}
                </li>
              )
            })
          }
          <li className="package__info__button">
            <Link to="/en/contact" class="hero__color">
              <Button name={`choose ${props.name} `} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default Package;
