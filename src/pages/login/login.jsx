import React, { useState } from "react";
import "./login.css";
import NavigationBar from "../../components/nav/nav"
import back from "../../assets/images/back.jpg"
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
    <table >
      <tbody>
        <tr>
          <td style={{width:'50%',padding:'23px', verticalAlign: 'top',backgroundImage: `url(${back})`, backgroundSize: 'cover', height: '70vh'}}>
            
          </td>
          <td style={{width:'50%',padding:'26px', verticalAlign: 'top'}}>
            <div>
              <div>
                <label>Email:  </label>
                <input
                  type="text"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  style={{ marginBottom: '30px' }}
                />
              </div>
              <div>
                <label>Password: </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  style={{ marginBottom: '40px' }}
                />
              </div>
              <button type="submit">Login</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
</div>

      
     
    </div>
  );
};

export default Login;
