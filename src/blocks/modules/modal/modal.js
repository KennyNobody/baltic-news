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

	$('.modal-close').on('click', function(e){
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
		(function() {
			if (window.getSelection()) {
				let select = window.getSelection();
				let textarea = document.querySelector('.modal__input--inner');

				if (textarea) {
					textarea.innerText = select.toString();
				}
			}
		})();
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

(function(){
	const input = document.querySelectorAll('.file');

	if(input) {
		for (let i = 0; i < input.length; i++) {
			let field = input[i].querySelector('input');
			let title = input[i].querySelector('.file__title');
			field.addEventListener('change', function(){
				let name = this.files[0].name;
				title.innerText = name;
			})
		}
	}

})();