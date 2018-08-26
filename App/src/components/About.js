import React from 'react';
// import $ from "jquery";
import CVElement from './CVElement'
import { indentation, changeColor } from '../scripts/script'
import { headerDisappear, headerAppear } from "../animation/pageTransition";

import $ from 'jquery';
import {TweenMax} from 'gsap/TweenMax';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import { scrollAbout } from '../animation/scrollBehaviour';

const cvList = [
  {
    startTime: '2017+',
    endTime: '',
    description: 'freelance web designer + developer',
    place: 'IMYW',
    link: 'http://www.i-make-your.website'
  },
  {
    startTime: '2018+',
    endTime: '',
    description: 'designer + front-end developer',
    place: 'Okomo',
    link: 'https://www.okomo.ch'
  },
  {
    startTime: '2016',
    endTime: '2017',
    description: 'front-end development intern',
    place: 'Feinheit',
    link: 'http://www.feinheit.ch'
  },
  {
    startTime: '2016',
    endTime: '',
    description: 'interactive media design student',
    place: 'KABK',
    link: 'http://www.kabk.nl'
  },
  {
    startTime: '2014',
    endTime: '2018',
    description: 'interaction design student',
    place: 'ZHdK',
    link: 'http://www.zhdk.ch'
  },
  {
    startTime: '2013',
    endTime: '2014',
    description: 'arts foundation',
    place: 'GBS',
    link: 'http://www.gbs.ch'
  }
]


// const About= () => {
//   return (
//     <div className="page page__about">
//       <div className="page__content page__about__content">
//         <h1>about</h1>
//         <hr />
//         <div className="page__content__photo">
//           <img src={'../images/profile-picture-square--dark.jpg'} />
//         </div>
//         <div className="page__content__text">
//           <p>Giving a user a top experience is what drives Gabriel. Being an interaction designer for him not only means creating intuitive user interfaces. He wants to use his skills in front-end development, web design and user experience to lead everyone to a wholesome experience throughout. </p>
//           <p>Having studied at the Zurich University of the Arts and the Royal Academy of Art in The Hague, Gabriel enjoys bringing culture and design together. He loves travelling and going abroad to enrich himself and his design work with what other cultures have to offer.</p>
//         </div>
//         <ul className="page__content__career">
//           {
//             cvList.map( (job) => {
//               return (
//                 <CVElement
//                   startTime={job.startTime}
//                   endTime={job.endTime}
//                   description={job.description}
//                   place={job.place}
//                   link={job.link}
//                 />
//               )
//             })
//           }
//         </ul>
//       </div>
//     </div>
//   )
// }


class About extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

    const pageAboutChildren = document.querySelector('.page__about .page__content__text').childNodes;
    const pageAboutCareer = document.querySelector('.page__content__career').childNodes;

    indentation(pageAboutChildren, 100);
    indentation(pageAboutCareer, 85);
    changeColor();

    scrollAbout();

    TweenMax.staggerFrom($('.page__content__text p'), 2, {
      opacity: 0,
      delay: 1.5
    },0.7);

  }

  componentWillUnmount() {

  }

  render() {
    return (
      <div className="page page__about">
        <div className="page__content page__about__content">
          <h1>about</h1>
          <hr />
          <div className="page__content__photo">
            <img src={'../images/profile-picture-square--darker.jpg'} />
          </div>
          <div className="page__content__text">
            <p>Giving a user a top experience is what drives Gabriel. Being an interaction designer for him not only means creating intuitive user interfaces. He wants to use his skills in front-end development, web design and user experience to lead everyone to a wholesome experience throughout. </p>
            <p>Having studied at the Zurich University of the Arts and the Royal Academy of Art in The Hague, Gabriel enjoys bringing culture and design together. He loves travelling and going abroad to enrich himself and his design work with what other cultures have to offer.</p>
          </div>
          <ul className="page__content__career">
            {
              cvList.map( (job) => {
                return (
                  <CVElement
                    startTime={job.startTime}
                    endTime={job.endTime}
                    description={job.description}
                    place={job.place}
                    link={job.link}
                    key={job.plaace}
                  />
                )
              })
            }
          </ul>
          <div className="trigger trigger-1"></div>
          <div className="trigger trigger-2"></div>
        </div>
      </div>
    );
  }
}

// const About = AnimatedWrapper(AboutComponent);
export default About;
