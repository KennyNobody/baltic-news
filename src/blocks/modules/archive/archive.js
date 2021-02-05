// https://www.daterangepicker.com/

import daterangepicker from 'daterangepicker';

( function initDatePicker(){

	$('input[name="dates"]').daterangepicker({
		"timePicker24Hour": true,
		"locale": {
			"format": "DD.MM.YYYY",
			"separator": " - ",
			"applyLabel": "Принять",
			"cancelLabel": "Отмена",
			"fromLabel": "От",
			"toLabel": "До",
			"customRangeLabel": "Custom",
			"weekLabel": "Н",
			"autoApply": true,
			"daysOfWeek": [
			"Вс",
			"Пн",
			"Вт",
			"Ср",
			"Чт",
			"Пт",
			"Сб"
			],
			"monthNames": [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Oктябрь",
			"Ноябрь",
			"Декабрь"
			],
			"firstDay": 1
		},
		"opens": "left",
		"drops": "auto",
		// "startDate": startDateText,
		// "endDate": "05/25/2020",
		"buttonClasses": "archive__btn",
		"applyButtonClasses": "archive__btn--submit",
		"cancelClass": "archive__btn--cancel"
	});

	$('input[name="dates"]').on('change', function() {
		let dateStart = this.value.split(' - ')[0];
		let dateEnd = this.value.split(' - ')[1];

		location.href = document.location.protocol + '//' + document.location.host + '/category/novosti/?datafrom=' + dateStart + '&datato=' + dateEnd;
	})
})();