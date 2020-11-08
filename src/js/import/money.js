window.addEventListener('load', function() {
	(function getMoney(){
		$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {
			$('#usd-info').html(data.Valute.USD.Value.toFixed(2));
			$('#eur-info').html(data.Valute.EUR.Value.toFixed(2));
			$('#pln-info').html(data.Valute.PLN.Value.toFixed(2));
		});
	})();
});