const express = require('express')
const http = require('http')
const https = require('https')
const path = require('path')

const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const SignalServer = require('react-rtc-real/server/SignalServer.js');

app.get('/hello', function (req, res) {
    res.send('Hello World !')
})
app.use(express.static(path.join(__dirname, 'build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const server = http.createServer(app);

const signal = new SignalServer({ server });
signal.connect();

server.listen(3000, () => console.log('listen to 3000'));
