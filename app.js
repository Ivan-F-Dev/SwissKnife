const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use('/api', require('./routes/testRoute'))

const PORT = process.env.PORT || 5000

async function start() {
    try {
        await mongoose.connect("mongodb+srv://Ivan-swiss:ja5Osd8FUlFt0eHz@cluster0.ad1ni.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    } catch (e) {
        console.log('Server Error:', e.message)
        process.exit(1)
    }
}
start()






