import React from 'react';
import CVElement from './CVElement'

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


const About= () => {
  return (
    <div className="page page__about">
      <div className="page__content page__about__content">
        <h1>about</h1>
        <hr />
        <div className="page__about__content__photo">
          <img src={'../images/profile-picture-square--dark.jpg'} />
        </div>
        <div className="page__about__content__text">
          <p>Giving a user a top experience is what drives Gabriel. Being an interaction designer for him not only means creating intuitive user interfaces. He wants to use his skills in front-end development, web design and user experience to lead everyone to a wholesome experience throughout. </p>
          <p>Having studied at the Zurich University of the Arts and the Royal Academy of Art in The Hague, Gabriel enjoys bringing culture and design together. He loves travelling and going abroad to enrich himself and his design work with what other cultures have to offer.</p>
        </div>
        <ul>
          {
            cvList.map( (job) => {
              return (
                <CVElement
                  startTime={job.startTime}
                  endTime={job.endTime}
                  description={job.description}
                  place={job.place}
                  link={job.link}
                />
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default About;
