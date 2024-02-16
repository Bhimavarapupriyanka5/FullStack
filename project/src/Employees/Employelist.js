import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Employelist() {
  const navigate = useNavigate();
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
  const [imageData, setImageData] = useState(null);
  const [step, setStep] = useState(1);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Convert the uploaded image to a Base64 string
      const reader = new FileReader();
      reader.onload = (event) => {
        setImageData(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };
  const handleSubmi = () => {
    const allUserDataArray = JSON.parse(localStorage.getItem('allUserData')) || [];
    const userKey = Math.random().toString(36).substring(7);
    allUserDataArray.push({ userKey, formData, imageData });
    localStorage.setItem('allUserData', JSON.stringify(allUserDataArray));
    navigate('/employee-list');
  };
  return (
    
    <div>
        
      <form noValidate onSubmit={handleSubmi} validtae>
        <div className="step-navigation">
          <div className={`step ${step === 1 ? 'active' : ''} pointer `}>
            Employe list
          </div>
          <div className={`step ${step === 1 ? 'active' : ''} pointer `}>
            Company
            <div>
            <label>All</label>

            </div>
           
            <select
                    // name="All"
                    // className="form-control "
                    // value={formData.Gender}
                    onChange={handleInputChange}
                  >
                    <option value=""></option>
                    <option value="Male"></option>
                    <option value="Female"></option>
                    <option value="Other"></option>
                  </select>
          </div>
         
        </div>
        {step === 1 && (
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6 my-5 '>
                <div className='mx-5'>
                  <li>Profile<span className="text-danger"></span></li>
                  <ui type='text' className="mb-3 w-75" name='employeeNo' value={formData.employeeNo} onChange={handleInputChange} />
                  <li>JoinDate<span className="text-danger"></span></li>
                  <ui type="text" name="fullName" className="mb-3 w-75" value={formData.fullName} onChange={handleInputChange} required />
                  <li>Emp<span className="text-danger"></span></li>
                  <ui type="text" name="fatherName" className='w-75 mb-3' value={formData.fatherName} onChange={handleInputChange} required />
                  <li>Name<span className="text-danger"></span></li>
                  <ui type="email" name="email" className='mb-3 w-75' value={formData.email} onChange={handleInputChange} required />
                  <li>Gender<span className="text-danger"></span></li>
                  <ui type="tel" name="mobile" className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required />
                  <li>Designation<span className="text-danger"></span></li>
                  <ui type="tel" name="mobile" className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required />
                  <li>EmailorMobile<span className="text-danger"></span></li>
                  <ui type="tel" name="mobile" className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required />
                  <li>Department<span className="text-danger"></span></li>
                  <ui type="tel" name="mobile" className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required />
                  <li>Remainder<span className="text-danger"></span></li>
                  <ui type="tel" name="mobile" className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required />
                </div>
              </div>
             
           
       
            </div>
          </div>

        )}
                
      </form>
    </div>
  );
};
export default Employelist;