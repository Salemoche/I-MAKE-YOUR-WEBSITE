import $ from 'jquery';
import {TweenMax} from 'gsap/TweenMax';
import {TimelineMax} from 'gsap/TimelineMax';


const tI = new TimelineMax();
const tM = new TimelineMax();
const tY = new TimelineMax();
const tY2 = new TimelineMax();
const tW = new TimelineMax();
const tW2 = new TimelineMax();

const tLogoM = new TimelineMax();
const tLogoW = new TimelineMax();
const tLogo = new TimelineMax();


// const tLogo = new TimelineMax();
//
// tLogo
//   .to('#I', 1, {
//     attr: {
//       d: "M5 1L0 11l39 70 6-10L5 1"
//     }
//   })

// const tLogo = new TimelineMax({paused: true})
//   .to('#I', 1, {opacity: 0});
//


$(document).ready(() => {

  //
  // logo
  //

  tLogoM
    .to('#M', 1, {
      attr: {
        d: "M207 73L169 1l-6 10-35 67L87 1l-5 10-40 77 26 49 40-76 15 27 26 49 41-76 11 22z"
      }
    })

  tLogoW
    .to('#W', 1, {
      attr: {
        d: "M409 1l-40 77-15-28-26-49-40 77-12-22-5 10 11 22 26 49 41-77 14 28 27 49 46-87-27-49"
      }
    })


  tLogo
    .to('#I', 1, {
      attr: {
        d: "M5 1L0 11l39 70 6-10L5 1"
      },
      delay: 1
    })
    .add(tLogoM)
    .to('#I', 1, {
      attr: {
        d: "M5 1L0 11l39 70 6-10L5 1"
      },
      delay: 1
    })
    .add(tLogoW)

  tLogo.play();

  //
  // Stripes
  //

  // bottom-right -> top-left A1-B1-B0-A0
  // bottom-left -> top-right A1-B1-B0-A0

  // top-right -> bottom-left A0-B0-B1-A1
  // top-left -> bottom-right A0-B0-B1-A1


  tI.to('#i-1', 1, {
      attr: {
        points: "322.193105 12.7408512 328.182406 0.990232907 726.954933 750.972278 721.412386 761.261632"
      },
      delay: 1
    })
    .to('#i-1-1', 1, {
      attr: {
        points: "537.614995 397.669948 563.926969 447.148197 124.411086 1273.75735 98.0991122 1224.2791"
      },
      delay: -0.3
    })
    .to('#i-1-1-1', 1, {
      attr: {
        points: "327.239317 793.991429 333.228618 782.24081 516.868769 1127.6177 511.326221 1137.90706"
      },
      delay: -0.3
    })
    .to('#i-1-1-1-1', 1, {
      attr: {
        points: "440.352932 984.390389 466.664906 1033.86864 27.1490229 1860.47779 0.83704911 1810.99954"
      },
      delay: -0.3
    })

  $('#i').mouseenter(() => {
    tI.timeScale(2);
    tI.reverse();
  })

  $('#i').mouseleave(() => {
    tI.play();
  })


  tM.to('#m-1', 1, {
      attr: {
        points: "922.190605 0.8209514 948.502579 50.2992001 26.3119738 1784.68748 0 1735.20923"
      },
      delay: 1
    })

  $('#m').mouseenter(() => {
    tM.timeScale(2);
    tM.reverse();
  })
  $('#m').mouseleave(() => {
    tM.play();
  })


  tY.to('#y-1', 1, {
      attr: {
        points: "0.0676926187 365.042069 6.05699325 353.29145 223.020753 761.340936 217.478206 771.63029"
      },
      delay: 1
    })
    .to('#y-1-1', 1, {
        attr: {
          points: "399.553688 0.27733707 425.865662 49.7555857 129.689344 606.782224 103.377371 557.303975"
        },
      })
    .to('#y-1-1-1', 1, {
        attr: {
          points: "285.153491 265.209018 291.142792 253.4584 405.625488 468.769037 400.082941 479.05839"
        },
      })


  $('#y').mouseenter(() => {
    tY.timeScale(2);
    tY.reverse();
  })

  $('#y').mouseleave(() => {
    tY.play();
  })

  tY2.to('#y2-1', 1, {
      attr: {
        points: "218.562818 0.798501703 244.874791 50.2767504 26.4423411 461.08844 0.130367278 411.610192"
      },
      delay: 1
    })
    .to('#y2-1-1', 1, {
        attr: {
          points: "128.79776 172.955356 134.78706 161.204738 197 278.21026 191.457453 288.499614"
        },
        delay: 1
      })


  $('#y2').mouseenter(() => {
    tY2.timeScale(2);
    tY2.reverse();
  })

  $('#y2').mouseenter(() => {
    tY2.play();
  })


  tW.to('#w-1', 1, {
      attr: {
        points: "334.974062 369.998815 361.286036 419.477063 26.4892985 1049.13815 0.177324733 999.659899"
      },
      delay: 1
    })
    .to('#w-1-1', 1, {
      attr: {
        points: "192.43126 638.750618 198.420561 627 1053.14618 2234.50509 1047.60363 2244.79444"
      },
      delay: 1
    })
    .to('#w-2', 1, {
      attr: {
        points: "324.588671 392.078378 330.577971 380.32776 574.720391 839.49287 569.177844 849.782224"
      },
      delay: 1
    })
    .to('#w-2-1', 1, {
      attr: {
        points: "873.769473 0.0724611109 900.081447 49.5507098 522.01884 760.583059 495.706866 711.10481"
      },
      delay: 1
    })



  $('#w').mouseenter(() => {
    tW.timeScale(2);
    tW.reverse();
  })

  $('#w').mouseenter(() => {
    tW.play();
  })


  tW2.to('#w2-1', 1, {
      attr: {
        points: "132.0235 254.513821 138.0128 242.763202 992.738416 1850.26829 987.195869 1860.55764"
      },
      delay: 1
    })
    .to('#w2-1-1', 1, {
      attr: {
        points: "433.791918 0.058670598 460.103892 49.5369193 241.671442 460.348609 215.359468 410.870361"
      },
      delay: 1
    })
    .to('#w2-1-1-1', 1, {
      attr: {
        points: "369.026891 123.34363 375.016191 111.593012 773.788718 861.575057 768.246171 871.864411"
      },
      delay: 1
    })
    .to('#w2-1-2', 1, {
      attr: {
        points: "297.091887 542.986134 323.40386 592.464382 27.2275432 1149.49102 0.91556943 1100.01277"
      },
      delay: 1
    })
    .to('#w2-1-2-1', 1, {
      attr: {
        points: "77.3917415 364.620564 83.3810422 352.869945 267.021193 698.246837 261.478646 708.536191"
      },
      delay: 1
    })

  $('#w2').mouseenter(() => {
    tW2.timeScale(2);
    tW2.reverse();
  })

  $('#w2').mouseenter(() => {
    tW2.play();
  })

})

// export { start };
