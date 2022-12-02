var settings = {
	url: "https://api.easybroker.com/v1/properties",
	method: "GET",
	timeout: 0,
	headers: {
		"X-Authorization": "vc7t7o5uopriecledy5mrsd7qb3nml",
		"Access-Control-Allow-Origin": "*",
	},
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
