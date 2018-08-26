import React from 'react';
// import $ from "jquery";
import ContactForm from './ContactForm'
import { indentation, changeColor } from '../scripts/script'
import { headerDisappear, headerAppear } from "../animation/pageTransition";



class Contact extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

    const contactFormItems = document.querySelector('.contact-form').childNodes;

    indentation(contactFormItems, -50);
    changeColor();

  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="page page__contact">
        <div className="page__content page__contact__content">
          <h1>Contact</h1>
          <hr />
          <ContactForm />
          <p>Or write me an <a className="hero__color" href="mailto:gabriel@inter-action.design?subject=I%20would%20like%20to%20work%20with%20you">email</a> directly</p>
        </div>
      </div>
    );
  }
}

// const About = AnimatedWrapper(AboutComponent);
export default Contact;
