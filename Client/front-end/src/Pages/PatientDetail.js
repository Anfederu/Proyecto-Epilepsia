import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import PatientCard from '../Components/PatientCard'
import EventComponent from "../Components/EventComponent";

const PatientDetail = () => {
    const location = useLocation();
    const patient = location.state;
    const numbers = [1,2,3,4,5,6,7,8,9,1,0,11,12]
    return (
        <div>
            <h1>Perfil del Paciente {patient.first_name} {patient.last_name}</h1>
            <PatientCard patient={patient}/>
            
            <h2>Historia clínica</h2>
            <button className="create-event-button">Registrar evento</button>
            {numbers.map((i)=>(<EventComponent/>))}
            <h2>Exámenes Disponibles</h2>
        </div>
    );
}

export default PatientDetail;
