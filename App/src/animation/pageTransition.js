import $ from 'jquery';
import { TweenMax } from "gsap/TweenMax";
import { ScrollMagic } from 'scrollmagic';

const headerDisappear = () => {
  TweenMax.to($('h1'), 1, {
    opacity: 0
  })
}

const headerAppear = () => {
  TweenMax.to($('h1'), 1, {
    opacity: 1
  })
}

export { headerAppear, headerDisappear };
