import React from 'react';
import Button from './Button'
// import $ from 'jquery'


class ContactForm extends React.Component {

  componentDidMount() {
    // $('textarea').autogrow({ id: "", classes: 'message'})
  }

  render() {
    return (
      <form className="contact-form" action="https://formspree.io/gabriel@inter-action.design" method="POST">
        <div className="contact-form__names">
          <input type="text" placeholder="Firstname" name="Firstname" id="firstname"/>
          <input type="text" placeholder="Lastname" name="Lastname" id="lastname"/>
        </div>
        {/* <label for="email">Email</label> */}
        <input type="email" placeholder="email" name="email" id="email"/>
        {/* <label for="message">Message</label> */}
        <textarea id="message" className="message" name="message" placeholder="message" rows="1"></textarea>
        <Button name="Say hi!" />
      </form>
    );
  }
}

// const About = AnimatedWrapper(AboutComponent);
export default ContactForm;
