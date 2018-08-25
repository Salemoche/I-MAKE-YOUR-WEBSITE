import $ from "jquery";
import React from 'react';
import ShowreelItem from './ShowreelItem';
import { indentation } from '../scripts/indentation'

const showreelItems = [
  {
    name: 'salemoche',
    id: 'salemoche',
    image: '/images/salemoche.png',
    order: '1',
    subtitle: 'interactive cv',
    description: 'This is the Salemoche Description',
    link: 'http://www.salemoche.ch/cv/html/index.html'
  },
  {
    name: 'okomo',
    id: 'okomo',
    image: '/images/okomo.png',
    order: '2',
    subtitle: 'an interactive cv',
    description: '',
    link: 'http://www.okomo.com'
  },
  {
    name: 'salemoche portfolio',
    id: 'salemoche-portfolio',
    image: '/images/okomo.png',
    order: '3',
    subtitle: 'an interactive cv',
    description: '',
    link: 'http://www.salemoche.ch'
  }
]

class Work extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

      $(document).ready(function () {
        if($('.page__work__content')) {
          $('.page__work .page__work__content').scrollTop($('.page__work__content')[0].scrollHeight - $(window).innerHeight());
        }

        indentation($('.page__work .page__content__text').children(), -50);

      });

      console.log('component did mount');
  }

  render() {
    return (
      <div className="page page__work">
        <div className="page__content page__work__content">
          <div className="page__content__showreel">
            {
              showreelItems.map((item) => {
                return (
                  <ShowreelItem
                    name={item.name}
                    image={item.image}
                    order={item.order}
                    id={item.id}
                    link={item.link}
                    subtitle={item.subtitle}
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
