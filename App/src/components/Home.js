import React, { Component } from "react";
import AnimatedWrapper from "../animation/AnimatedWrapper";
import { Transition } from 'react-transition-group';

class Home extends React.Component {
  state = {
    show: false,
    entered: false,
  };

  render() {
    const { show } = this.state;
    return (
      <div className="test">
        <button
          onClick={() => {
            this.setState(state => ({
              show: !state.show,
            }));
          }}
        >
          Toggle
        </button>
        <Transition
          in={show}
          timeout={1000}
          unmountOnExit
        >
          {state => {
            switch (state) {
              case 'entering':
                console.log(state);
                return 'Entering…';
              case 'entered':
                return 'Entered!';
              case 'exiting':
                return 'Exiting…';
              case 'exited':
                return 'Exited!';
            }
          }}
        </Transition>
      </div>

    );
  }
}

export default Home;
