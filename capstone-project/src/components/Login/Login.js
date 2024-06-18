import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Login.css'

function Login() {
  // initializing the useHistory hook to use it for rerouting user to a specific path
  const history = useHistory()
  // setting up the useState for the loginData variable
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  // function to target the inputed information for the loginData and store it in the useState
  function handleInputChange(e) {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  }

  // function to fetch the login endpoint of our backend server to send the inputted login and password as query params 
  // e.preventDefault is to prevent the page from reloading and clearing the information before it is stored
  function handleSubmit(e) {
    e.preventDefault();
    fetch(`https://todo-purrsuit-backend.vercel.app/login?username=${loginData.username}&password=${loginData.password}`)
    // storing the JSON response to use to check if the username existed and if the password for that username matched
    .then(response => response.json())
    .then(data => {
      if(data == 'loggedin') {
        // redirect user to the first game page if logged in successfully
        history.push('/story1')
      }
      else {
        // display an alert on screen if the username did not exist or if the password was wrong
        alert("Invalid Login. Please Try Again.")
      }
    })
  }

  return (
    <>
      <div id='logMain'>
        <form onSubmit={handleSubmit} id='logForm'>
          {/* Container with inputs and labels (Username, Password) and Login submit button */}
          <div class="logcontainer">
            {/* Login title */}
            <h1 className='loginTitle'>LOGIN</h1>

            {/* Add a line to separate title from the input boxes */}
            <hr/>

            {/* Username Input Box */}
            <label for="Username"><b>Username</b></label>
            <input type="text" name="username" class="form-control" id="username" minlength="4" maxlength="30" onChange={handleInputChange} value={loginData.username} required/> 
            
            {/* Password Input Box */}
            <label for="Password"><b>Password</b></label>
            <input type="password" name="password"  class="form-control" id="password" minlength="4" maxlength="30" onChange={handleInputChange} value={loginData.password} required/>

            {/* Login submit button */}
            <button type="submit" class="loginbtn">LOGIN</button>

            {/* Links for the registration page and the home page */}
            <p className='loginTitle'>Dont have an account? <a href="../registration" className="link">Sign Up Now</a> </p>
            <a class="home" href="../home" className="link loginTitle">Back to Start</a>
          </div>
        </form>
      </div>
    </>
  )
}

export default Login