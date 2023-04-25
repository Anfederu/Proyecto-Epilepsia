import React from 'react';
import PredictionComponent from '../Components/PredictionComponent';
import ButtonOffset from '../Components/ButtonOffset';
import { useLocation } from 'react-router-dom';


const ExamHistory = () => {

    const location = useLocation()
    const patient = location.state.patient

    const exam = location.state.exam

    console.log(exam)

    const numbers = [1,2,3,4,5,6,7]
    return (
        <div>
            <h1>Historial de examenes {exam} para el pacieente {patient.first_name}</h1>
            {numbers.map((i)=>(<PredictionComponent/>))}
            <ButtonOffset/>
            
        </div>
    );
}

export default ExamHistory;
