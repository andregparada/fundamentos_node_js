import http from 'http'

const server = http.createServer((req, res) => {
    return res.end('Hello Ignite')
})

server.listen(3333)