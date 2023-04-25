
const path = require('path')


module.exports = class Exam {
    constructor(id,date, detail, format, file){

        this.id = id
        this.date = date
        this.detail = detail
        this.format = format
        this.file = file
    }


    // add patient to the db
    save() {        
        
    }

    //delete a patient form the db

    static deleteById(id){
        
    }

    static fecthAll() {
        
        
    }

    static findById(id){
       
    }
}