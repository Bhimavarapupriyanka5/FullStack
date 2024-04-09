import React, { useState } from 'react';

import './Employelist.css';
function Employelist() {
  
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    Profile: '',
    JoinDate: '',
    Emp:'',
    Name:'',
    Gender:'',
    Designation:'',
    EmailorMobile:'',
    Department:'',
    Remainder:'',
    
    
  });
 
 
 
  return (
    
    <div>
      <div>EmployeList</div>
      
        
      
        <div className="step-navigation">
          
          <div>Company<div>
            <li>All<span className="text-danger">*</span></li>
              

            </div>
           
            <select>
                    <option value=""></option>
                    <option value="Male"></option>
                    <option value="Female"></option>
                    <option value="Other"></option>
                  </select>
          </div>
         
        </div>
        
          <div className='container-fluid' >
            <div className='row'>
              <div className='col-sm-6 my-5'>
                <div className='mx-5'>
                  <li>Profile<span className="text-danger"></span></li>
                 
                  <li>JoinDate<span className="text-danger"></span></li>
                
                  <li>Emp<span className="text-danger"></span></li>
                  
                  <li>Name<span className="text-danger"></span></li>
                  
                  <li>Gender<span className="text-danger"></span></li>
                 
                  <li>Designation<span className="text-danger"></span></li>
                  
                  <li>EmailorMobile<span className="text-danger"></span></li>
                  
                  <li>Department<span className="text-danger"></span></li>
                 
                  <li>Remainder<span className="text-danger"></span></li>
                 
                </div>
              </div>
             
           
       
            </div>
          </div>

        
                
      
    </div>
  );
};
export default Employelist;