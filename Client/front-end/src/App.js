import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from "./Components/NavBar";
import Home from "./Pages/Home"
import Patients from "./Pages/Patients"
import PatientDetail from "./Pages/PatientDetail"
import AboutUs from "./Pages/AboutUs"
import RequestPrediction from "./Pages/RequestPrediction";
import ExamHistory from "./Pages/ExamHistory";



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
        <Route path="/request-prediction" element={<RequestPrediction/>}/>
        <Route path="/exam-history" element={<ExamHistory/>}/>


        
      </Routes>      
      </Router>
      
    </div>
  );
}

export default App;
