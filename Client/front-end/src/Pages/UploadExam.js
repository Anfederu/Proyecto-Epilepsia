import React from 'react';
import UploadExamComponent from '../Components/UploadExamComponent'
import { useLocation } from "react-router-dom";
import ModalSelectFile from '../Components/ModalSelectFile/ModalSelectFile';

const UploadExam = () => {
    const location = useLocation();
    const patient = location.state.patient

    const exam = location.state.exam
    return (
        <div className='request-prediction-page'>
            <h1 className="titulo-principal">Subir {exam} para el paciente {patient.first_name} {patient.last_name}</h1>
            <UploadExamComponent patient={patient}/>
           
        </div>
    );
}

export default UploadExam;