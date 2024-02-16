import './App.css';
import { Routes, Route } from 'react-router-dom';
import SideNavbar from './sidenavbar';
import { useState } from 'react';
import Login from './login';
import Dashboard from './Dashboard';

function App() {
  

  return (
    <div className="App">
     
     
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/sidenavbar' element={<SideNavbar/>} />
        </Routes>
     
    </div>
  );
}

export default App;
