import React from 'react';
import { indentation, changeColor } from '../scripts/script'


class Footer extends React.Component {

  componentDidMount() {
    changeColor();
  }

  render() {
  return (
    <footer className="hero__background">
      <div className="footer__info">
        <p className="contrast__color">I MAKE YOUR WEBSITE</p>
        <p className="contrast__color">Gabriel Bach</p>
        <p className="contrast__color">Seebahnstr. 231</p>
        <p className="contrast__color">8004 Zürich</p>
        <p className="contrast__color">Switzerland</p>
      </div>
      <p className="footer__copyright contrast__color">© 2018 I MAKE YOUR WEBSITE</p>
    </footer>
  )
}
}


export default Footer;
