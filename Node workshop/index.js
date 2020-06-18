const express = require('express')
const { findAllBooks } = require('./model')

const app = express()

app.listen(3000, () => {
    console.log('Server is listening on port 3000. Ready to accept requests!')
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/books', (req, res) => {
    findAllBooks((books) => res.send(books))
})

