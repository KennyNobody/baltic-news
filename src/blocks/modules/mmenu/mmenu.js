import Mmenu from 'mmenu-js';

(function() {
	new Mmenu( "#menu", {
		"extensions": [
		"pagedim-black"
		],
		"navbar": {
			"title": "Baltic-News"
		},
		"navbars": [
		{
			"position": "bottom",
			"content": links
		}
		]
	});
})();