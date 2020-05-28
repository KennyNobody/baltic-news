(function initMap () {
	const mapBlock = document.querySelector('.map');

	var myMap;

	const links = document.querySelectorAll('.map-link');

	if (mapBlock) {
		ymaps.ready(init);
	}

	function init () {
		var Placemark = {};
		myMap = new ymaps.Map(mapBlock, {
			center: [54.73035542010973,20.48820783524934],
			zoom: 17
		}, {
			searchControlProvider: 'yandex#search'
		});
		myMap.behaviors.disable(['drag', 'rightMouseButtonMagnifier', 'scrollZoom'])

		if (links) {

			$('.map-link').each(function() {
				var obj = $(this).attr("data-coord");
				obj = JSON.parse(obj);
				myMap.geoObjects
				.add(new ymaps.Placemark(obj, {}, {
					preset: 'islands#greenDotIconWithCaption',
					iconColor: '#ed4543'
				}));

				this.addEventListener('click', function(e) {
					e.preventDefault();
					myMap.panTo(obj);
				})
			});
		}
	}
})();