import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

    
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Store email and password in local storage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  
      // Optionally, you can clear the form fields after submission
      setEmail('');
      setPassword('');
  
      navigate('/Dashboard');
    };
    

    return (
        <div className="container">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" value={email} onChange={(e) => setEmail(e.target.value)} />
                       
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                   
                    <button type="submit" className="btn btn-primary" to='/UserList'>Login</button>
                  
                </form>
            </div>
        </div>
    );
}

export default Login;
