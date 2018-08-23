import $ from "jquery";

export default $(document).ready( function () {

  //

  const r = Math.random()*255;
  const g = Math.random()*255;
  const b = Math.random()*255;

  const rB = r<255 ? r + 100 : 255;
  const gB = g<255 ? g + 100 : 255;
  const bB = b<255 ? b + 100 : 255;

  const brightColor = 'rgb(' + rB + ',' + gB + ',' + bB + ')';
  const darkColor = 'rgb(' + r + ',' + g + ',' + b + ')';

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

  const brightness = rgbToHsl(r+50, g+50, b+50)[2]; // 1 = bright

  console.log(brightness);

  const contrastColor = brightness>0.8 ? '#000' : '#fff';

  console.log(contrastColor);

  $('.hero__background').css('background-color', brightColor);
  $('.hero__color').css('color', brightColor);
  $('.contrast__color a').css('color', contrastColor);
  $('.darkColor').attr("stop-color", contrastColor);
  $('.brightColor').attr("stop-color", contrastColor);


  // $('#brightColor').attr("stop-color", 'rgb(' + rB + ',' + gB + ',' + bB + ')');
  // $('#darkColor').attr("stop-color", 'rgb(' + r + ',' + g + ',' + b + ')');

});
