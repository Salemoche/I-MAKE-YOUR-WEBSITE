import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

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

// const firstChild = (props) => {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null;
// };

const AppRouter = () => (
  <BrowserRouter>
    <Route render={(location) => (
      <div>
        <Route component={Menu} />
        <TransitionGroup
          onEntering={console.log(this)}
        >
          <CSSTransition
            timeout={2000}
            classNames='fade'
            key={location.location.pathname}
          >
            <Switch location={location.location}>
              <Route path="/" component={Landing} exact={true}/>
              <Route path="/en/about" component={About}/>
              <Route path="/test" component={Home}/>
              <Route path="/en/work" component={Work} exact={true}/>
              <Route path="/en/work/:item?" component={WorkPiece} />
              <Route path="/en/offer" component={Offer} />
              <Route path="/en/contact" component={Contact} />
            </Switch>
        </CSSTransition>
        </TransitionGroup>
        <Route component={Footer} />
      </div>
    )}/>


  </BrowserRouter>
);

export default AppRouter;
