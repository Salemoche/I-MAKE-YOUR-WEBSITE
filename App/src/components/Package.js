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
        { props.name == "START" &&
          <div className="package__header__image">
            <svg xmlns="http://www.w3.org/2000/svg" width="159" height="197" version="1">
              <g fill="none" className="hero__fill" fill-rule="nonzero">
                <path d="M126 139a29 29 0 1 0 0-58 29 29 0 0 0 0 58zm0 4a33 33 0 1 1 0-66 33 33 0 0 1 0 66zM33 62a29 29 0 1 0 0-58 29 29 0 0 0 0 58zm0 4a33 33 0 1 1 0-66 33 33 0 0 1 0 66zM49 193a29 29 0 1 0 0-58 29 29 0 0 0 0 58zm0 4a33 33 0 1 1 0-66 33 33 0 0 1 0 66z"/>
                <path d="M31 18h4v31h-4z"/>
                <path d="M49 32v4H18v-4zM64 163v4H33v-4z"/>
              </g>
            </svg>
          </div>
        }
        {
          props.name == "PREMIUM" &&
            <div className="package__header__image">
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="223" version="1">
                <g fill="none" className="hero__fill" fill-rule="nonzero">
                  <path d="M125 131a20 20 0 1 0 0-40 20 20 0 0 0 0 40zm0 4a24 24 0 1 1 0-48 24 24 0 0 1 0 48z"/>
                  <path d="M85 134c34 58 79 94 101 82 21-12 12-70-21-128C131 30 86-6 64 6 43 19 52 76 85 134zm-3 2C47 76 39 17 62 3c24-14 72 23 106 83 35 60 43 120 20 133-24 14-72-23-106-83z"/>
                  <path d="M125 157c67 0 121-21 121-46 0-24-54-46-121-46S4 87 4 111c0 25 54 46 121 46zm0 4C56 161 0 139 0 111c0-27 56-50 125-50s125 23 125 50c0 28-56 50-125 50z"/>
                  <path d="M165 134c33-58 42-115 21-128-22-12-67 24-101 82-33 58-42 116-21 128 22 12 67-24 101-82zm3 2c-34 60-82 97-106 83-23-13-15-73 20-133 34-60 82-97 106-83 23 14 15 73-20 133z"/>
                </g>
              </svg>
            </div>
        }
        {
          props.name == "EXCLUSIVE" &&
            <div className="package__header__image">
              <svg xmlns="http://www.w3.org/2000/svg" width="226" height="201" version="1">
                <g fill="none" className="hero__fill" fill-rule="nonzero">
                  <path d="M55 52L4 81v58l51 29 50-29V81L55 52zm0-5l54 31v63l-54 31-55-31V78l55-31z"/>
                  <path d="M163 64l-53 17v57l53 17 33-45-33-46zm38 46l-36 50-59-19V79l59-20 36 51zM92 90h4v41h-4zM17 136l2-4 36 21-2 4zM17 86l2 3 36-21-2-3z"/>
                  <path d="M165 64l-4-1 17-46 4 1z"/>
                  <path d="M180 21l-2-4 46-16 2 3zM188 193l-4 2-16-46 3-2zM172 199l-3 2-17-46 4-2z"/>
                </g>
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
