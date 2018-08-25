import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import Menu from '../components/Menu';
import TestComponent from '../components/TestComponent';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';
import WorkPiece from '../components/WorkPiece';
import Offer from '../components/Offer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route component={Menu} />
      <Switch>
        <Route path="/" component={Landing} exact={true} onEnter={() => console.log('Entered /')}/>
        <Route path="/en/about" component={About} onEnter={() => console.log('Entered About')}/>
        <Route path="/en/work" component={Work} exact={true}/>
        <Route path="/en/work/:item?" component={WorkPiece} />
        <Route path="/en/offer" component={Offer} />
        <Route path="/en/contact" component={Contact} />
      </Switch>
      <Route component={Footer} />
    </div>


  </BrowserRouter>
);

export default AppRouter;
