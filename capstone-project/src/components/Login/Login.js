import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

function Login() {

  // const [inputPass, setInputPass] = useState(null);
  // const [inputName, setInputName] = useState(null);
  const history = useHistory()

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
    fetch(`https://todo-purrsuit-backend.vercel.app/login?username=${loginData.username}&password=${loginData.password}`)
    .then(response => response.json())
    .then(data => {
      if(data == 'loggedin') {
        history.push('/story1')
      }
      else {
        // history.push('/home')
        alert("Invalid Login. Please Try Again.")
      }
    })
  }

  return (
    <>
      <div id='logMain'>
    
        <form onSubmit={handleSubmit} id='logForm'>
        {/* Container with inputs and labels(Username,Password)and Login submit button */}
          <div class="logcontainer">
            <h1 className='loginTitle'>LOGIN</h1>
            <hr/>
            <label for="Username"><b>Username</b></label>
            <input type="text" name="username" class="form-control" id="username" minlength="4" maxlength="30" onChange={handleInputChange} value={loginData.username} required/> 

            <label for="Password"><b>Password</b></label>
            <input type="password" name="password"  class="form-control" id="password" minlength="4" maxlength="30" onChange={handleInputChange} value={loginData.password} required/>

            {/* Login submit button */}
            <button type="submit" class="loginbtn">LOGIN</button>

            <p className='loginTitle'>Dont have an account? <a href="../registration" className="link">Sign Up Now</a> </p>
            <a class="home" href="../home" className="link loginTitle">Back to Start</a>
            
          </div>
        </form>
      </div>
    </>
    
  )
}

export default Login