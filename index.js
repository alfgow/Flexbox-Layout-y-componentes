var myHeaders = new Headers();
myHeaders.append("X-Authorization", "vc7t7o5uopriecledy5mrsd7qb3nml");
myHeaders.append("Cookie", "rp=api.easybroker.com; source=api.easybroker.com");

var requestOptions = {
	method: "GET",
	headers: {
		"X-Authorization": "vc7t7o5uopriecledy5mrsd7qb3nml",
		Cookie: "rp=api.easybroker.com; source=api.easybroker.com",
		"Access-Control-Allow-Origin": "*",
	},
	redirect: "follow",
};

fetch("https://api.easybroker.com/v1/properties", requestOptions)
	.then((response) => response.text())
	.then((result) => console.log(result))
	.catch((error) => console.log("error", error));
