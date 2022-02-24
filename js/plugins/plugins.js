var swiper_hero = new Swiper('.swiper.hero', {
  speed: 2000,
  loop: true,
  parallax: true,
  effect: 'fade',
  pagination: {
    clickable: true,
    type: 'fraction',
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

});

var swiper_feedback = new Swiper('.swiper.client-feedback-left', {
  speed: 2000,
   loop: true,
   effect: 'fade',
   fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
  autoplay: {
    delay: 2500,
      disableOnInteraction: false,
  },

});

var swiper_videos = new Swiper('.swiper.videos', {
  speed: 500,
   loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    },
  autoplay: {
    delay: 2500,
      disableOnInteraction: false,
  },

});


/* AOS  */
AOS.init({
  duration: 1000,
});

window.addEventListener('scroll', () => indicateScrollBar())

function indicateScrollBar() {
  const distanceFromPageTop = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (distanceFromPageTop / height) * 100;
  document.querySelector(".scroll-bar").style.width = `${scrolled}%`;
}
(function ($) {
	"use strict";
// Timeline Scroll Section
	// --------------------------------------------------------------
	var items = $(".reacttimeline li, .journey-list li"),
	timelineHeight = $(".journey-list").height(),
	greyLine = $('.default-line'),
	lineToDraw = $('.draw-line');
  greyLine.height(timelineHeight);

	if(lineToDraw.length) {
	  	$(window).on('scroll', function () {

	    var redLineHeight = lineToDraw.height(),
	    greyLineHeight = greyLine.height(),
	    windowDistance = $(window).scrollTop(),
	    windowHeight = $(window).height() / 2,
	    timelineDistance = $(".reacttimeline").offset().top;

		    if(windowDistance >= timelineDistance - windowHeight) {
		      	var line = windowDistance - timelineDistance + windowHeight;
		      	if(line <= greyLineHeight) {
			        lineToDraw.css({
			          'height' : line + 20 + 'px'
			        });
		      	}
		    }

		    var bottom = lineToDraw.offset().top + lineToDraw.outerHeight(true);
		    items.each(function(index){
		      var circlePosition = $(this).offset();
		      	if(bottom > circlePosition.top) {
		        	$(this).addClass('in-view');
		      	} else {
		        	$(this).removeClass('in-view');
		      	}
		    });
	  	});
	}

})(jQuery);