var http = require('http')
var os = require('os')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var t = '<ul>'
    os.cpus().forEach(item => {
        t += ('<li>'+JSON.stringify(item)+'</li>')
    })
    t+='</ul>'
    res.write('<h1>XueBaGoD</h1>'+t)
    res.end()
}).listen(80)