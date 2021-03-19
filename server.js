const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hola mundo amazon web service')
})

server.listen(3000)
console.log('server on port 3000')
