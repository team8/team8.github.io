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
    var $image1 = $('#animate1');
    var $image2 = $('#animate2');
    function animate_img1() {
        $image1.animate({left: '+1000px'}, 20000, function () {
	    $image1.css('left','-1000px');
	    animate_img1();
        });
    }
    function animate_img2() {
        $image2.animate({left: '+1000px'}, 10000, function () {
	    $image2.css('left','-2000px');
	    animate_img()2;
        });
    }
    animate_img1();
    animate_img2();
});

/*****************************************************************************/
/*
/* Infinite Image temp                                                                                                
/*
/*****************************************************************************/
$(function () {
    var $image = $('#container').children('img');
    function animate_img() {
        if ($image.css('top') == '0px') {
            $image.animate({left: '+1000px'}, 20000, function () {
	    $image.css('left','-1000px');
	    animate_img1();
        });
        } else {
            $image.animate({left: '+1000px'}, 20000, function () {
	    $image.css('left','-1000px');
	    animate_img1();
        });
        }
    }
    animate_img();
});
