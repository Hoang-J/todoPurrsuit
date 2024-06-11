import React, { useState } from 'react'
import './Login.css'

function Login() {

  // const [inputPass, setInputPass] = useState(null);
  // const [inputName, setInputName] = useState(null);

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })


  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
};

  function handleSubmit(e) {
    e.preventDefault();
    console.log("called endpoint")
    //e.preventDefault();
    fetch(`http://localhost:5000/login?username=${loginData.username}&password=${loginData.password}`)
    setLoginData({
      username: '',
      password: ''
    })
  }

  return (
    <div id='logForm'>
    
      {/* <!-- Login form --> */}
      <form onSubmit={handleSubmit}>
      {/* <!--Container with inputs and labels(email,password,repeat password)and register submit button --> */}
        <div class="logcontainer">
          <h1>Login</h1>
             <hr/>
              <label for="Username"><b>Username</b></label>
              <input type="text" name="username" class="form-control" id="username" minlength="4" maxlength="30" onChange={handleInputChange} value={loginData.username} required/> 

              <label for="Password"><b>Password</b></label>
              <input type="password" name="password"  class="form-control" id="password" minlength="4" maxlength="30" onChange={handleInputChange} value={loginData.password} required/>

              <a class="home" href="../index.html">Home</a>
          
          {/* Login submit button  */}
          <button type="submit" class="loginbtn">Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login