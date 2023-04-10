import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import PatientCard from "../Components/PatientCard";

const Patients = () => {
    const location = useLocation();
    const searchInput = location.state;

    const [patient, setPatient] = useState({});
    const [searchInputLocal, setSearchInputLocal] = useState("");

  
    useEffect(() => {
        axios.get("http://localhost:4000/patients").then((res) =>{
        
        setPatient(res.data.patients[0])
        
        })
    }, []);


    console.log(patient)

 //{users.map((user)=><p>{user.email}</p>)}

 function handleChange(event){
    setSearchInputLocal(event.target.value)
    console.log(searchInput)
}
    
    return (
        <div>
            <h1>Resultados de búsqueda para  {searchInput} </h1>
                        
            <PatientCard patient={patient} context="listPatients"/>
        </div>
    );
}

export default Patients;
