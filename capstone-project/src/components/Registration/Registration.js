import React, { useState } from 'react'
import './Registration.css'
// Function to register(sign up) new users. Stores new users information to database.
function Registration() {
  // set up the useState for the registrationData variable
  const [registrationData, setRegistrationData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  })
  // function to target the inputted information for the registrationData and store it in the useState
  function handleInputChange(e) {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
  }
  // function to send a POST request with the registrationData over to our backend server to store the infomation into our logininfo database
  // e.preventDefault is to prevent the page from reloading and clearing the information before it is stored
  function handleSubmit(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")
    // data needs to be in JSON format and convert into string values
    // parsing through data with dot notation
    const data = JSON.stringify({
      firstname: registrationData.firstname,
      lastname: registrationData.lastname,
      email: registrationData.email,
      username: registrationData.username,
      password: registrationData.password
    });
    // fetching the backend deployed link with the register endpoint to POST the new account with the registrationData
    // need headers and body properties to help provide the necessary information for the information to send properly to the backend server
    fetch(`https://todo-purrsuit-backend.vercel.app/register`, {
      method: "POST",
      headers: myHeaders,
      body: data
    })
    // setting the registrationData to empty strings so that after user clicks submit
    // the form boxes will clear out instead of saving the previously entered information in there
    setRegistrationData({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: ''
    })
    // display an alert on screen after the user submits valid information to register
    alert("Registration complete! Please allow 5 minutes for processing.")
  }

  return (
    <div id='regMain'>
      {/* <!-- Registration form --> */}
      <form id='regForm' onSubmit={handleSubmit}>
          {/* <!--Container with inputs and labels and register submit button --> */}
          <div class="container">
            {/* Registration title */}
            <h1 className='signupTitle'>SIGN UP</h1>
            {/* Add a line to separate title from the input boxes */}
            <hr/>

            {/* First Name Input Box */}
            <label for="Firstname"><b>First Name</b></label>
            <input type="text" name="firstname" class="form-control" id="firstname" minlength="4" maxlength="30" onChange={handleInputChange} value={registrationData.firstname} required/>

            {/* Last Name Input Box */}
            <label for="Lastname"><b>Last Name</b></label>
            <input type="text" name="lastname" class="form-control" id="lastname" minlength="4" maxlength="30" onChange={handleInputChange} value={registrationData.lastname} required/>

            {/* Email Input Box */}
            <label for="Email"><b>Email</b></label>
            <input type="email" name="email" class="form-control" id="email" minlength="8" maxlength="50" onChange={handleInputChange} value={registrationData.email} required/>
            
            {/* Username Input Box */}
            <label for="Username"><b>Username</b></label>
            <input type="text" name="username" class="form-control" id="username" minlength="8" maxlength="30" onChange={handleInputChange} value={registrationData.username} required/>

            {/* Password Input Box */}
            <label for="Password"><b>Password</b></label>
            <input type="password" name="password"  class="form-control" id="password" minlength="4" maxlength="30" onChange={handleInputChange} value={registrationData.password} required/>

            {/* Register submit button  */}
            <button type="submit" class="registerbtn">SIGN UP</button>
            <p id="regtx" className='signupTitle'>Already have an account? <a href="../Login/logform.html" className="link"> Login Here</a></p>
            <a class="home" href="../home" className="link signupTitle">Back to Start</a>
          </div>
      </form> 
    </div>
  )
}

export default Registration
