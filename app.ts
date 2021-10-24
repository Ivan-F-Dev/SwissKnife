import {Application} from "express";

const express = require('express')

const PORT = process.env.PORT || 5000

const app: Application = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', require('./routes/testRoute'))

app.get('/', ((req, res) => {
    res.send(`    <h1>Корневой адресс сервера</h1>`)
}))

app.listen(PORT, () => {
    console.log(`Server has benn starte on port ${PORT}...`)
})