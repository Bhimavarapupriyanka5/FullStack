import './App.css';
import {  Routes, Route} from 'react-router-dom';
import LoginForm from './Components/Login';
import Dashboard from './Components/Dashboard';
import SideNavbar from './Components/Navbar';

import Createemploye from './Employees/Createemploye';
import Employelist from './Employees/Employelist';




function App() {
  return (
  <Routes>
          <Route path='/' element={<LoginForm/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/navbar' element={<SideNavbar/>} />
         
          <Route path='/createemployee' element={<Createemploye/>} />
          <Route path='/employelist' element={<Employelist/>} />
                
              
             
         
        
         
         
      
      </Routes>   
  );
}

export default App;

