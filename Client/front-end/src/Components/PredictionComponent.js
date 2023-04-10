import React from 'react';

const PredictionComponent = ({prediction}) => {
    return (
        <section className='event-section'>
        <section className='event-info'>
            <ul className='event-ul'>
                <li className='event-li'>Predicción ID:</li>
                <li className='event-li'>Fecha:</li>
                
            </ul>

        </section>
           
           
            <button className='event-detail-button'>Ver detalle</button>
        </section>
    );
}

export default PredictionComponent;
