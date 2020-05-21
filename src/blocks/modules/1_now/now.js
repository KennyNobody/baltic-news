import Swiper from 'swiper';

(function(){
	let mySwiper = new Swiper ('.player__line', {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 0,
		freeMode: true,
		speed: 10000,
		autoplay: {
			delay: 0,
		},
	})
})()