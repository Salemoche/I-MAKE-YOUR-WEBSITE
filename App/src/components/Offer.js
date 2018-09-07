import $ from "jquery";
import React from 'react';
import Package from './Package'
import Button from './Button'
import Step from './Step'
import Footer from './Footer'
import ServicePackage from './ServicePackage'
import { indentation, changeColor, hideMenu } from '../scripts/script'
import { Link } from 'react-router-dom';

import {TweenMax} from 'gsap/TweenMax';
import { scrollOffer } from '../animation/scrollBehaviour';

const packages = [
  {
    name: 'START',
    price: 'from 2999.- CHF',
    text: 'You don’t have a large budget but want to show personality through a website.',
    bullets: [
      'Responsive for different devices',
      'Individual design',
      'CMS',
      'Individual design'
    ],
    buttonText: 'choose start'
  },
  {
    name: 'PREMIUM',
    price: 'from 5999.- CHF',
    text: 'You want a website that clearly differentiates itself from all the others. Custom designs, animations and ',
    text2: 'responsive on whatever device? You have an idea but no clue how to get it on web?',
    text3: '',
    bullets: [
      'All benefits from start',
      'Custom tailored design',
      'Free support'
    ],
    buttonText: 'choose premium'
  },
  {
    name: 'EXCLUSIVE',
    price: 'on request',
    text: 'You want a top notch site with custom animations, personal images and illustrations?',
    text2: 'You want 3D and Virtual Reality? You want a web application, progressive web app or mobile application?',
    text3: 'You have heard about that other new technology and want that on your site? I’m interested, Let’s talk about it.',
    bullets: []
  }
]

const servicePackages = [
  {
    name: 'Domain',
    price: '10+ CHF / year'
  },
  {
    name: 'Hosting',
    price: '8.90 CHF / month'
  },
  {
    name: 'SSL Certificate',
    price: '6 CHF / month'
  },
  {
    name: 'Service',
    price: '19.90 CHF / month'
  }
]

const steps = [
  {
    name: '1. First consulting',
    description: 'Your first consulting can be in person, via Okomo, telephone or email. We will talk about your business and your expectations and see how we can get on the same page',
    icon: 'coffee'
  },
  {
    name: '2. Design and interactive prototype',
    description: 'We will design and prototype the first version of your website for you to inspect and try out',
    icon: 'pen-fancy'
  },
  {
    name: '3. Second consulting',
    description: 'Once you’ve reviewed the project we will meet again to discuss your inputs. What do you like? What should be different?',
    icon: 'hands-helping'
  },
  {
    name: '4. Final Design and programming',
    description: 'As soon as we’ve come to an agreement we will go back into our laboratory and program your website.',
    icon: 'code'
  },
  {
    name: '5. Final review and going live',
    description: 'The last step is going live and instructing you on how to maintain the website.',
    icon: 'chart-line'
  }
]

class Offer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    console.log('component did mount');

    const pageOfferChildren = document.querySelector('.page__offer').childNodes;
    const pageOfferText = document.querySelector('.page__offer .page__content__text').childNodes;
    const package1Children = $('.package__info').eq(0).children();
    const package2Children = $('.package__info').eq(1).children();
    const package3Children = $('.package__info').eq(2).children();
    const package1Bullets = $('.package__info ul').eq(0).children();
    const package2Bullets = $('.package__info ul').eq(1).children();
    const packageInfo = $('.package__info').children();
    const stepItems = $('.page__content__step__container li');

    if(window.innerWidth > 375) {
      indentation(package1Children, -50);
      indentation(package2Children, -50);
      indentation(package3Children, -50);
      indentation(package1Bullets, -20);
      indentation(package2Bullets, -20);
      indentation(pageOfferChildren, -20);
      indentation(pageOfferText, -50);
      indentation(stepItems, -80);
    }


    changeColor();
    hideMenu();

    TweenMax.staggerFrom('.page__content__text p', 1, {
      x: "+= 30px",
      opacity: 0,
      delay: 0.5
    }, 0.3)

    TweenMax.from('Button', 1, {
      x: "+= 30px",
      opacity: 0,
      delay: 0.5
    })

    scrollOffer();
  }

 render() {
  return (
    <div className="page page__offer">
      <div className="page__content page__offer__content">
        <h1>Offer</h1>
        <hr />
        <h2>Let's work together</h2>
        <div className="page__content__text">
          <p>Presenting your company, your shop or your work to the outside world has never been easier than today. Through a website you are able to show your business <em className="hero__color">worldwide</em>.</p>
          <p>In our  <em className="hero__color">digital age</em>, not having a website is not an option and it is easy to use Wordpress, Wix or Squarespace to get a simple site running</p>
          <p>In order to transfer your brand  <em className="hero__color">identity</em>, however, it is essential to have your  <em className="hero__color">individual</em>,  <em className="hero__color">personalized</em> website. IMYW can help.</p>
        </div>
        <Link to="/en/contact" class="hero__color">
          <Button name="request a free consulting" />
        </Link>
        <div className="page__content__package__container">
          {
            packages.map((packageItem) => {
              return (
                <Package
                  name={packageItem.name}
                  price={packageItem.price}
                  text={packageItem.text}
                  text2={packageItem.text2}
                  text3={packageItem.text3}
                  bullets={packageItem.bullets}
                  key={packageItem.name}
                />
              )
            })
          }
        </div>
        <div className="page__content__service-package__container" id="servicePackage">
          {
            servicePackages.map((servicePackage) => {
              return (
                <ServicePackage
                  name={servicePackage.name}
                  price={servicePackage.price}
                  key={servicePackage.name}
                />
              )
            })
          }
        </div>

        <h2>In 5 steps to your dream website</h2>

        <div className="page__content__step__container">
          {
            steps.map((step) => {
              return (
                <Step
                  name={step.name}
                  description={step.description}
                  icon={step.icon}
                  key={step.name}
                />
              )
            })
          }
        </div>

        <Footer />
        <div className="trigger trigger-1"></div>
        <div className="trigger trigger-2"></div>
        <div className="trigger trigger-3"></div>
        <div className="trigger trigger-4"></div>
      </div>
    </div>
  )
  }
}

// class Offer extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidUpdate(prevProps, prevState, snapshot) {
//     // If we have a snapshot value, we've just added new items.
//     // Adjust scroll so these new items don't push the old ones out of view.
//     // (snapshot here is the value returned from getSnapshotBeforeUpdate)
//     if (snapshot !== null) {
//       const list = this.listRef.current;
//       list.scrollTop = list.scrollHeight - snapshot;
//     }
//   }
//
//   render() {
//     return (
//       <div ref={this.listRef}>{/* ...contents... */}</div>
//     );
//   }
// }

export default Offer;
