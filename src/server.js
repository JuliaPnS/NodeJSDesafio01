import http from 'node:http';


//const server --> está criando um server. HTTP.Create(...) quer dizer quero criar um server de acordo com o protocolo HTTP 
const server = http.createServer(async (req, res) => {
    const { method, url } = req
    //method = POST, PATCH, PUT, UPDATE, DELETE

    server.listen(3335)
})