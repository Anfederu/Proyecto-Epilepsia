const {sendMessage} = require('../Utils/rabbit')
module.exports = class QueueBufffer {
    static predict(message,patient_id) {
        try{
            sendMessage(message,patient_id)
            return `La predicción está haciendo procesada`
        }catch( error){
            console.log("Error:",error)
            return 'error al poner el mensaje en la cola'
        }
    }
}