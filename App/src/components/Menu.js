import React from 'react';
import { NavLink } from 'react-router-dom';


const Landing = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/" activeClassName="is-active" exact={true} >Landing </NavLink></li>
        <li><NavLink to="/en/about" activeClassName="is-active">About</NavLink></li>
        <li><NavLink to="/en/work" activeClassName="is-active">Work</NavLink></li>
        <li><NavLink to="/en/offer" activeClassName="is-active">Offer</NavLink></li>
        <li><NavLink to="/en/contact" activeClassName="is-active">Contact</NavLink></li>
      </ul>
    </div>
  )
}

export default Landing;
