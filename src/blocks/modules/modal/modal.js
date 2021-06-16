import magnificPopup from 'magnific-popup';

$(document).ready(function () {
	$('.open-modal').magnificPopup({
		// type:'inline',
		showCloseBtn: false,
		items: {
			src: '#modal-news',
		},
		type: 'inline'
	});

	$('.modal__close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$('.modal-close').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	$('.modal__btn--cancel').on('click', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});

	function openModal() {
		$.magnificPopup.open({
			showCloseBtn: false,
			items: {
				src: '#modal-call',
			},
			type: 'inline'
		});
		(function () {
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

		document.addEventListener('keyup', function (event) {
			pressed.add(event.code);

			for (let code of codes) {
				if (!pressed.has(code)) {
					return;
				}
			}

			pressed.clear();

			func();
		});
	}

	runOnKeys(
		openModal,
		"Enter",
		"ControlRight"
	);
});

document.addEventListener('DOMContentLoaded', () => {
	(function inputFile() {
		const inputBlock = document.querySelectorAll('.file');

		for (let i = 0; i < inputBlock.length; i++) {
			initFileInput(inputBlock[i]);
		}

		function initFileInput(inputBlock) {
			let textBlock = inputBlock.querySelector('.file__text');
			let fieldBlock = inputBlock.querySelector('.file__field');

			fieldBlock.addEventListener('change', () => {
				updateImageDisplay();
			});

			function updateImageDisplay() {
				let currentFiles = fieldBlock.files;

				if (currentFiles.length === 0) {
					textBlock.textContent = 'Файлы не выбраны';
				} else {
					textBlock.textContent = currentFiles[0].name;
				}
			}
		}
	})();
});