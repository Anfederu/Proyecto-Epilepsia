import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import PatientCard from '../Components/PatientCard'
import EventComponent from "../Components/EventComponent";
import ExamComponent from "../Components/ExamComponent";
import ButtonOffset from "../Components/ButtonOffset";
import PredictionComponent from "../Components/PredictionComponent";

const PatientDetail = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const patient = location.state;
    const numbers = [1,2,3,4,5,6,7]
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        console.log(index)
        setToggleState(index)
    }

    const handlePredictionRequest = () => {
        navigation("/request-prediction",{ state:patient})
    }

    return (
        <div>
            <div className="bloc-tabs">
                <button className={toggleState === 1? "activeTabs": "tabs"} onClick={() => toggleTab(1)}>Información general</button>
                <button className={toggleState === 2? "activeTabs": "tabs"} onClick={() => toggleTab(2)}>Predicciones</button>
            </div>
            { toggleState == 1 ?
            <div>
            <h1>Perfil del Paciente {patient.first_name} {patient.last_name}</h1>
            <PatientCard patient={patient} context="patientDetail"/>
            
            <h2>Historia clínica</h2>
            <button className="create-event-button">Registrar evento</button>
            {numbers.map((i)=>(<EventComponent/>))}
            <ButtonOffset/>
            <h2>Exámenes Disponibles</h2>
            <section className="exams-row">
            <ExamComponent type="examen"  row={1} exam="MRI" description="Imágenes de resonancia magnética" img="/icons/mri.png" />
            <ExamComponent type="examen" row={1} exam="Electroencefalograma" description="Registros de actividad cerebral" img="/icons/eeg.png" />
            <ExamComponent type="examen" row={1} exam="Micro ARNs" description="Perfiles de expresión en sangre" img="/icons/arn.png" />
            </section>
            <section className="exams-row">
            <ExamComponent type="examen" row={2} exam="Examen físico" description="Observación del estado físico del paciente" img="/icons/phisicalTest.png" />
            <ExamComponent type="examen" row={2} exam="Examen neuropsicológico" description="Test neuropsicológico para medir las habilidades motoras del paciente " img="/icons/psicoTest.png" />
            <ExamComponent type="medicamentos" row={2} exam="MRI" description="Imágenes de resonancia magnética" img="/icons/drugs.png" />
            </section>
            </div>
            :
            <div>
                <button onClick={handlePredictionRequest} className="create-event-button">Solicitar Predicción</button>
                {numbers.map((i)=>(<PredictionComponent/>))}
                <ButtonOffset/>
                
            </div>}
            
        </div>
    );
}

export default PatientDetail;
