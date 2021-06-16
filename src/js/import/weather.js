document.addEventListener('DOMContentLoaded', function() {
	(function getWeather(){

		console.log('Показываем погоду');

		let apiKey = 'ed1d68f4ad14003c568ffd93d53bb0f9';
		let iconUrl = 'http://openweathermap.org/img/w/';
		let temperature;
		let icon;
		let text;
		let iconParent = document.querySelector('.weather__icon');
		let textParent = document.querySelector('.weather__text');

		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=kaliningrad&appid=" + apiKey + "&lang=ru&units=metric")
		.done(function(data) {
			icon = iconUrl + data.weather[0].icon + '.png';
			iconParent.setAttribute("style", "background-image: url('" + icon + "')");

			text = Math.round(data.main.temp) + '°C ' + data.name;
			textParent.innerText = text;
		})
		.fail(function(data) { 
			console.log( "Ошибка получения данных от биржи ММВБ" ); 
		});
	})();
});