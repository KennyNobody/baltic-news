(function(){
	const broadcastBtn = document.querySelector('.player__btn');
	let broadcastLink = 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3';
	
	let broadcast = new Howl({
		src: broadcastLink,
		// autoplay: true,
		preload: true,
		html5: true
	});

	broadcastBtn.addEventListener('click', function(){
		
		if (broadcast.playing() == true) {
			broadcast.pause();
		} else {
			player.pause();
			broadcast.play();
		}
	});

	broadcast.once('load', function(){
		broadcastBtn.classList.remove('player__btn--disabled');
	});

	broadcast.on('play', function(){
		broadcastBtn.classList.remove('player__btn--disabled');
		broadcastBtn.classList.add('player__btn--pause');
		broadcastBtn.classList.remove('player__btn--playing');
	});

	broadcast.on('pause', function(){
		broadcastBtn.classList.remove('player__btn--disabled');
		broadcastBtn.classList.remove('player__btn--pause');
		broadcastBtn.classList.add('player__btn--playing');
	})

	// Дальше идет плеер внутренний

	const playerArticle = document.querySelector('.audio');
	let playerBtn = playerArticle.querySelector('.audio__btn');
	let playerLink = playerArticle.getAttribute('data-sound');

	let player = new Howl({
		src: playerLink,
		preload: true,
		html5: true
	});

	playerBtn.addEventListener('click', function(){
		if (player.playing() == true) {
			player.pause();
		} else {
			player.play();
		}
	});

	player.on('play', function(){
		broadcast.pause();
	});

	player.once('load', function(){
		broadcastBtn.classList.remove('audio__btn--disabled');
	});

	player.on('play', function(){
		broadcast.pause();
		playerBtn.classList.remove('audio__btn--disabled');
		playerBtn.classList.add('audio__btn--playing');
		playerBtn.classList.remove('audio__btn--pause');
	});

	player.on('pause', function(){
		playerBtn.classList.remove('audio__btn--disabled');
		playerBtn.classList.remove('audio__btn--playing');
		playerBtn.classList.add('audio__btn--pause');
	})

})();