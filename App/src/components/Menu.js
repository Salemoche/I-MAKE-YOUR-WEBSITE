import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scripts/indentation.js';
import { changeColor } from '../scripts/script';

const menuStyle = {
  transform: 'skewX(28deg)'
}


class Landing extends React.Component {

  componentWillMount() {
    changeColor();
  }

  render () {
    return (
      <div className="menu menu--closed" id="menu">
        {/* <div className="menu__background hero__background" style="background: #555;transform: skewX(28deg)"></div> */}
        <div className="menu__background hero__background" style={menuStyle}></div>
        <div className="menu__content">
          <NavLink to="/" activeClassName="is-active" exact={true} >
            <div className="menu__content__logo">
              <svg width="160" height="78" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient x1="42.258%" y1="0%" x2="21.749%" y2="95.392%" id="gradient">
                  <stop className="brightColor menu-logo" stop-color="none" offset="0%"/>
                  <stop className="darkColor menu-logo" stop-color="none" offset="100%"/>
                </linearGradient>
              </defs>
              <g fill="none" fill-rule="evenodd">
                <path id="menu__logo" d="M2.893 25.462l13.604 26.053-2.13 3.506L.76 28.968l2.132-3.506zm73.53 26.761l-1.918 3.663-4.334-8.183-14.798 27.896-9.54-17.944-5.275-9.943L25.741 75.6 16.2 57.655l14.816-27.932 1.917-3.663 14.808 27.917 12.907-24.254 1.918-3.663 13.857 26.163zm73.98-26.163l9.556 17.945L143.201 75.6l-9.555-17.944.017-.033-5.288-9.954L113.56 75.6l-9.529-17.994-4.295-8.012 1.92-3.662 4.307 8.032 14.8-27.903 9.555 17.945-.01.022 5.287 9.953 14.809-27.92zm-59.545.181l9.354 17.761-30.774 58.795-9.355-17.761L90.858 26.24z" transform="translate(0 -25)" fill="url(#gradient)"/>
              </g>
            </svg>
            </div>
          </NavLink>
          <ul className="menu__content__list">
            <li className="contrast__color"><NavLink to="/en/about" activeClassName="is-active" onClick={() => {}}>about</NavLink></li>
            <li className="contrast__color"><NavLink to="/en/work" activeClassName="is-active">work</NavLink></li>
            <li className="contrast__color"><NavLink to="/en/offer" activeClassName="is-active">offer</NavLink></li>
            <li className="contrast__color"><NavLink to="/en/contact" activeClassName="is-active">contact</NavLink></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Landing;
