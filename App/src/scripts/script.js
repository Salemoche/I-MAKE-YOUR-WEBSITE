import $ from "jquery";

//
// Indentation
//

const indentation = (element, indent) => {
  for(var i = 0; i < element.length; i+=2) {
    element[i].style.marginLeft =  indent * (i) + 'px';
  }

  for(var i = 1; i < element.length; i+=2) {
    element[i].style.marginLeft =  indent * (i-1) + 'px';
  }

}

const indentationRegular = (element, indent) => {
  for(var i = 0; i < element.length; i++) {
    element[i].style.marginLeft =  indent * (i) + 'px';
  }

}

//
// Hero Color
//

const r = Math.random()*255;
const g = Math.random()*255;
const b = Math.random()*255;

const rM = r<255 ? r + 50 : 255;
const gM = g<255 ? g + 50 : 255;
const bM = b<255 ? b + 50 : 255;

const rB = r<255 ? r + 100 : 255;
const gB = g<255 ? g + 100 : 255;
const bB = b<255 ? b + 100 : 255;

const brightColor = 'rgb(' + rB + ',' + gB + ',' + bB + ')';
const midColor = 'rgb(' + rM + ',' + gM + ',' + bM + ')';
const darkColor = 'rgb(' + r + ',' + g + ',' + b + ')';
const compColor = 'rgb(' + (255 - rM) + ',' + (255 - gM) + ',' + (255 - bM) + ')';


function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;

  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h /= 6;
  }

  // console.log(h, s, l);

  return [ h, s, l ];
}


const brightness = rgbToHsl(rM, gM, bM)[2]; // 1 = bright

let contrastColor = brightness>0.8 ? '#111' : '#fff';
contrastColor = brightness>0.8 ? 'rgb(' + (rM-150) + ',' + (gM-150) + ',' + (bM-150) + ')' : 'rgb(' + (rM+150) + ',' + (gM+150) + ',' + (bM+150) + ')';
// contrastColor = compColor;

const changeColor = () => {

  $('.hero__background').css('background-color', midColor);
  $('.hero__color').css('color', midColor);
  $('.hero__fill').attr('fill', midColor);
  $('.hero__border').css('border-color', midColor);
  $('.contrast__color a').css('color', contrastColor);
  $('.contrast__color').css('color', contrastColor);
  $('.complementary__color').css('color', compColor);


  $('.darkColor').attr("stop-color", darkColor);
  $('.brightColor').attr("stop-color", brightColor);

  // if(window.innerWidth > 375) {
  //   $('.darkColor').attr("stop-color", contrastColor);
  //   $('.brightColor').attr("stop-color", contrastColor);
  // } else {
  //   $('.darkColor').attr("stop-color", darkColor);
  //   $('.brightColor').attr("stop-color", brightColor);
  // }




  console.log('change color');
}


//
// Menu
//

const hideMenu = () => {
  var mX, mY, distance,
          $element  = $('.menu__content__logo');

  function calculateDistance(elem, mouseX, mouseY) {
      return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left+(elem.width()/2)), 2) + Math.pow(mouseY - (elem.offset().top+(elem.height()/2)), 2)));
  }

  $('.menu').removeClass('menu--landing');
  $('.menu').addClass('menu--closed');
  $('.darkColor').attr("stop-color", darkColor);
  $('.brightColor').attr("stop-color", brightColor);

  if(window.innerWidth > 375) {

    console.log('hover');

    $(document).mousemove(function(e) {
        mX = e.pageX;
        mY = e.pageY;
        distance = calculateDistance($element, mX, mY);


        if(distance <= 300) {
          $('.menu').removeClass('menu--closed');
          $('.darkColor.menu-logo').attr("stop-color", contrastColor);
          $('.brightColor.menu-logo').attr("stop-color", contrastColor);
        } else {
          $('.menu').addClass('menu--closed');
          $('.darkColor.menu-logo').attr("stop-color", darkColor);
          $('.brightColor.menu-logo').attr("stop-color", brightColor);
        }

    });
  }

}

//
// Open / Close Menu
//

const menuClick = () => {
  let open = false

  $('.menu__content__logo').click(() => {
    $('.menu').toggleClass('menu--closed');
    open = !open;

    if (open) {
      $('.darkColor.menu-logo').attr("stop-color", contrastColor);
      $('.brightColor.menu-logo').attr("stop-color", contrastColor);
    } else {
      $('.darkColor.menu-logo').attr("stop-color", darkColor);
      $('.brightColor.menu-logo').attr("stop-color", brightColor);
    }
  });
}

console.log('hi');


const landingMenu = () => {
  $('.darkColor').attr("stop-color", darkColor);
  $('.brightColor').attr("stop-color", brightColor);
  $('.menu .darkColor').attr("stop-color", contrastColor);
  $('.menu .brightColor').attr("stop-color", contrastColor);

  $('.menu').addClass('menu--landing');


}




export { indentation, indentationRegular, changeColor, midColor, hideMenu, landingMenu, menuClick };
