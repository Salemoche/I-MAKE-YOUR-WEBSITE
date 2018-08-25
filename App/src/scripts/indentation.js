import $ from "jquery";

//
// Indentation
//

export const indentation = (element, indent) => {
  for(var i = 0; i < element.length; i++) {
    element.eq(i).css('margin-left', indent * i+1 + 'px');
  }

}

//
// About
//

export const indentationAbout = () => {
  $(document).ready( function () {
    indentation($('.page__content__career').children(), 85);
    indentation($('.page__about .page__content__text').children(), 100);
  });
}

//
// About
//

export const indentationWork = () => {
  $(document).ready( function () {
    indentation($('.page__content__career').children(), 85);
    indentation($('.page__about .page__content__text').children(), 100);
  });
}


indentationAbout();
