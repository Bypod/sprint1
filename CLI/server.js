const http = require('http');
const {parse} = require('querystring')
const {tokenGenerate} = require('./token')
const {doublelist} = require('./linked')


const server = http.createServer((req, res) => {
    if(req.method === 'POST'){
        var body = '';
        req.on('data', function(data){
            body+=data;
            var username = parse(body).username
            
            res.end(`<h1>Token created for: ${username}</h1>\nToken: ${tokenGenerate(username)}`)
        })
    } else {
        res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Document</title>
            </head>
            <body>
                <form action="/" method="post">
                    <input type="text" name="username" placeholder="token search...">
                    <button onclick=>generate</button>
                </form>
            </body>
            </html>
            `)
    }
})

server.listen(3000)




