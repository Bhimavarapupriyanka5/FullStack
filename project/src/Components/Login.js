import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', formData);
    navigate('/Navbar');
  };
  return (
    <div className="container-fluid">
    <div className="loginFormWrapper">
      <form className="loginFormContainer" onSubmit={handleSubmit}>
        <label className="loginFormLabel">
          Login:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="loginFormInput"
          />
        </label>
        <label className="loginFormLabel">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="loginFormInput"
          />
        </label>
        <button type="submit" className="loginFormButton">
          Login
        </button>
      </form>
    </div>
    </div>
  );
};
export default LoginForm;