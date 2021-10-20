import {Application} from "express";
const express = require('express')

const PORT = process.env.PORT || 5000

const app: Application = express()

app.listen(PORT, () => {
    console.log(`Server has benn starte on port ${PORT}...`)
})