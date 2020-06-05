(function(){
	const broadcastBtn = document.querySelector('.player__btn');
	let broadcastLink = 'http://bp.koenig.ru:8000/Baltic_Plus_mp3_128.mp3';
	
	let broadcast = new Howl({
		src: broadcastLink,
		// autoplay: true,
		// preload: true,
		html5: true
	});

	broadcastBtn.addEventListener('click', function(){
		if (broadcastBtn.classList.contains('player__btn--playing')) {
			broadcastBtn.classList.remove('player__btn--playing');
			broadcastBtn.classList.add('player__btn--disabled');

			if (player) {
				player.pause();
			}
		}

		if (broadcast.playing() == true) {
			broadcast.pause();
		} else {
			broadcast.play();
		}
	});

	broadcast.on('load', function(){
		broadcastBtn.classList.remove('player__btn--disabled');
		broadcastBtn.classList.add('player__btn--playing');
	});

	broadcast.on('play', function(){
		broadcastBtn.classList.remove('player__btn--disabled');
		broadcastBtn.classList.add('player__btn--pause');
		broadcastBtn.classList.remove('player__btn--playing');
		if (player) {
			player.pause();
		}
	});

	broadcast.on('pause', function(){
		broadcastBtn.classList.remove('player__btn--disabled');
		broadcastBtn.classList.remove('player__btn--pause');
		broadcastBtn.classList.add('player__btn--playing');
		broadcast.unload();
	});

	// Дальше идет плеер внутренний

	let utils = {
		formatTime: function (secs) {
			var minutes = Math.floor(secs / 60) || 0;
			var seconds = (secs - minutes * 60) || 0;
			return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
		},
		updateTimeTracker: function () {
			var self = this;
			var seek = player.seek() || 0;
			var currentTime = utils.formatTime(Math.round(seek));

			$('.audio__time').text(currentTime);
			progress.style.width = (((seek / self.duration()) * 100) || 0) + '%';

			if (self.playing()) {
				requestAnimationFrame(utils.updateTimeTracker.bind(self));
			}
		}
	};

	var player = new Howl({
		src: ['http://d.zaix.ru/k9k8.mp3'],
		onplay: function() {
			audioPlayed = true;
			var time = Math.round(player.duration());
			$('#duration').html(utils.formatTime(time));
			requestAnimationFrame(utils.updateTimeTracker.bind(this));
		},
		onend: function() {
			playerBtn.classList.remove('audio__btn--disabled');
			playerBtn.classList.remove('audio__btn--playing');
			playerBtn.classList.add('audio__btn--pause');
		},
	});

	const playerArticle = document.querySelector('.audio');

	if (playerArticle) {
		let playerBtn = playerArticle.querySelector('.audio__btn');
		let playerLink = playerArticle.getAttribute('data-sound');

		playerBtn.addEventListener('click', function(){
			if (player.playing() == true) {
				player.pause();
			} else {
				player.play();
			}
		});

		player.once('load', function(){
			broadcastBtn.classList.remove('audio__btn--disabled');
		});

		player.on('play', function(){
			if (broadcast) {
				broadcast.pause();
			}
			playerBtn.classList.remove('audio__btn--disabled');
			playerBtn.classList.add('audio__btn--playing');
			playerBtn.classList.remove('audio__btn--pause');
		});

		player.on('pause', function(){
			playerBtn.classList.remove('audio__btn--disabled');
			playerBtn.classList.remove('audio__btn--playing');
			playerBtn.classList.add('audio__btn--pause');
		})
	}
	

})();