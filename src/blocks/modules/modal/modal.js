import magnificPopup from 'magnific-popup';

$(document).ready(function() {
	$('.open-modal').magnificPopup({
		// type:'inline',
		showCloseBtn: false,
		items: {
			src: '#modal-news',
		},
		type: 'inline'
	});

	$('.modal__close').on('click', function(e){
		e.preventDefault();                                                 
		$.magnificPopup.close();
	});

	// $(document).on('keydown',function (event) {
	// 	if (event.key == 13 && event.key == 17) {
	// 		console.log('Нажади')
	// 	}
	// })

	function openModal() {
		$.magnificPopup.open({
			showCloseBtn: false,
			items: {
				src: '#modal-call',
			},
			type: 'inline'
		});
	}

	function runOnKeys(func, ...codes) {
		let pressed = new Set();

		document.addEventListener('keyup', function(event) {
			pressed.add(event.code);

			for (let code of codes) { 
				if (!pressed.has(code)) {
					return;
				}
			}

			pressed.clear();

			func();
		});

		// document.addEventListener('keyup', function(event) {
		// 	pressed.delete(event.code);
		// });
	}

	runOnKeys(
		openModal,
		"Enter",
		"ControlRight"
		);
});