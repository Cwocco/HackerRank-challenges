const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const price = [13, 9, 23, 19, 788, 786, 50, 35, 20];
//const price = [5, 10, 3];

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
	//Set the response HTTP header with HTTP status and Content type
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');

	minimumLoss(price);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

// Complete the minimumLoss function below.

const minimumLoss = price => {
	var minimum_loss = 999999999;
	var priceCpy = Object.values(price);
	var sortedPrice = Object.values(price).sort((a, b) => a - b);
	var i = 1;
	var tmp = 0;

	while (i < priceCpy.length) {
		tmp = sortedPrice[i] - sortedPrice[i - 1];

		if (
			tmp < minimum_loss &&
			priceCpy.indexOf(sortedPrice[i]) <
				priceCpy.indexOf(sortedPrice[i - 1])
		) {
			minimum_loss = tmp;
		}

		i++;
	}
	return minimum_loss;
};
