const express = require('express')
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express()
const patientRoutes = require('./routes/patientRoutes')
const examsRoutes = require('./routes/examRoutes')
const predictionRoutes = require('./routes/predictionRoutes')
const notificationRoutes = require ('./routes/notificationRoutes')


app.use(bodyParser.json());


// use it before all route definitions
app.use(cors({origin: 'http://localhost:3000'}));



app.use(patientRoutes)
app.use(examsRoutes)
app.use(predictionRoutes)
app.use(notificationRoutes)


app.listen(4000, () => {
    console.log(" app listening at 4000 port")
})