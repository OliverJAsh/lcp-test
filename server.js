const express = require('express')

const app = express()

app.get('/jank.js', (req, res) => {
    setTimeout(() => {
        const path = __dirname + '/jank.js';
        res.sendFile(path)
    }, 50);
})

app.use(express.static('.'))

app.listen(8080)