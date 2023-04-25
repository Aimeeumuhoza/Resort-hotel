import React, { useState } from "react";
import "./login.css";
import NavigationBar from "../../components/nav/nav"
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(`Submitting form with username ${email} and password ${password}`);
  };

  return (
    
    <div>
<NavigationBar/>
<h1 style={{color:'black'}}>Login Page</h1>
<div className="body" >
    <form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:  </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </div>
    </div>
  );
};

export default Login;
