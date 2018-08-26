import $ from 'jquery';
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {TweenMax} from 'gsap/TweenMax';
import {TweenLite} from 'gsap/TweenLite';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

var controller = new ScrollMagic.Controller();

const scrollAbout = () => {

	const listAnim =
    TweenMax.staggerTo($('.page__content__career li'), 1, {
      opacity: 1,
      delay: 1
    },0.3);

	var scene = new ScrollMagic.Scene({
										triggerElement: ".trigger-2",
										triggerHook: "onLeave",
									})
									.setTween(".page__content__text", 1, {opacity: 0}) // trigger a TweenMax.to tween
									.addTo(controller);

	var scene = new ScrollMagic.Scene({
										triggerElement: ".trigger-2",
										triggerHook: "onLeave",
									})
									.setTween(listAnim) // trigger a TweenMax.to tween
									.addTo(controller);


	var scene2 = new ScrollMagic.Scene({
										triggerElement: ".trigger-1",
										triggerHook: "onLeave",
										duration: '100%'
									})
									.setTween(".page__content__photo",  {top: '700px', ease: Power0.easeNone}) // trigger a TweenMax.to tween
									.addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
									.addTo(controller);
};



export { scrollAbout };
