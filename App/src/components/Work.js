import $ from "jquery";
import React from 'react';
import ShowreelItem from './ShowreelItem';
import { indentation, changeColor } from '../scripts/script'

const showreelItems = {
  salemoche: {
    name: 'salemoche',
    id: 'salemoche',
    image: '/images/salemoche.png',
    order: '1',
    subtitle: 'interactive cv',
    description: 'This is the Salemoche Description',
    link: 'http://www.salemoche.ch/cv/html/index.html'
  },
  okomo: {
    name: 'okomo',
    id: 'okomo',
    image: '/images/okomo.png',
    order: '2',
    subtitle: 'an interactive cv',
    description: '',
    link: 'http://www.okomo.com'
  },
  salemochePortfolio: {
    name: 'salemoche portfolio',
    id: 'salemoche-portfolio',
    image: '/images/okomo.png',
    order: '3',
    subtitle: 'an interactive cv',
    description: '',
    link: 'http://www.salemoche.ch'
  }
}

class Work extends React.Component {
  constructor() {
    super();
  }


  componentDidMount() {
      console.log('component did mount');

      const pageWorkChildren = document.querySelector('.page__work .page__content__text').childNodes;

      indentation(pageWorkChildren, -100);
      changeColor();
  }

  render() {
    return (
      <div className="page page__work">
        <div className="page__content page__work__content">
          <div className="page__content__showreel">
            {
              Object.keys(showreelItems).map((item) => {
                return (
                  <ShowreelItem
                    name={showreelItems[item].name}
                    image={showreelItems[item].image}
                    order={showreelItems[item].order}
                    id={showreelItems[item].id}
                    link={showreelItems[item].link}
                    subtitle={showreelItems[item].subtitle}
                  />
                )
              })
            }
          </div>
          <div className="page__content__text">
            <h1>Work</h1>
            <hr />
            <p>
              this is my work, i hope you like it
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export {Work as default, showreelItems};
