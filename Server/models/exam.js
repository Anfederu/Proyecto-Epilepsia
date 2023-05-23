const db = require('../Utils/dataBase')
const path = require('path')


module.exports = class Exam {
    constructor(id,date, detail, format, file){

        this.id = id
        this.date = date
        this.detail = detail
        this.format = format
        this.file = file
    }


    static fetchRecentMRI(document_id){
        return db.execute(`SELECT * FROM exams where patient_document_id = ${document_id} and type = 'MRI' ORDER BY date DESC
        LIMIT 1`)
    }

    static fetchRecentEEG(document_id){
        return db.execute(`SELECT * FROM exams where patient_document_id = ${document_id} and type = 'EEG' ORDER BY date DESC
        LIMIT 1`)
    }
    static fetchRecentANR(document_id){
        return db.execute(`SELECT * FROM exams where patient_document_id = ${document_id} and type = 'ARN' ORDER BY date DESC
        LIMIT 1`)
    }

    static fetchByTypeAndPatient(document_id,type){
        return db.execute(`SELECT * FROM exams where patient_document_id = ${document_id} and type = '${type}'`)
    }

    
}