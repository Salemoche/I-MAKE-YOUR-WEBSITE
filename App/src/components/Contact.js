import React from 'react';
// import $ from "jquery";
import ContactForm from './ContactForm'
import { indentation, indentationRegular, changeColor } from '../scripts/script'
import { headerDisappear, headerAppear } from "../animation/pageTransition";
import {TweenMax} from 'gsap/TweenMax';



class Contact extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

    const contactFormItems = document.querySelector('.contact-form').childNodes;


    if(window.innerWidth > 375) {
      indentationRegular(contactFormItems, -50);
    }

    changeColor();

    TweenMax.staggerFrom('.contact-form *', 1, {
      x: "+= 30px",
      opacity: 0,
      delay: 0.5
    }, 0.3);

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="page page__contact">
        <div className="page__content page__contact__content">
          <h1>Contact</h1>
          <hr />
          <h2>Let's get in touch</h2>
          <ContactForm />
          <p>Or write me an <a className="hero__color" href="mailto:gabriel@inter-action.design?subject=I%20would%20like%20to%20work%20with%20you">email</a> directly</p>
        </div>
      </div>
    );
  }
}

// const About = AnimatedWrapper(AboutComponent);
export default Contact;
