import React from 'react';
import ShowreelItem from './ShowreelItem';

const showreelItems = [
  {
    name: 'salemoche',
    image: '../images/salemoche.png'
  },
  {
    name: 'okomo',
    image: '../images/okomo.png'
  },
  {
    name: 'salemoche portfolio',
    image: '../images/okomo.png'
  },
  {
    name: 'inter-action.design',
    image: '../images/okomo.png'
  }
]

const Work = () => {
  return (
    <div className="page page__work">
      <div className="page__content page__work__content">
        <div className="page__work__content__showreel">
          {
            showreelItems.map((item) => {
              return (
                <ShowreelItem
                  name={item.name}
                  image={item.image}
                />
              )
            })
          }
        </div>
        <h1>Work</h1>
        <p>
          this is my work, i hope you like it
        </p>
      </div>
    </div>
  )
}

export default Work;
