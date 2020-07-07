var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist/',
  port: 8000
});

server.start(function () {
  console.log('Server start with localhost', server.port);
});
