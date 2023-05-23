import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExamComponent = (props) => {
    const navigation = useNavigate()

    const state = {
        patient:props.patient ,
        exam:props.exam
    }

    const handleViewHistory = () =>{ 
        navigation("/exam-history",{ state:state})
    }

    const handleUploadExam = () => {
        navigation("/upload-exam",{ state:state})
    }


    let imgStyle = ''

    if (props.row === 1){
        imgStyle = "card-img"
    }else{
        imgStyle = "card-image"
    }

    let title = ''

    if(props.exam === 'EEG'){
        title = 'Electro-encefalograma'
    }else if(props.exam === 'ARN') {
        title = 'Micro ARNs'
    }else{
        title = props.exam
    }

    return (
        <div className='exam-card'>
            <section className='img-section'>
                <img className={imgStyle} src={props.img}></img>
            </section>
            <section className='info-section'>
                <h3 className="titulo-terciario">{title}</h3>
                <p>{props.description}</p>
            </section>
            <section className='button-section'>
                <button onClick={handleUploadExam} className='card-button'>{props.type === "medicamentos" ? "Actualizar receta": "Asociar examen"}</button>
                <button onClick={handleViewHistory} className='card-button'>Ver historial</button>
            </section>

            
        </div>
    );
}

export default ExamComponent;
