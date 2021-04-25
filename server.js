const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// Middleware - Parse json files when header Content-type: application/json is used
app.use(express.json());
app.use(cors())

const list = [
    {
        name: 'Nathan Baylon',
        age: 20
    },
    {
        name: 'John Smith',
        age: 18
    },
    {
        name: 'Lindsay Cayas',
        age: 20
    },
    {
        name: 'Old Man',
        age: 89
    },

]

// Get all users in the list
app.get('/users', (req, res) => {
    res.json(list);
})

// Post a new item
app.post('/users', (req, res) => {
    list.push(req.body)
    res.sendStatus(200)
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})