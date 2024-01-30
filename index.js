
const http = require('http');

const server = http.createServer((req, res) => {
    if ( req.url === '/'){
        res.write('Odikpo Somkenechukwu');
        res.end();
    }
});

server.listen(8900);

console.log('Listening on port 8900...');