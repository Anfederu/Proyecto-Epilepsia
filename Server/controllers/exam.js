const Exam = require('../models/exam')

exports.getExamByPatientAndType = (req,res,next) => {

    const patient_id = req.params.patientId
    const examType = req.query.type

    Exam.fetchByTypeAndPatient(patient_id, examType)
    .then(result => {
        res.json(result[0])
    })
    .catch(err => {
        console.log(err)
    })
}


exports.getRecentMRIByPatient = (req,res,next) => {

    const patient_id = req.params.patientId
    

    
    Exam.fetchRecentMRI(patient_id)
    .then(result => {
        
        res.json(result[0])
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getRecentEEGByPatient = (req,res,next) => {

    const patient_id = req.params.patientId
    

    Exam.fetchRecentEEG(patient_id)
    .then(result => {
        
        res.json(result[0])
    })
    .catch(err => {
        console.log(err)
    })
}

exports.getRecentARNByPatient = (req,res,next) => {

    const patient_id = req.params.patientId
    

    Exam.fetchRecentANR(patient_id)
    .then(result => {
        
        res.json(result[0])
    })
    .catch(err => {
        console.log(err)
    })
}


