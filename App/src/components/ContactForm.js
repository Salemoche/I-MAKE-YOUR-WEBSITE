import React from 'react';
import Button from './Button'
// import $ from 'jquery'


class ContactForm extends React.Component {

  componentDidMount() {
    // $('textarea').autogrow({ id: "", classes: 'message'})
  }

  render() {
    return (
      <form className="contact-form">
        <div className="contact-form__names">
          <input type="text" placeholder="Firstname" id="firstname"/>
          <input type="text" placeholder="Lastname" id="lastname"/>
        </div>
        {/* <label for="email">Email</label> */}
        <input type="email" placeholder="email" id="email"/>
        {/* <label for="message">Message</label> */}
        <textarea id="message" className="message" placeholder="message" rows="1"></textarea>
        <Button name="Say hi!" />
      </form>
    );
  }
}

// const About = AnimatedWrapper(AboutComponent);
export default ContactForm;
