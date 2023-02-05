import './index.css'
import React from "react";
import {Routes, Route,  BrowserRouter as Router} from 'react-router-dom'  
import Navbar from './components/Navbar';
import Patient from './components/Patient';
import Side from './components/Side';
import Login from './components/Login';
import Register from './components/Register'
import Doctor from './components/Doctor'
import Worker from './components/Worker';
import AllPatients from './components/allPatients';
function App() {
  return (
    <Router >
       
      <Side/>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Doctor/>}/> 
      <Route path="/dashboard/:room" element={<Patient/>}/> 
    
      <Route path="/login" element={<Login/>}/>  
      <Route path="/register" element={<Register/>}/> 
      <Route path="/doctor" element={<Doctor/>}/> 
      <Route path="/worker" element={<Worker/>}/> 
      <Route path="/patients" element={<AllPatients/>}/> 
       
      </Routes>
     
    </Router>
  );
}

export default App;
