const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Meower asd'
    })
})

app.post('/mews', (req, res) => {
    console.log(req.body)
})

app.listen(5000, () => {
    console.log('Listing on http://localhost:5000')
})
