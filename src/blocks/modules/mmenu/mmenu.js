import Mmenu from 'mmenu-js';

(function () {
	new Mmenu("#menu", {
		"extensions": [
			"position-front",
			"pagedim-black"
		],
		"navbar": {
			"title": mmenuLogo
		},
		"navbars": [
			{
				"position": "bottom",
				"content": links
			}
		]
	});
})();