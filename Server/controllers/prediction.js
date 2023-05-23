const Prediction = require('./../models/prediction')

const QueueBufffer = require('../models/queueBuffer')


exports.getPredictionByPatient = (req,res,next) => {

    const patient_id = req.params.patientId
    

    Prediction.fetchByPatient(patient_id)
    .then(result => {
        //console.log(result[0])
        res.json(result[0])
    })
    .catch(err => {
        console.log(err)
    })
}


exports.predict = (req,res,next) => {

    const body = req.body
    
    const message = JSON.stringify(body)
   
    const response = QueueBufffer.predict(message)
   

   res.send(response)
}

exports.createPrediction = (req,res,next) => {

    const patient_id = req.params.patientId
   
    const response  = Prediction.createPrediction(patient_id)

    res.send(response)
   
}
