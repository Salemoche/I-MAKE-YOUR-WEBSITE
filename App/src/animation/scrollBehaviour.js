import $ from 'jquery';
import 'imports-loader?define=>false!animation.gsap';
import ScrollMagic from 'ScrollMagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import {TweenMax} from 'gsap/TweenMax';
import {TimelineMax} from 'gsap/TimelineMax';
import {ScrollToPlugin} from "gsap/ScrollToPlugin";

var controller = new ScrollMagic.Controller();

const scrollAbout = () => {

	if(window.innerWidth > 375) {
		$('.trigger-2').css('top', '300px');
	}

	const listAnim =
		TweenMax.staggerTo($('.page__content__career li'), 1, {
			x: "-= 30px",
			opacity: 1,
			delay: 1
		},0.3);

	const textAnim =
		TweenMax.staggerTo($('.page__content__text p'), 2, {
			x: "-= 30px",
			opacity: 0
		},0.3);

	var scene = new ScrollMagic.Scene({
										triggerElement: ".trigger-2",
										triggerHook: "onLeave",
									})
									.setTween(textAnim) // trigger a TweenMax.to tween
									.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
										triggerElement: ".trigger-2",
										triggerHook: "onLeave",
									})
									.setTween(listAnim) // trigger a TweenMax.to tween
									.addTo(controller);


	var scene3 = new ScrollMagic.Scene({
										triggerElement: ".trigger-1",
										triggerHook: "onLeave",
										duration: '100%'
									})
									.setTween(".page__content__photo",  {top: '700px', ease: Power0.easeNone}) // trigger a TweenMax.to tween
									// .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
									.addTo(controller);


};

const scrollOffer = () => {

	const t = new TimelineMax()
		.staggerFrom('.package', 1, {
			opacity: 0,
		}, 0.3)
		.staggerFrom('.package__info__bullet', 1, {
			x: "+= 30px",
			opacity: 0,
			delay: 0.5
		}, 0.3);

	const servicePackagesAnim = TweenMax.staggerFrom('.page__content__service-package__container li', 1, {
		x: "+= 30px",
		opacity: 0,
	}, 0.3);

	const stepsAnim = TweenMax.staggerFrom('.page__content__step__container li', 1, {
		x: "-= 30px",
		opacity: 0,
	}, 0.3);

	// const packageAnim =
	// 	TweenMax
	//
	// const bulletAnim =
	// 	TweenMax.staggerFrom('.package__info__bullet', 1, {
	// 		opacity: 0,
	// 	}, 0.3);

	var scene = new ScrollMagic.Scene({
										triggerElement: ".trigger-2",
										triggerHook: "onLeave",
									})
									.setTween(t) // trigger a TweenMax.to tween
									.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
										triggerElement: ".trigger-3",
										triggerHook: "onLeave",
									})
									.setTween(servicePackagesAnim) // trigger a TweenMax.to tween
									.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
										triggerElement: ".trigger-4",
										triggerHook: "onLeave",
									})
									.setTween(stepsAnim) // trigger a TweenMax.to tween
									.addTo(controller);
}

const scrollWork = () => {
    // $([document.documentElement, document.body]).animate({
    //     scrollTop: $("#elementtoScrollToID").offset().top
    // }, 2000);


		// $(".page__work .page__content").scrollTop( $(document).height() - $('footer').innerHeight() - $(window).innerHeight() );
		//
		// console.log($(".page__work .page__content").scrollHeight);
		// console.log($('footer').innerHeight());
		// console.log($(window).height() );
		// console.log($(document).height() );

		$(".page__work__content").scrollTop(50);

}


export { scrollAbout, scrollOffer, scrollWork };
