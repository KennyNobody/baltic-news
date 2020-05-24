// https://www.daterangepicker.com/

import daterangepicker from 'daterangepicker';

( function initDatePicker(){
	// $('input[name="dates"]').daterangepicker({
	// 	singleDatePicker: true,
	// 	opens: 'left',
	// 	locale: {

	// 	}
	// });

	$('input[name="dates"]').daterangepicker({
		"timePicker24Hour": true,
		"locale": {
			"format": "MM/DD/YYYY",
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
})();