import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import $ from 'jquery';
// import {TweenMax} from 'gsap/TweenMax';

import Menu from '../components/Menu';
import TestComponent from '../components/TestComponent';
import Landing from '../components/Landing';
import About from '../components/About';
import Work from '../components/Work';
import WorkPiece from '../components/WorkPiece';
import Offer from '../components/Offer';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageNotFound from '../components/PageNotFound';


import Home from '../components/Home';

// const firstChild = (props) => {
//   const childrenArray = React.Children.toArray(props.children);
//   return childrenArray[0] || null;
// };

class AppRouter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      location: window.location
    }
  }

  dissolve = () => {

    // TweenMax.to($('.page'), 1, {opacity: 0});
    // console.log('dissolve');

    // this.setState(() => {
    //   return {location: 'habakuk'}
    // })
    // console.log(this.state);

  }

  render() {
    return (
      <BrowserRouter>
        <Route render={(location) => (
          <div>
            <Route component={Menu} />
            <TransitionGroup
              onEnter={this.dissolve()}
            >
              <CSSTransition
                timeout={1000}
                classNames='fade'
                key={location.location.pathname}
              >
                <Switch location={location.location}>
                  <Route path="/" component={Landing} exact={true}/>
                  <Route path="/en/about" component={About}/>
                  <Route path="/en/work" component={Work} exact={true}/>
                  <Route path="/en/work/:item?" component={WorkPiece} />
                  <Route path="/en/offer" component={Offer} />
                  <Route path="/en/contact" component={Contact} />
                  <Route component={PageNotFound} />
                </Switch>
            </CSSTransition>
            </TransitionGroup>
          </div>
        )}/>
      </BrowserRouter>
    )

  }
}

export default AppRouter;
