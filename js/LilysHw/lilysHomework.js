const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const values = [7, 15, 12, 3];
//const values = [3, 4, 2, 5, 1];
const test1 = [3, 7, 15, 12];
const test2 = [15, 12, 7, 3];

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
	//Set the response HTTP header with HTTP status and Content type
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.end('Hello World\n');

	lilysHomework(values);
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

const permute = (arr, i, tmpIndex) => {
	let tmpArr = arr[i];
	arr[i] = arr[tmpIndex];
	arr[tmpIndex] = tmpArr;
};

const isSorted = arr => {
	let sortIncr = true;
	let sortDecr = true;

	//const values = [3, 7, 15, 12];

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i + 1]) {
			sortIncr = false;
		}

		if (arr[i] < arr[i + 1]) {
			sortDecr = false;
		}
	}

	return sortIncr || sortDecr;
};

const lilysHomework = arr => {
	if (isSorted(arr)) {
		return 0;
	}

	const saveIndexAsc = {};
	const saveIndexDesc = {};
	for (let i = 0; i < arr.length; i++) {
		saveIndexAsc[arr[i]] = i;
		saveIndexDesc[arr[i]] = i;
	}

	const ascSortedValue = Object.keys(saveIndexAsc).sort((a, b) => a - b);
	const descSortedValue = Object.keys(saveIndexDesc).sort((a, b) => b - a);

	const arrCpy = Object.values(arr);
	const arrCpy2 = Object.values(arr);

	let cycle1 = 0;
	let cycle2 = 0;

	for (let i = 0; i < arrCpy.length; i++) {
		if (ascSortedValue[i] !== arrCpy[i]) {
			var tmpIndex = saveIndexDesc[ascSortedValue[i]];
			if (i !== tmpIndex) {
				saveIndexDesc[ascSortedValue[i]] = i;
				saveIndexDesc[arrCpy[i]] = tmpIndex;
				permute(arrCpy, i, tmpIndex);
				cycle1++;
			}
		}

		if (descSortedValue[i] !== arrCpy2[i]) {
			var tmpIndex2 = saveIndexAsc[descSortedValue[i]];
			if (i !== tmpIndex2) {
				saveIndexAsc[descSortedValue[i]] = i;
				saveIndexAsc[arrCpy2[i]] = tmpIndex2;
				permute(arrCpy2, i, tmpIndex2);
				cycle2++;
			}
		}
	}

	var res = cycle1 < cycle2 ? cycle1 : cycle2;
	console.log(res);
	return res;
};
