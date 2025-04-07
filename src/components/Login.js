import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
 
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
 
    let axiosConfig = {
      headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
      }
    };
 
    try {
      // const response = await axios.post('http://localhost:5000/api/login', {
      //   username,
      //   password,
      // },axiosConfig);
      const response = await fetch('http://localhost:5000/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
     console.log(response)
      // Save the token in localStorage
     
 
      // Redirect to the dashboard or another protected route
      navigate('/home'); // Change '/dashboard' to your desired route
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message){
          setError(err.response.data.message)
      } else {
          setError('Invalid credentials or server error. Please try again.');
      }
    }
  };
 
  return (
    <div>
      <h2>       Login    </h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
 
export default Login;

  //   try {
  //     // const response = await axios.post('http://localhost:5000/api/login', {
  //     //   username,
  //     //   password,
  //     // },axiosConfig);
  //     const response = await fetch('http://localhost:5000/api/login', {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ username, password }),
  //     });
  //    console.log(response)
  //     // Save the token in localStorage
     

  //     // Redirect to the dashboard or another protected route
  //     navigate('/home'); // Change '/dashboard' to your desired route
  //   } catch (err) {
  //     if (err.response && err.response.data && err.response.data.message){
  //         setError(err.response.data.message)
  //     } else {
  //         setError('Invalid credentials or server error. Please try again.');
  //     }
  //   }
  // };
