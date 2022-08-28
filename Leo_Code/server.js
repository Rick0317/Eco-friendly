
const http = require('http');
// req stores requester's info, res stores response object i.e. what's sent to user
const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html')
  // content sent to browser
  res.write('<p>hello, ninjas</p>');
  res.write('<p>hello, again, ninjas</p>');
  // end of content sent to browser
  res.end()
});

// localhost is the default value for 2nd argument
// localhost: like a domain name on the web (bbc.com) connecting back to self
// 3000 port number --> kind of like a radio frequency. 
// "Doors" into computers for information to be seperated 
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});