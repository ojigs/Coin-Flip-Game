const http = require('http')
const fs = require('fs')
const url = require('url')
const querystring = require('querystring')
const figlet = require('figlet')

const randomGen = () => Math.floor(Math.random()*2)
let random = randomGen()



const server = http.createServer((req, res) => {
    const page = url.parse(req.url).pathname
    const params = querystring.parse(url.parse(req.url).query)
    console.log(page)

    switch (page) {
        case '/': {
            fs.readFile('index.html', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.write(data)
                res.end()
            })
            break;
        }

        case '/css/style.css': {
            fs.readFile('css/style.css', (err, data) => {
                res.write(data)
                res.end()
            })
            break;
        }

        case '/img/head.png': {
            fs.readFile('img/head.png', (err, data) => {
                res.write(data)
                res.end()
            })
            break;
        }

        case '/img/tail.png': {
            fs.readFile('img/tail.png', (err, data) => {
                res.write(data)
                res.end()
            })
            break;
        }

        case '/js/main.js': {
            fs.readFile('js/main.js', (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/javascript'})
                res.write(data)
                res.end()
            })
            break;
        }

        case '/api': {
            res.writeHead(200, {'Content-Type': 'application/json'})
            const objToJson = {
                value: random
            }
            res.end(JSON.stringify(objToJson))
            random = randomGen()
            console.log(random)
            break;
        }

        default: {
            figlet('404!!', (err, data) => {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                res.write(data);
                res.end();
            });
        }
    }
})

server.listen(5000)