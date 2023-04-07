import React from 'react';

const PatientCard = ({patient}) => {

    console.log(`patientcardddddd:${patient}`)

    function ageCalculator(){

    }

    return (
        <section className='patient-card'>
        <section className="patient-picture">
            <img className="patient-img" src='icons/patientAvatar.png'></img>
        </section>
        <section className='patient-info'>
            <ul className='patient-ul'>
                <li>Nombre: {patient.first_name} {patient.last_name}</li>
                <li>Genero: {patient.gender}</li>
                <li>Documento: {patient.id_document}</li>
                <li>Grupo Sanguineo: A+</li>
                <li>Email: {patient.email}</li>
            </ul>
        </section>

        <button className='patientDetail-button'>Ver Detalle</button>

        
            
        </section>
    );
}

export default PatientCard;
