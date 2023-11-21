// App.js
import React, { useState } from 'react';
import './login.css';

const LoginContainer = ({ onSwitchToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="container">
      <h1>GLAM MART</h1>
      <h3>...Brush up your shine...</h3>
      <h2>Login</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleLogin}>Login</button>
      <p>Not a user? <span onClick={onSwitchToRegister}>Register here</span></p>
    </div>
  );
};

const RegisterContainer = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Registering with:', email, newUsername, newPassword, confirmPassword);
  };

  return (
    <div className="container">
<h1>GLAM MART</h1>
<h3>...Brush up your shine...</h3>
      <h2 class="kpy">Register</h2>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <label>
        Username:
        <input type="text" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
      <p>Already a user? <span onClick={onSwitchToLogin}>Login here</span></p>
    </div>
  );
};

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const switchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app">
      {isLogin ? (
        <LoginContainer onSwitchToRegister={switchForm} />
      ) : (
        <RegisterContainer onSwitchToLogin={switchForm} />
      )}
    </div>
  );
};

export default Login;
