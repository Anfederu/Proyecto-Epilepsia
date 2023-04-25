import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios'
import PatientCard from "../Components/PatientCard";

const Patients = () => {
    const location = useLocation();
    const searchInput = location.state;

    const [patients, setPatients] = useState({});
    const [searchInputLocal, setSearchInputLocal] = useState("");
    const numbers = [1,2,3,4,5,6,7]
  
    useEffect(() => {
        axios.get("http://localhost:4000/patients").then((res) =>{
        
        setPatients(res.data.patients)
        
        })
    }, []);


    console.log(patients)

 //{users.map((user)=><p>{user.email}</p>)}

 function handleChange(event){
    setSearchInputLocal(event.target.value)
    //console.log(searchInput)
}
    
    return (
        <div>
            <h1>Resultados de búsqueda para  {searchInput} </h1>
            {patients.map((patient)=>(<PatientCard patient={patient} context="listPatients"/>))}         
            
        </div>
    );
}

export default Patients;
