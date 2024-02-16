import  React, { useEffect,useState } from 'react';
const Dashboard = () => {
  
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  useEffect(() => {
  
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    
    
    setEmail(storedEmail || '');
    setPassword(storedPassword || '');
  }, []); 

  const Delete=()=> {

    localStorage.removeItem('email');
    localStorage.removeItem('password');
}



  return (
    <div>
        <div>
      <h2>Welcome to the Dashboard!</h2>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
    </div>

    <div>
        <button onClick={Delete} className="btn btn-danger">Delete</button>
        
    </div>

    </div>

    

  );
};

export default Dashboard;
