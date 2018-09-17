import $ from "jquery";
import React from 'react';
import ShowreelItem from './ShowreelItem';
import { indentation, changeColor, menuClick  } from '../scripts/script.js';
import { showreelItems } from './Work';


// const pieceID = () => {
//   for(let i = 0; i< showreelItems.length; i++) {
//     if (props.match.params.item == showreelItems[i].name) {
//       return i;
//     }
//   }
// }



class WorkPiece extends React.Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  componentWillMount() {

    menuClick()

    const id = () => {
      for(let i = 0; i< showreelItems.length; i++) {
        if (this.props.match.params.item == showreelItems[i].name) {
          return i;
        }
      }
    }


    this.setState(() => {
      return {
        name: showreelItems[id()].name,
        id: showreelItems[id()].id,
        image: showreelItems[id()].image,
        imageMin: showreelItems[id()].imageMin,
        order: showreelItems[id()].order,
        subtitle: showreelItems[id()].subtitle,
        description: showreelItems[id()].description,
        link: showreelItems[id()].link
      }
    });
  }

  componentDidMount() {
    changeColor();
  }

  render () {
    return (
      <div className="page page__work page__work__piece">
        <div className="page__content page__work__content">
          <div className="page__content__background-image">
            <img src={this.state.image} />
          </div>
          <div className="page__content__text">
            <h1>{this.state.name}</h1>
            <hr />
            <h2>{this.state.subtitle}</h2>
            <p>
              {this.state.description}
            </p>
          </div>
          <a target="_blank" rel="noopener noreferrer" href={this.state.link}>
            <div className="button hero__background page__content__button">
              <h6>Visit Website</h6>
            </div>
          </a>
        </div>
      </div>
    )
  }
}

//
// Indentation
//

// $(document).ready( function () {
//   indentation($('.page__work .page__content__text').children(), -50);
// });

export default WorkPiece;
