var http = require ('http');

http.createServer(function(req, res){
  console.log('hello from server...');
  res.writeHead(200);
  res.write('hello from server response...');
  res.end();
}).listen(process.env.PORT || 3000);
