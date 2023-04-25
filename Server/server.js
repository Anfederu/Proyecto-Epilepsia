const express = require('express')
var cors = require('cors');
const app = express()
const patientRoutes = require('./routes/patientRoutes')


// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));



app.use(patientRoutes)

app.listen(4000, () => {
    console.log(" app listening at 4000 port")
})