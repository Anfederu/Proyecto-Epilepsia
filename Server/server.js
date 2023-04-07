const express = require('express')
var cors = require('cors');
const app = express()
const patients = require('./models/patients.json')


// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));

app.get('/', (req, res)=>{
    res.json({ "users":["user1","user2","user3"]})
})

app.get('/patients', (req, res)=>{
    res.json({"patients":patients})
})

app.listen(4000, () => {
    console.log(" app listening at 4000 port")
})