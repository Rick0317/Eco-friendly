const http = require('http');

const req = http.request('http://example.com', res => {
	const data = [];

	res.on('data', _ => data.push(_))
	res.on('end', () => console.log(data.join()))
  console.log(data)
});

req.end();