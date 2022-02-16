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
