import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import axios from 'axios'
import Navbar from "./Components/NavBar";
import SearchBar from "./Components/SearchBar";
import Home from "./Pages/Home"
import Patients from "./Pages/Patients"
import PatientDetail from "./Pages/PatientDetail"
import AboutUs from "./Pages/AboutUs"



function App() {

    
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/aboutUs" element={<AboutUs/>}/>
        <Route path="/patients" element={<Patients/>}/>
        <Route path="/patients/:id" element={<PatientDetail/>}/>
      </Routes>      
      </Router>
      
    </div>
  );
}

export default App;
