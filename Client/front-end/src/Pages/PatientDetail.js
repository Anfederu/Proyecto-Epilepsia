import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import PatientCard from '../Components/PatientCard'
import EventComponent from "../Components/EventComponent";
import ExamComponent from "../Components/ExamComponent";
import ButtonOffset from "../Components/ButtonOffset";

const PatientDetail = () => {
    const location = useLocation();
    const patient = location.state;
    const numbers = [1,2,3,4,5,6,7]
    return (
        <div>
            <h1>Perfil del Paciente {patient.first_name} {patient.last_name}</h1>
            <PatientCard patient={patient}/>
            
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
    );
}

export default PatientDetail;
