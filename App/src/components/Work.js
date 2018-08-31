import $ from "jquery";
import React from 'react';
import Footer from './Footer'
import ScrollButton from './ScrollButton'
import ShowreelItem from './ShowreelItem';
import { changeColor, midColor, hideMenu } from '../scripts/script'

import {TweenMax} from 'gsap/TweenMax';

const salemoche = {
  name: 'salemoche',
  id: 'salemoche',
  image: '/images/salemoche.png',
  imageMin: '/images/salemoche-min.png',
  order: '1',
  subtitle: 'interactive cv',
  description: 'This is the Salemoche Description',
  link: 'http://www.salemoche.ch/cv/html/index.html'
}
const okomo = {
  name: 'okomo',
  id: 'okomo',
  image: '/images/okomo.png',
  imageMin: '/images/okomo-min.png',
  order: '2',
  subtitle: 'an interactive cv',
  description: '',
  link: 'http://www.okomo.com'
}

const salemochePortfolio = {
  name: 'salemoche portfolio',
  id: 'salemoche-portfolio',
  image: '/images/okomo.png',
  imageMin: '/images/okomo-min.png',
  order: '3',
  subtitle: 'an interactive cv',
  description: '',
  link: 'http://www.salemoche.ch'
}

const showreelItems = [ salemoche, okomo, salemochePortfolio ];


class Work extends React.Component {
  constructor() {
    super();

    this.state = {
      salemoche: {
        name: 'salemoche',
        id: 'salemoche',
        image: '/images/salemoche.png',
        imageMin: '/images/salemoche-min.png',
        order: '1',
        subtitle: 'interactive cv',
        description: 'This is the Salemoche Description',
        link: 'http://www.salemoche.ch/cv/html/index.html'
      },
      okomo: {
        name: 'okomo',
        id: 'okomo',
        image: '/images/okomo.png',
        imageMin: '/images/okomo-min.png',
        order: '2',
        subtitle: 'an interactive cv',
        description: '',
        link: 'http://www.okomo.com'
      },
      salemochePortfolio: {
        name: 'salemoche portfolio',
        id: 'salemochePortfolio',
        image: '/images/okomo.png',
        imageMin: '/images/okomo-min.png',
        order: '3',
        subtitle: 'an interactive cv',
        description: '',
        link: 'http://www.salemoche.ch'
      }
    }
  }


  componentDidMount() {

      changeColor();
      hideMenu();
      // $('.page__content').scrollTo($('.page__content').height - window.innerHeight)

      TweenMax.staggerFrom('.showreel__item', 1, {
        opacity: 0,
        delay: 0.5
      }, 0.3);

      TweenMax.staggerFrom('.page__content__text p', 1, {
        x: "+= 30px",
        opacity: 0,
        delay: 1.5
      }, 0.3)

      $('.scroll-button').mouseenter( () => {$(this).children('.scroll-button__icon').css('background-color', midColor)});
      $('.scroll-button').mouseleave( () => {$(this).children('.scroll-button__icon').css('background-color', 'none')});
  }

  render() {
    return (
      <div className="page page__work">
        <div className="page__content page__work__content">
          <div className="page__content__showreel">
            {
              Object.keys(this.state).map((item) => {
                return (
                  <ShowreelItem
                    name={this.state[item].name}
                    image={this.state[item].imageMin}
                    order={this.state[item].order}
                    id={this.state[item].id}
                    link={this.state[item].link}
                    subtitle={this.state[item].subtitle}
                    key={this.state[item].name}
                  />
                )
              })
            }
          </div>
          <div className="page__content__text">
            <h1>Work</h1>
            <hr />
            <p>
              These are a few examples of my previous work.<br/>
              Browse through and visit a site if you like what you see
            </p>
          </div>
          {/* <ScrollButton direction="about" position="left" link="/en/about"/>
          <ScrollButton direction="offer" position="right" link="/en/offer"/>
          <ScrollButton direction="showreel" position="top" link="/en/about"/>
          <ScrollButton direction="footer" position="bottom" link=".footer"/> */}
          <Footer />
        </div>
      </div>
    )
  }
}

export {Work as default, showreelItems};
