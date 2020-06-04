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
})();

(function toggleSearch(){
	const btnOpen = document.querySelector('.nav__search-btn');
	const btnClose = document.querySelector('.h-search__btn--close');
	const contain = document.querySelector('.nav');

	btnOpen.addEventListener('click', function(){
		contain.classList.add('nav--search');
	});

	btnClose.addEventListener('click', function(e){
		e.preventDefault();
		contain.classList.remove('nav--search');
	});
})();

(function scrollTop(){
	const btnScroll = document.querySelector('.toolbar__link--top');

	if (btnScroll) {
		btnScroll.addEventListener('click', function(e){
			e.preventDefault();
			window.scrollTo({
				top: 0,
				behavior: "smooth"
			});
		})
	}
})();