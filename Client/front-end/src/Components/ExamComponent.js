import React from 'react';

const ExamComponent = (props) => {

    let imgStyle = ""

    if (props.row === 1){
        imgStyle = "card-img"
    }else{
        imgStyle = "card-image"
    }
    return (
        <div className='exam-card'>
            <section className='img-section'>
                <img className={imgStyle} src={props.img}></img>
            </section>
            <section className='info-section'>
                <h3>{props.exam}</h3>
                <p>{props.description}</p>
            </section>
            <section className='button-section'>
                <button className='card-button'>{props.type === "medicamentos" ? "Actualizar receta": "Actualizar examen"}</button>
                <button className='card-button'>Ver historial</button>
            </section>

            
        </div>
    );
}

export default ExamComponent;
