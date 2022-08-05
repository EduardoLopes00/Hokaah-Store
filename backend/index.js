const app = require('./app')
const http = require('http')
const server = http.createServer(app)

const port = process.env.API_PORT || 5000

server.listen(port, () => {
    console.log(`Server is running in the port ${port}`)
})
