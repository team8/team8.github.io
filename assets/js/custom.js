/*****************************************************************************/
/*                                                                                                                                  
/* General                                                                                                                          
/*                                                                                                                                  
/*****************************************************************************/
function resizeIframe(obj) {
    obj.style.height = (obj.parentNode.offsetWidth / 16 * 9) + "px";
}

/*****************************************************************************/
/*                                                                                                                                  
/* Off-Canvas Fix                                                                                                                   
/*                                                                                                                                  
/*****************************************************************************/

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.0.0',

    settings : {},

    init : function (scope, method, options) {
      this.events();
    },

    events : function () {
      $(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          e.preventDefault();
          $(this).closest('.off-canvas-wrap').toggleClass('move-right');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas',  function (e) {
          e.preventDefault();
          $(".off-canvas-wrap").removeClass("move-right");
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          e.preventDefault();
          $(this).closest(".off-canvas-wrap").toggleClass("move-left");
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          e.preventDefault();
          $(".off-canvas-wrap").removeClass("move-left");
        });
      $(window)
	.on('resize', function (e) {
	  if ($(this).width() > 640) {
	    e.preventDefault();
	    $(".off-canvas-wrap").removeClass("move-left");
	  }
	})
	.on('resize', function (e) {
	  if ($(this).width() > 640) {
	    e.preventDefault();
	    $(".off-canvas-wrap").removeClass("move-right");
          }
	})
    },

    reflow : function () {}
  };
}(jQuery, this, this.document));


/*****************************************************************************/
/*                                                                                                               

/* Infinite Image                                                                                                 

/*                                                                                                                

/*****************************************************************************/
$(function () {
    var $image = $('#container').children('img');
    function animate_img() {
        if ($image.css('top') == '0px') {
            $image.animate({top: '1000px'}, 2500, function () {
               $image.css('top','0px');
                animate_img();
            });
        } else {
            $image.animate({top: '1000px'}, 2500, function () {
                $image.css('top','0px');
                animate_img();
            });
        }
    }
    animate_img();
});
