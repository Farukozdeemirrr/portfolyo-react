
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import React from 'react';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/experience' element={<Experience/>}/>
            <Route path='/project' element={<Projects/>}/>
          </Routes> 
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
