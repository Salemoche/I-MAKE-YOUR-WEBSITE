import $ from 'jquery';
import { TweenMax } from "gsap/TweenMax";
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';
import 'scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap';

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
									triggerElement: ".page",
                  triggerHook: "onLeave",
                  // duration: 300
								})
                .setTween("p", 2,  {opacity: 0}) // trigger a TweenMax.to tween
                // .setPin('.line')
                .addIndicators({name: "1 (duration: 0)"}) // add indicators (requires plugin)
								.addTo(controller);
