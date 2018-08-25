import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import Menu from '../components/Menu';
import TestComponent from '../components/TestComponent';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';
import WorkPiece from '../components/WorkPiece';
import Offer from '../components/Offer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';


import Home from '../components/Home';

const firstChild = (props) => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Route component={Menu} />
      <Switch>
        <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
        >
          <Route path="/" component={Landing} exact={true} onEnter={() => console.log('Entered /')}/>
          <Route path="/en/about" component={About} onEnter={() => console.log('Entered About')}/>
          <Route path="/test" component={Home} onEnter={() => console.log('Entered About')}/>
          <Route path="/en/work" component={Work} exact={true}/>
          <Route path="/en/work/:item?" component={WorkPiece} />
          <Route path="/en/offer" component={Offer} />
          <Route path="/en/contact" component={Contact} />
        </AnimatedSwitch>
      </Switch>
      <Route component={Footer} />
    </div>


  </BrowserRouter>
);

export default AppRouter;
