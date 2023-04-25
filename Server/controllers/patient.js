const Patient = require('../models/patient')


exports.getPatients = (req,res,next) => {

    Patient.fecthAll(patients => {
        res.json(patients)
    }) 

}


exports.getPatientByIDOrName = (req,res,next) => {

    const query = req.params.patientId

    Patient.findByIDOrName((query, patient) => {
        res.json(patient)
    })
    
}



exports.getPatientByName = (req,res,next) => {
    
}