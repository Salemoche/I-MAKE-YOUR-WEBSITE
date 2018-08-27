import $ from 'jquery';
import {TweenMax} from 'gsap/TweenMax';
import {TimelineMax} from 'gsap/TimelineMax';





const tLogo = new TimelineMax();

tLogo
  .to('#I', 1, {
    attr: {
      d: "M5 1L0 11l39 70 6-10L5 1"
    }
  })
  .to('svg', 1, {
      opacity: 0
    })

const start = () => {
  tLogo.play();
  console.log('start');

  TweenMax.to('svg', 1, {
      // attr: {
      //   d: "M5 1L0 11l39 70 6-10L5 1"
      // }
      opacity: 0
    })
}

export { start };
