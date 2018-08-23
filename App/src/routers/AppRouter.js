import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Menu from '../components/Menu';
import TestComponent from '../components/TestComponent';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';
import Offer from '../components/Offer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route component={Menu} />
      <Switch>
        <Route path="/" component={Landing} exact={true}/>
        <Route path="/en/about" component={About} />
        <Route path="/en/work" component={Work} />
        <Route path="/en/offer" component={Offer} />
        <Route path="/en/contact" component={Contact} />
      </Switch>
      <Route component={Footer} />
    </div>


  </BrowserRouter>
);

export default AppRouter;
