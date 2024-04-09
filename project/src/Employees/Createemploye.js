import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Createemploye.css';
function Createemploye() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Step 1: Basic Details
    employeeNo: '',
    presentAddress: '',
    cardNo: '',
    permanentAddress: '',
    fullName: '',
    fatherName: '',
    city: '',
    pinCode: '',
    email: '',
    companyName: '',

    // Step 2: Education Qualification
    collegeName: '',
    specification: '',
    cgpa: '',
    graduationYear: '',
    awardName: '',
    gift: '',
    awardDate: '',
    joinDate: '',
    //Step 3: Work Experience
    Experince: '',
    EmployeNo: '',
    Salary: '',
    EmployeName: '',

    // Step 4: Bank Details
    bankName: '',
    accNo: '',
    ifscCode: '',
    salary: '',
    loanName: '',
    loanDate: '',
    loanAmount: '',
    //Step 5: Proof Details
    adharDetails: '',
    IdProof: '',
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
      <div>Createemploy</div>
      <form noValidate onSubmit={handleSubmi} validtae>
        <div className="step-navigation">
          <div className={`step ${step === 1 ? 'active' : ''} pointer `}>
            Basic Details
          </div>
          <div className={`step ${step === 2 ? 'active' : ''} pointer`}>
            Education Qualification
          </div>
          <div className={`step ${step === 3 ? 'active' : ''} pointer`}>
            Work Experience
          </div>
          <div className={`step ${step === 4 ? 'active' : ''} pointer`}>
            Bank Details
          </div>
          <div className={`step ${step === 5 ? 'active' : ''} pointer`}>
            Proof Details
          </div>
        </div>
        {step === 1 && (
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-sm-6 my-5 '>
                <div className='mx-5'>
                  <li>Emp No<span className="text-danger">*</span></li>
                  <input type='text' className="mb-3 w-75" name='employeeNo' value={formData.employeeNo} onChange={handleInputChange} />
                  <li>presentAddress<span className="text-danger">*</span></li>
                  <input type="text" name="fullName" className="mb-3 w-75" value={formData.fullName} onChange={handleInputChange} required />
                  <li>cardNo<span className="text-danger">*</span></li>
                  <input type="text" name="fatherName" className='w-75 mb-3' value={formData.fatherName} onChange={handleInputChange} required />
                  <li>permanentAddress<span className="text-danger">*</span></li>
                  <input type="email" name="email" className='mb-3 w-75' value={formData.email} onChange={handleInputChange} required />
                  <li>fullName<span className="text-danger">*</span></li>
                  <input type="tel" name="mobile" className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required />
                  <li>fatherName <span className="text-danger">*</span></li>
                  <input type="tel" name="mobile" className='mb-3 w-75' value={formData.mobile} onChange={handleInputChange} required />

                </div>
              </div>
              <div className='col-sm-6 my-5'>

                <li>City <span className="text-danger">*</span></li>
                <input type="text" name="city" className='mb-3 w-75' value={formData.city} onChange={handleInputChange} required />
                <li>pinCode<span className="text-danger">*</span></li>
                <input type="text" name="pin" className='mb-3 w-75' value={formData.pin} onChange={handleInputChange} required />
                <li>email <span className="text-danger">*</span></li>
                <input type="text" name="designation" className='mb-3 w-75' value={formData.designation} onChange={handleInputChange} required />
                <li>companyName <span className="text-danger">*</span></li>
                <input type="text" name="department" className='mb-3 w-75' value={formData.department} onChange={handleInputChange} required />

              </div>
            </div>
            <button className='btn btn-primary float-end' onClick={handleNext}>Next</button>
          </div>
        )}
        {step === 2 && (
          <div className='container-fluid mx-auto'>
            <div className='m-5'>
              <li>College Name <span className='text-danger'>*</span></li>
              <input type="text" name="collegeName" className='w-50 mb-3' value={formData.collegeName} onChange={handleInputChange} required />
              <li>Specification<span className='text-danger'>*</span></li>
              <input type="text" name="specification" className='w-50 mb-3' value={formData.specification} onChange={handleInputChange} required />
              <li>CGPA<span className='text-danger'>*</span></li>
              <input type="text" name="cgpa" className='w-50 mb-3' value={formData.cgpa} onChange={handleInputChange} required />
              <li>Year of Graduation<span className='text-danger'>*</span> </li>
              <input type="text" name="graduationYear" className='w-50 mb-3' value={formData.graduationYear} onChange={handleInputChange} required />
              <li>Award Name<span className='text-danger'>*</span> </li>
              <input type="text" name="awardName" className='w-50 mb-3' value={formData.awardName} onChange={handleInputChange} required />
              <li>Gift<span className='text-danger'>*</span></li>
              <input type="text" name="gift" className='w-50 mb-3' value={formData.gift} onChange={handleInputChange} />
              <li>Award Date<span className='text-danger'>*</span></li>
              <input type="date" name="awardDate" className='w-50 mb-3' value={formData.awardDate} onChange={handleInputChange} required /><br></br>
              <li>joinDate <span className="text-danger">*</span></li>
              <input type="date" name="joinDate" className='mb-3 w-50' value={formData.joinDate} onChange={handleInputChange} required />
              <div className='text-center'>
                <button onClick={handlePrev} className='btn btn-primary float-right mx-2'>Previous</button>
                <button onClick={handleNext} className='btn btn-primary float-right mx-2'>Next</button>
              </div>
            </div>
          </div>
        )}
        {step === 3 && (
          <div>
            <div  className='m-5'>
              <li>Experience<span className='text-danger'>*</span></li>
              <input type="text" name="bankName" value={formData.bankName} className='w-50 mb-3' onChange={handleInputChange} required/>
              <li>EmployeNo<span className='text-danger'>*</span></li>
              <input type="text" name="accNo" className='w-50 mb-3' value={formData.accNo} onChange={handleInputChange} required/>
              <li>Salary<span className='text-danger'>*</span></li>
              <input type="text" name="ifscCode" className='w-50 mb-3' value={formData.ifscCode}onChange={handleInputChange} required/>
              <li>EmployeName<span className='text-danger'>*</span></li>
              <input type="text" name="salary" value={formData.salary} className='w-50 mb-3' onChange={handleInputChange} required/>
              <div className='text-center'>
              <button onClick={handlePrev} className='btn btn-primary float-right mx-2'>Previous</button>
                <button onClick={handleNext} className='btn btn-primary float-right mx-2'>Next</button>
              </div>
            </div>
          </div>
          
        )}
        {step === 4 && (
          <div>
            <div className='m-5'>
              <li>Bank Name<span className='text-danger'>*</span></li>
              <input type="text" name="bankName" value={formData.bankName} className='w-50 mb-3' onChange={handleInputChange} required />
              <li>Account Number<span className='text-danger'>*</span></li>
              <input type="text" name="accNo" className='w-50 mb-3' value={formData.accNo} onChange={handleInputChange} required />
              <li>IFSC Code<span className='text-danger'>*</span></li>
              <input type="text" name="ifscCode" className='w-50 mb-3' value={formData.ifscCode} onChange={handleInputChange} required />
              <li>Salary<span className='text-danger'>*</span></li>
              <input type="text" name="salary" value={formData.salary} className='w-50 mb-3' onChange={handleInputChange} required />
              <li>Loan Name<span className='text-danger'>*</span></li>
              <input type="text" name="loanName" value={formData.loanName} className='w-50 mb-3' onChange={handleInputChange} required />
              <li>Loan Date<span className='text-danger'>*</span></li>
              <input type="date" name="loanDate" value={formData.loanDate} className='w-50 mb-3' onChange={handleInputChange} required />
              <li>Loan Amoun<span className='text-danger'>*</span></li>
              <input type="text" className='w-50 mb-3' name='loanAmount' value={formData.loanAmount} onChange={handleInputChange} required />
              <div className='text-center'>
              <button onClick={handlePrev} className='btn btn-primary float-right mx-2'>Previous</button>
                <button onClick={handleNext} className='btn btn-primary float-right mx-2'>Next</button>
              </div>
            </div>
          </div>

        )}
        {step === 5 && (
          <div>
            <div className='m-5'>
              <li>adharDetails<span className='text-danger'>*</span></li>
              <input type="text" name="bankName" value={formData.bankName} className='w-50 mb-3' onChange={handleInputChange} required />
              <li>IdProof<span className='text-danger'>*</span></li>
               <input type="text" name="bankName" value={formData.bankName} className='w-50 mb-3' onChange={handleInputChange} required />
              
              <div className='text-center'>
                <button className='btn btn-primary m-3' onClick={handlePrev}>Previous</button>
                <button className='btn btn-primary m-3' >Submit</button>
              </div>
            </div>
          </div>

        )}
                
      </form>
    </div>
  );
};
export default Createemploye;