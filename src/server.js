import http from 'http'

const users = []

//http GET localhost:3333/users
//http POST localhost:3333/users

const server = http.createServer((req, res) => {
    const { method, url } = req

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))
    }

    if (method === 'POST' && url === '/users') {
        users.push({
            id: 1,
            name: 'John Doe',
            email: 'johndoe@example.com'
        })

        return res.end('Criação de usuário')
    }

    return res.end('Hello World')
})

server.listen(3333)