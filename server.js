const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

// Middleware - Parse json files when header Content-type: application/json is used
app.use(express.json())
app.use(cors())

let list = [
    {
        id: 0,
        name: 'Nathan Baylon',
        age: 20
    },
    {
        id: 1,
        name: 'John Smith',
        age: 18
    },
    {
        id: 2,
        name: 'Lindsay Cayas',
        age: 20
    },
    {
        id: 3,
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
    // Block if user already exists
    if (list.some(user => user.name === req.body.name)) return res.sendStatus(409)
    // Generate a unique id for the new user
    const newUser = { id: list.length ? (list[list.length - 1].id + 1) : 0, ...req.body }
    list.push(newUser)
    res.sendStatus(201)
})

app.delete('/users/:id', (req, res) => {
    const userID = parseInt(req.params.id)

    // Check if the user.id is not in the list
    if (!list.some(user => user.id === userID)) return res.sendStatus(404)

    // If not filter out the id
    list = list.filter(user => user.id !== userID)
    res.sendStatus(200)
})

app.patch

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})