import React from "react";
import { useNavigate } from 'react-router-dom';


const RequestPrediction = ({patient}) => {
    const navigation = useNavigate();
   


    const handleCancel = () => {
        navigation(`/patients/${patient.id}`,{ state:patient})
    }

  return (
    <div>
      <section className="request-prediction-container">
        <h3>Exámenes disponibles:</h3>

        <h4>MRI</h4>
        <section className="exam-info">
          <ul className="exam-ul">
            <li className="exam-li">Nombre del archivo:</li>
            <li className="exam-li">Fecha:</li>
          </ul>
        </section>
        <h4>EEG</h4>
        <section className="exam-info">
          <ul className="exam-ul">
          <li className="exam-li">Nombre del archivo:</li>
            <li className="exam-li">Fecha:</li>
          </ul>
        </section>
        <h4>Micro ARNs</h4>
        <section className="exam-info">
          <ul className="exam-ul">
          <li className="exam-li">Nombre del archivo:</li>
            <li className="exam-li">Fecha:</li>
          </ul>
        </section>
        <h4>Seguro que quieres solicitar una predicción a través de estos 3 exámenes?</h4>
        <section className="request-prediction-buttons">
            <button onClick={handleCancel} className="request-prediction-button">Cancelar</button>
            <button   className="request-prediction-button">Solicitar</button>
        </section>
      </section>
    </div>
  );
};

export default RequestPrediction;
