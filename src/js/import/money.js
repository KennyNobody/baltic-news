window.addEventListener('load', function() {
	(function getMoneyBank(){
		$.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function(data) {
			$('#usd-info').html(data.Valute.USD.Value.toFixed(2));
			$('#eur-info').html(data.Valute.EUR.Value.toFixed(2));

			if (data.Valute.USD.Value > data.Valute.USD.previous) {
				$('#usd-title').addClass('change__title--up');
			} else {
				$('#usd-title').addClass('change__title--down');
			}

			if (data.Valute.EUR.Value > data.Valute.EUR.previous) {
				$('#eur-title').addClass('change__title--up');
			} else {
				$('#eur-title').addClass('change__title--down');
			}
		});
	})();

	(function getMoneyMMVB() {
		let usd;
		let usdState;

		let eur;
		let eurState;

		// let pln;
		// let plnState;

		let dateProd = new Date();

		dateProd.setDate(dateProd.getDate() - 1);

		let date = dateProd.getFullYear() + '-' + (dateProd.getUTCMonth() + 1) + '-' + (dateProd.getDate() - 1);

		$.getJSON( "https://iss.moex.com/iss/statistics/engines/futures/markets/indicativerates/securities/USD/RUB.json?from=" + date)
		.done(function(data) {
			usd = data.securities.data[1][3].toFixed(2);
			$('#usd-info-exchange').html(usd);

			if (data.securities.data[1][3] > data.securities.data[0][3]) {
				$('#usd-title-exchange').addClass('change__title--up');
			} else {
				$('#usd-title-exchange').addClass('change__title--down');
			}
		})
		.fail(function(data) { 
			console.log( "Ошибка получения данных от биржи ММВБ" ); 
		});

		$.getJSON( "https://iss.moex.com/iss/statistics/engines/futures/markets/indicativerates/securities/EUR/RUB.json?from=2020-11-09")
		.done(function(data) {
			eur = data.securities.data[1][3].toFixed(2);

			$('#eur-info-exchange').html(eur);

			if (data.securities.data[1][3] > data.securities.data[0][3]) {
				$('#eur-title-exchange').addClass('change__title--up');
			} else {
				$('#eur-title-exchange').addClass('change__title--down');
			}
		})
		.fail(function(data) { 
			console.log( "Ошибка получения данных от биржи ММВБ" ); 
		});

	})();
});