const amqp = require('amqplib');
const Notification = require('../models/notification')
const Prediction = require('../models/prediction')





const rabbitSettings = {
    protocol: "amqp",
    hostname: "34.125.33.241",
    port: "5672",
    username: "epilepsy_user",
    password: "ep123",
    vhost: "/"
}




exports.sendMessage = async (input,patient_id) =>{
    const queueName = 'my-predictions';
    try{
        const connection = await amqp.connect(rabbitSettings);
        console.log("conexión creada")
        const channel = await connection.createChannel();
        await channel.assertQueue(queueName);        
        channel.sendToQueue(queueName, Buffer.from(input));

        console.log(" se puso en la cola los mensajes")
        this.consumeMessage(patient_id)
        
        
    }catch(error){
        console.log("Error:",error)
    }
}

 exports.consumeMessage = async (patient_id) => {
    const queueAName = 'my-predictions-anws';
    let messageConsumed = ""
    try{
        const connection = await amqp.connect(rabbitSettings);
        console.log("conexión creada")
        const channel = await connection.createChannel();
        await channel.assertQueue(queueAName, { durable: false });        
        channel.consume(queueAName, (message) => {
            console.log('Received message:', message.content.toString());
            messageConsumed = message.content.toString()
             onNewMessage(messageConsumed,patient_id) 
            channel.ack(message);
          });

        return messageConsumed

        
    }catch(error){
        console.log("Error:",error)
    }
}  

const onNewMessage = (message,patient_document_id) => {
    const response = JSON.parse(message)
    console.log(response)
    const prediction_id = response.patient_id
    const label= response.Resultado
    
    Notification.createNotification(`La predicción para el paciente con el número de documento ${patient_document_id} está lista`)
    Prediction.updatePrediction(prediction_id, label)
}


