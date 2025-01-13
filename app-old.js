
const htpp = require('http');
htpp.createServer((req, res) => {
    res.write('Hola mundo');
    res.end();
}).listen(8080);