import React from 'react';
import { changeColor, landingMenu } from '../scripts/script';
// import { start } from '../animation/landing';
import { Link } from 'react-router-dom';
import tI from '../animation/landing.js';

// console.log(logo);

class Landing extends React.Component {

  componentDidMount() {
    changeColor();
    // // start();
    // tI.play();
    landingMenu();
  }

  render() {
    return (
      <div className="page page__landing">
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" version="1" className="landing__svg">
          <desc>Created with Sketch.</desc>
            <defs>
                <linearGradient x1="42.2582057%" y1="0%" x2="21.748546%" y2="95.3923288%" id="linearGradient-1">
                  <stop className="brightColor" offset="0%" stop-color="none"/>
                  <stop className="darkColor" offset="100%" stop-color="none"/>
                </linearGradient>
            </defs>
            <g id="Home" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="landing">
                    <g id="logo" transform="translate(491.760683, 468.759190)" fill="url(#linearGradient-1)">
                        <polyline id="I" points="5.13468433 0.931532163 -0.366440908 10.7372766 39.3824407 80.781785 44.8820357 70.9760405 5.13468433 0.931532163"></polyline>
                        <polygon id="M" points="206.646011 72.9242238 168.673669 1.23257442 163.419874 11.2689072 128.052502 77.7284771 87.4751902 1.23257442 82.2213946 11.2689072 41.6221551 87.8072995 67.7683401 136.978004 108.369041 60.5626852 122.820634 87.8072995 148.965357 136.978004 189.513433 60.5363124 201.390753 82.9605566"></polygon>
                        <polyline id="W" points="409.365845 1.23257442 368.786592 77.7372681 354.297871 50.4633507 354.328614 50.4047443 328.145853 1.23257442 287.590024 77.6918482 275.789116 55.6807785 270.526213 65.7171113 282.296378 87.6710398 308.408868 136.978004 349.004225 60.4425423 363.492946 87.7164597 363.446099 87.8072995 389.62886 136.978004 435.550069 50.4047443 409.365845 1.23257442"></polyline>
                        <polyline id="Y" points="246.199117 1.7285271 161.871927 162.836288 187.504882 211.504907 271.832072 50.3971461 246.199117 1.7285271"></polyline>
                    </g>
                    <g id="i" transform="translate(-232.239317, -290.240810)" fill="#1F1F1F" fill-rule="nonzero">
                        <polygon id="i-1" points="721.412386 761.261632 726.954933 750.972278 726.954933 750.972278 721.412386 761.261632"></polygon>
                        <polygon id="i-1-1" points="537.614995 397.669948 563.926969 447.148197 563.926969 447.148197 537.614995 397.669948"></polygon>
                        <polygon id="i-1-1-1" points="327.239317 793.991429 333.228618 782.24081 333.228618 782.24081 327.239317 793.991429"></polygon>
                        <polygon id="i-1-1-1-1" points="440.352932 984.390389 466.664906 1033.86864 466.664906 1033.86864 440.352932 984.390389"></polygon>
                    </g>
                    <g id="m" transform="translate(-393.239317, 562.759190)" fill="#1F1F1F" fill-rule="nonzero">
                        <polygon id="m-1" points="922.190605 0.8209514 948.502579 50.2992001 948.502579 50.2992001 922.190605 0.8209514"></polygon>
                    </g>
                    <g id="w" transform="translate(822.760683, -539.240810)" fill="#1F1F1F" fill-rule="nonzero">
                        <polygon id="w-1" points="0.177324733 999.659899 26.4892985 1049.13815 26.4892985 1049.13815 0.177324733 999.659899"></polygon>
                        <polygon id="w-1-1" points="192.43126 638.750618 198.420561 627 198.420561 627 192.43126 638.750618"></polygon>
                        <polygon id="w-2" points="324.588671 392.078378 330.577971 380.32776 330.577971 380.32776 324.588671 392.078378"></polygon>
                        <polygon id="w-1-2-1" points="495.706866 711.10481 522.01884 760.583059 522.01884 760.583059 495.706866 711.10481"></polygon>
                    </g>
                    <g id="w2" transform="translate(671.760683, 355.759190)" fill="#1F1F1F" fill-rule="nonzero">
                        <polygon id="w2-1" points="132.0235 254.513821 138.0128 242.763202 138.0128 242.763202 132.0235 254.513821"></polygon>
                        <polygon id="w2-1-1" points="215.359468 410.870361 241.671442 460.348609 241.671442 460.348609 215.359468 410.870361"></polygon>
                        <polygon id="w2-1-1-1" points="369.026891 123.34363 375.016191 111.593012 375.016191 111.593012 369.026891 123.34363"></polygon>
                        <polygon id="w2-1-2" points="297.091887 542.986134 323.40386 592.464382 323.40386 592.464382 297.091887 542.986134"></polygon>
                        <polygon id="w2-1-2-1" points="261.478646 708.536191 267.021193 698.246837 267.021193 698.246837 261.478646 708.536191"></polygon>
                    </g>
                    <g id="y2" transform="translate(430.760683, 638.759190)" fill="#1F1F1F" fill-rule="nonzero">
                        {/* <polygon id="y2-1-2" points="40.898893 339.153713 46.8881936 327.403095 230.528344 672.779986 224.985797 683.06934"></polygon> */}
                        <polygon id="y2-1-1" points="128.79776 172.955356 134.78706 161.204738 134.78706 161.204738 128.79776 172.955356"></polygon>
                        <polygon id="y2-1" points="218.562818 0.798501703 244.874791 50.2767504 244.874791 50.2767504 218.562818 0.798501703"></polygon>
                    </g>
                    <g id="y" transform="translate(510.760683, -296.240810)" fill="#1F1F1F" fill-rule="nonzero">
                        <polygon id="y-1" points="217.478206 771.63029 223.020753 761.340936 223.020753 761.340936 217.478206 771.63029"></polygon>
                        <polygon id="y-1-1" points="103.377371 557.303975 129.689344 606.782224 129.689344 606.782224 103.377371 557.303975"></polygon>
                        <polygon id="y-1-1-1" points="285.153491 265.209018 291.142792 253.4584 291.142792 253.4584 285.153491 265.209018"></polygon>
                    </g>
                </g>
            </g>
        </svg>
      </div>
    )
  }
}


export default Landing;

{/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" version="1">
  <defs>
    <linearGradient id="linearGradient-1" x1="42%" x2="22%" y1="0%" y2="95%">
      <stop offset="0%" stop-color="#B7E9E4"/>
      <stop offset="100%" stop-color="#6DC7BC"/>
    </linearGradient>
  </defs>
  <g id="Home" fill="none" fill-rule="evenodd">
    <g id="landing">
      <path fill="#FFF" d="M0 0h1440v1024H0z"/>
      <g id="logo" fill="url(#linearGradient-1)" transform="translate(492 469)">
        <path id="i" d="M5 1L0 11l39 70 6-10L5 1"/>
        <path id="m" d="M207 73L169 1l-6 10-35 67L87 1l-5 10-40 77 26 49 40-76 15 27 26 49 41-76 11 22z"/>
        <path id="w" d="M409 1l-40 77-15-28-26-49-40 77-12-22-5 10 11 22 26 49 41-77 14 28 27 49 46-87-27-49"/>
        <path id="y" d="M246 2l-84 161 26 49 84-162-26-48"/>
      </g>
      <g id="i" fill-rule="nonzero" transform="translate(-372 -1147)">
        <path id="i-1" fill="#000" d="M429-97l11-7v1820l-10 7z" transform="rotate(-28 435 809)"/>
        <path id="i-1-1" fill="#1F1F1F" d="M678 1255l26 49-440 827-26-50z"/>
        <path id="i-1-1-1" fill="#1F1F1F" d="M467 1651l6-12 184 346-6 10z"/>
        <path id="i-1-1-1-1" fill="#1F1F1F" d="M580 1841l27 50-440 826-26-49z"/>
      </g>
      <g id="m" fill="#1F1F1F" fill-rule="nonzero" transform="translate(-393 563)">
        <path id="m-1" d="M922 1l27 49L26 1785l-26-50z"/>
      </g>
      <g id="w" fill="#1F1F1F" fill-rule="nonzero" transform="translate(823 -539)">
        <path id="i-copy-11" d="M325 392l6-12 244 459-6 11z"/>
        <path id="w-1-1-1" d="M874 0l26 50-378 711-26-50z"/>
        <path id="w-1" d="M335 370l26 49-335 630-26-49z"/>
        <path id="w-1-1" d="M192 639l6-12 855 1608-5 10z"/>
      </g>
      <g id="w2" fill="#1F1F1F" fill-rule="nonzero" transform="translate(672 356)">
        <path id="w2-1" d="M132 255l6-12 855 1607-6 11z"/>
        <path id="w2-1-1" d="M434 0l26 50-218 410-27-49z"/>
        <path id="w2-1-1-1" d="M369 123l6-11 399 750-6 10z"/>
        <path id="w2-1-2-1" d="M77 365l6-12 184 345-6 11z"/>
        <path id="w2-1-2" d="M297 543l26 49-296 557-26-49z"/>
      </g>
      <g id="y2" fill="#1F1F1F" fill-rule="nonzero" transform="translate(431 639)">
        <path id="y2-1-2" d="M41 339l6-12 184 346-6 10z"/>
        <path id="y2-1-1" d="M129 173l6-12 62 117-6 10z"/>
        <path id="y2-1" d="M219 1l26 49L26 461 0 412z"/>
      </g>
      <g id="y" fill="#1F1F1F" fill-rule="nonzero" transform="translate(511 -296)">
        <path id="y-1" d="M0 365l6-12 217 408-6 11z"/>
        <path id="y-1-1" d="M400 0l26 50-296 557-27-50z"/>
        <path id="y-1-1-1" d="M285 265l6-12 115 216-6 10z"/>
      </g>
    </g>
  </g>
</svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" version="1">
  <defs>
    <linearGradient id="linearGradient-1" x1="42%" x2="22%" y1="0%" y2="95%">
      <stop offset="0%" stop-color="#B7E9E4"/>
      <stop offset="100%" stop-color="#6DC7BC"/>
    </linearGradient>
  </defs>
  <g id="Home" fill="none" fill-rule="evenodd">
    <g id="landing">
      <path fill="#FFF" d="M0 0h1440v1024H0z"/>
      <g id="logo" fill="url(#linearGradient-1)" transform="translate(492 469)">
        <path id="i" d="M5 1L0 11l39 70 6-10L5 1"/>
        <path id="m" d="M207 73L169 1l-6 10-35 67L87 1l-5 10-40 77 26 49 40-76 15 27 26 49 41-76 11 22z"/>
        <path id="w" d="M409 1l-40 77-15-28-26-49-40 77-12-22-5 10 11 22 26 49 41-77 14 28 27 49 46-87-27-49"/>
        <path id="y" d="M246 2l-84 161 26 49 84-162-26-48"/>
      </g>
      <g id="i" fill="#1F1F1F" fill-rule="nonzero" transform="translate(-232 -290)">
        <path id="i-1" d="M322 13l6-12 399 750-6 10z"/>
        <path id="i-1-1" d="M538 398l26 49-440 827-26-50z"/>
        <path id="i-1-1-1" d="M327 794l6-12 184 346-6 10z"/>
        <path id="i-1-1-1-1" d="M440 984l27 50-440 826-26-49z"/>
      </g>
      <g id="m" fill="#1F1F1F" fill-rule="nonzero" transform="translate(-393 563)">
        <path id="m-1" d="M922 1l27 49L26 1785l-26-50z"/>
      </g>
      <g id="w" fill="#1F1F1F" fill-rule="nonzero" transform="translate(823 -539)">
        <path id="i-copy-11" d="M325 392l6-12 244 459-6 11z"/>
        <path id="w-1-1-1" d="M874 0l26 50-378 711-26-50z"/>
        <path id="w-1" d="M335 370l26 49-335 630-26-49z"/>
        <path id="w-1-1" d="M192 639l6-12 855 1608-5 10z"/>
      </g>
      <g id="w2" fill="#1F1F1F" fill-rule="nonzero" transform="translate(672 356)">
        <path id="w2-1" d="M132 255l6-12 855 1607-6 11z"/>
        <path id="w2-1-1" d="M434 0l26 50-218 410-27-49z"/>
        <path id="w2-1-1-1" d="M369 123l6-11 399 750-6 10z"/>
        <path id="w2-1-2-1" d="M77 365l6-12 184 345-6 11z"/>
        <path id="w2-1-2" d="M297 543l26 49-296 557-26-49z"/>
      </g>
      <g id="y2" fill="#1F1F1F" fill-rule="nonzero" transform="translate(431 639)">
        <path id="y2-1-2" d="M41 339l6-12 184 346-6 10z"/>
        <path id="y2-1-1" d="M129 173l6-12 62 117-6 10z"/>
        <path id="y2-1" d="M219 1l26 49L26 461 0 412z"/>
      </g>
      <g id="y" fill="#1F1F1F" fill-rule="nonzero" transform="translate(511 -296)">
        <path id="y-1" d="M0 365l6-12 217 408-6 11z"/>
        <path id="y-1-1" d="M400 0l26 50-296 557-27-50z"/>
        <path id="y-1-1-1" d="M285 265l6-12 115 216-6 10z"/>
      </g>
    </g>
  </g>
</svg> */}

{/* <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1024" version="1" className="landing__svg">
  <defs>
    <linearGradient id="linearGradient-1" x1="42%" x2="22%" y1="0%" y2="95%">
      <stop className="brightColor" offset="0%" stop-color="none"/>
      <stop className="darkColor" offset="100%" stop-color="none"/>
    </linearGradient>
  </defs>
  <g id="Home" fill="#000" fill-rule="evenodd">
    <g id="landing">
      <path fill="#FFF" d="M0 0h1440v1024H0z"/>
      <Link to="/en/offer">
        <g id="logo" fill="url(#linearGradient-1)" transform="translate(492 469)">
          <path id="I" d="M5 1L0 11l39 70 6-10L5 1"/>
          <path id="M" d="M207 73L169 1l-6 10-35 67L87 1l-5 10-40 77 26 49 40-76 15 27 26 49 41-76 11 22z"/>
          <path id="W" d="M409 1l-40 77-15-28-26-49-40 77-12-22-5 10 11 22 26 49 41-77 14 28 27 49 46-87-27-49"/>
          <path id="Y" d="M246 2l-84 161 26 49 84-162-26-48"/>
        </g>
      </Link>
      <g id="i" transform="translate(-372 -1147)">
        <path id="i-1" d="M322 13l6-12 399 750-6 10z"/>
        <path id="i-1-1"  fill="#000" fill-rule="nonzero" d="M6 1255l26 49-440 827-26-50z"/>
        <path id="i-1-1-1"  fill="#000" fill-rule="nonzero" d="M467 1651l6-12 184 346-6 10z"/>
        <path id="i-1-1-1-1"  fill="#000" fill-rule="nonzero" d="M580 1841l27 50-440 826-26-49z"/>
      </g>
      <g id="m"  fill="#000" fill-rule="nonzero" transform="translate(-393 563)">
        <path id="m-1" d="M922 1l27 49L26 1785l-26-50z"/>
      </g>
      <g id="w"  fill="#000" fill-rule="nonzero" transform="translate(823 -539)">
        <path id="w-1" d="M335 370l26 49-335 630-26-49z"/>
        <path id="w-1-1" d="M325 392l6-12 244 459-6 11z"/>
        <path id="w-1-1-1" d="M874 0l26 50-378 711-26-50z"/>
        <path id="w-1-1" d="M192 639l6-12 855 1608-5 10z"/>
      </g>
      <g id="w2"  fill="#000" fill-rule="nonzero" transform="translate(672 356)">
        <path id="w2-1" d="M132 255l6-12 855 1607-6 11z"/>
        <path id="w2-1-1" d="M434 0l26 50-218 410-27-49z"/>
        <path id="w2-1-1-1" d="M369 123l6-11 399 750-6 10z"/>
        <path id="w2-1-2" d="M297 543l26 49-296 557-26-49z"/>
        <path id="w2-1-2-1" d="M77 365l6-12 184 345-6 11z"/>
      </g>
      <g id="y2"  fill="#000" fill-rule="nonzero" transform="translate(431 639)">
        <path id="y2-1" d="M219 1l26 49L26 461 0 412z"/>
        <path id="y2-1-1" d="M129 173l6-12 62 117-6 10z"/>
        <path id="y2-1-2" d="M41 339l6-12 184 346-6 10z"/>
      </g>
      <g id="y"  fill="#000" fill-rule="nonzero" transform="translate(511 -296)">
        <path id="y-1" d="M0 365l6-12 217 408-6 11z"/>
        <path id="y-1-1" d="M400 0l26 50-296 557-27-50z"/>
        <path id="y-1-1-1" d="M285 265l6-12 115 216-6 10z"/>
      </g>
    </g>
  </g>
</svg> */}
