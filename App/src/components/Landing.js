import React from 'react';
import { changeColor } from '../scripts/script';
import { start } from '../animation/landing';
import { Link } from 'react-router-dom';

// console.log(logo);

class Landing extends React.Component {

  componentWillMount() {
    changeColor();
    start();
  }

  render() {
    return (
      <div className="page page__landing">
      <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" version="1">
        <defs>
          <linearGradient id="linearGradient-1" x1="42%" x2="22%" y1="0%" y2="95%">
            <stop className="brightColor" offset="0%" stop-color="none"/>
            <stop className="darkColor" offset="100%" stop-color="none"/>
          </linearGradient>
        </defs>
        <g id="Home" fill="#000" fill-rule="evenodd">
          <g id="landing">
            {/* <path fill="#FFF" d="M0 0h1440v1024H0z"/> */}
            <Link to="/en/offer">
              <g id="logo" fill="url(#linearGradient-1)" transform="translate(492 469)">
                <path id="I" d="M5 1L0 11l39 70 6-10L5 1"/>
                <path id="M" d="M207 73L169 1l-6 10-35 67L87 1l-5 10-40 77 26 49 40-76 15 27 26 49 41-76 11 22z"/>
                <path id="W" d="M409 1l-40 77-15-28-26-49-40 77-12-22-5 10 11 22 26 49 41-77 14 28 27 49 46-87-27-49"/>
                <path id="Y" d="M246 2l-84 161 26 49 84-162-26-48"/>
              </g>
            </Link>
            <g id="i" transform="translate(-372 -1147)">
              <path id="i-1"  fill="#000" fill-rule="nonzero" d="M429-97l11-7v1820l-10 7z" transform="rotate(-28 435 809)"/>
              <path id="i-1-1"  fill="#000" fill-rule="nonzero" d="M678 1255l26 49-440 827-26-50z"/>
              <path id="i-1-1-1"  fill="#000" fill-rule="nonzero" d="M467 1651l6-12 184 346-6 10z"/>
              <path id="i-1-1-1-1"  fill="#000" fill-rule="nonzero" d="M580 1841l27 50-440 826-26-49z"/>
            </g>
            <g id="m"  fill="#000" fill-rule="nonzero" transform="translate(-393 563)">
              <path id="m-1" d="M922 1l27 49L26 1785l-26-50z"/>
            </g>
            <g id="w"  fill="#000" fill-rule="nonzero" transform="translate(823 -539)">
              <path id="w-1-1" d="M325 392l6-12 244 459-6 11z"/>
              <path id="w-1-1-1" d="M874 0l26 50-378 711-26-50z"/>
              <path id="w-1" d="M335 370l26 49-335 630-26-49z"/>
              <path id="w-1-1" d="M192 639l6-12 855 1608-5 10z"/>
            </g>
            <g id="w2"  fill="#000" fill-rule="nonzero" transform="translate(672 356)">
              <path id="w2-1" d="M132 255l6-12 855 1607-6 11z"/>
              <path id="w2-1-1" d="M434 0l26 50-218 410-27-49z"/>
              <path id="w2-1-1-1" d="M369 123l6-11 399 750-6 10z"/>
              <path id="w2-1-2-1" d="M77 365l6-12 184 345-6 11z"/>
              <path id="w2-1-2" d="M297 543l26 49-296 557-26-49z"/>
            </g>
            <g id="y2"  fill="#000" fill-rule="nonzero" transform="translate(431 639)">
              <path id="y2-1-2" d="M41 339l6-12 184 346-6 10z"/>
              <path id="y2-1-1" d="M129 173l6-12 62 117-6 10z"/>
              <path id="y2-1" d="M219 1l26 49L26 461 0 412z"/>
            </g>
            <g id="y"  fill="#000" fill-rule="nonzero" transform="translate(511 -296)">
              <path id="y-1" d="M0 365l6-12 217 408-6 11z"/>
              <path id="y-1-1" d="M400 0l26 50-296 557-27-50z"/>
              <path id="y-1-1-1" d="M285 265l6-12 115 216-6 10z"/>
            </g>
          </g>
        </g>
      </svg>
      </div>
    )
  }
}


export default Landing;

{/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" version="1">
  <defs>
    <linearGradient id="linearGradient-1" x1="42%" x2="22%" y1="0%" y2="95%">
      <stop offset="0%" stop-color="#B7E9E4"/>
      <stop offset="100%" stop-color="#6DC7BC"/>
    </linearGradient>
  </defs>
  <g id="Home" fill="none" fill-rule="evenodd">
    <g id="landing">
      <path fill="#FFF" d="M0 0h1440v1024H0z"/>
      <g id="logo" fill="url(#linearGradient-1)" transform="translate(492 469)">
        <path id="i" d="M5 1L0 11l39 70 6-10L5 1"/>
        <path id="m" d="M207 73L169 1l-6 10-35 67L87 1l-5 10-40 77 26 49 40-76 15 27 26 49 41-76 11 22z"/>
        <path id="w" d="M409 1l-40 77-15-28-26-49-40 77-12-22-5 10 11 22 26 49 41-77 14 28 27 49 46-87-27-49"/>
        <path id="y" d="M246 2l-84 161 26 49 84-162-26-48"/>
      </g>
      <g id="i" fill-rule="nonzero" transform="translate(-372 -1147)">
        <path id="i-1" fill="#000" d="M429-97l11-7v1820l-10 7z" transform="rotate(-28 435 809)"/>
        <path id="i-1-1" fill="#1F1F1F" d="M678 1255l26 49-440 827-26-50z"/>
        <path id="i-1-1-1" fill="#1F1F1F" d="M467 1651l6-12 184 346-6 10z"/>
        <path id="i-1-1-1-1" fill="#1F1F1F" d="M580 1841l27 50-440 826-26-49z"/>
      </g>
      <g id="m" fill="#1F1F1F" fill-rule="nonzero" transform="translate(-393 563)">
        <path id="m-1" d="M922 1l27 49L26 1785l-26-50z"/>
      </g>
      <g id="w" fill="#1F1F1F" fill-rule="nonzero" transform="translate(823 -539)">
        <path id="i-copy-11" d="M325 392l6-12 244 459-6 11z"/>
        <path id="w-1-1-1" d="M874 0l26 50-378 711-26-50z"/>
        <path id="w-1" d="M335 370l26 49-335 630-26-49z"/>
        <path id="w-1-1" d="M192 639l6-12 855 1608-5 10z"/>
      </g>
      <g id="w2" fill="#1F1F1F" fill-rule="nonzero" transform="translate(672 356)">
        <path id="w2-1" d="M132 255l6-12 855 1607-6 11z"/>
        <path id="w2-1-1" d="M434 0l26 50-218 410-27-49z"/>
        <path id="w2-1-1-1" d="M369 123l6-11 399 750-6 10z"/>
        <path id="w2-1-2-1" d="M77 365l6-12 184 345-6 11z"/>
        <path id="w2-1-2" d="M297 543l26 49-296 557-26-49z"/>
      </g>
      <g id="y2" fill="#1F1F1F" fill-rule="nonzero" transform="translate(431 639)">
        <path id="y2-1-2" d="M41 339l6-12 184 346-6 10z"/>
        <path id="y2-1-1" d="M129 173l6-12 62 117-6 10z"/>
        <path id="y2-1" d="M219 1l26 49L26 461 0 412z"/>
      </g>
      <g id="y" fill="#1F1F1F" fill-rule="nonzero" transform="translate(511 -296)">
        <path id="y-1" d="M0 365l6-12 217 408-6 11z"/>
        <path id="y-1-1" d="M400 0l26 50-296 557-27-50z"/>
        <path id="y-1-1-1" d="M285 265l6-12 115 216-6 10z"/>
      </g>
    </g>
  </g>
</svg> */}
