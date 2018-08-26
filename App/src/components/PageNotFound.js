import React from 'react';
// import $ from "jquery";
import ContactForm from './ContactForm'
import { indentation, changeColor } from '../scripts/script'
import { headerDisappear, headerAppear } from "../animation/pageTransition";
import { Link } from 'react-router-dom';



class Contact extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    changeColor();
  }

  render() {
    return (
      <div className="page page__contact">
        <div className="page__content page__contact__content">
          <h1>Page not found</h1>
          <hr />
          <p>Unfortunately, this page does not exist. Check out the <Link to="/en/work" class="hero__color">projects</Link> instead</p>
        </div>
      </div>
    );
  }
}

// const About = AnimatedWrapper(AboutComponent);
export default Contact;
