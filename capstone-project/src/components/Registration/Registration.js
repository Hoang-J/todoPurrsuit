import React, { useState } from 'react'
import './Registration.css'

function Registration() {

  const [registrationData, setRegistrationData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: ''
  })


  function handleInputChange(e) {
    const { name, value } = e.target;
    setRegistrationData({ ...registrationData, [name]: value });
};

  function handleSubmit(e) {
    e.preventDefault();
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json")

    const data = JSON.stringify({

      firstname: registrationData.firstname,
      lastname: registrationData.lastname,
      email: registrationData.email,
      username: registrationData.username,
      password: registrationData.password
    });

    // console.log({firstname: registrationData.firstname, lastname: registrationData.lastname});
    fetch(`https://todo-purrsuit-backend.vercel.app/register`, {
      method: "POST",
      headers: myHeaders,
      body: data
    })

    setRegistrationData({
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: ''
    })
  }

  return (
    <div id='regForm' >
      {/* <!-- Registration form --> */}
    <form id='regForm' onSubmit={handleSubmit}>
      {/* <!--Container with inputs and labels(email,password,repeat password)and register submit button --> */}
        <div class="container">
          <h1>Register</h1>
          <p>Please fill in this form to create an account.</p>
          <hr/>
            
          <label for="Firstname"><b>First Name</b></label>
          <input type="text" name="firstname" class="form-control" id="firstname" minlength="4" maxlength="30" onChange={handleInputChange} value={registrationData.firstname} required/>

          <label for="Lastname"><b>Last Name</b></label>
          <input type="text" name="lastname" class="form-control" id="lastname" minlength="4" maxlength="30" onChange={handleInputChange} value={registrationData.lastname} required/>

          <label for="Email"><b>Email</b></label>
          <input type="email" name="email" class="form-control" id="email" minlength="8" maxlength="50" onChange={handleInputChange} value={registrationData.email} required/>

          <label for="Username"><b>Username</b></label>
          <input type="text" name="username" class="form-control" id="username" minlength="8" maxlength="30" onChange={handleInputChange} value={registrationData.username} required/>

          <label for="Password"><b>Password</b></label>
          <input type="password" name="password"  class="form-control" id="password" minlength="4" maxlength="30" onChange={handleInputChange} value={registrationData.password} required/>

          <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
          {/* Register submit button  */}
          <button type="submit" class="registerbtn">Register</button>
        </div>

      {/* "Alreadly have an account?" with link to login page container  */}
        <div class="container login">
          <a class="home" href="../index.html">Home</a>
          <p id="regtx">Already have an account? <a href="../Login/logform.html">Login</a>.</p>
        </div>
      </form> 
        
    </div>
  )
}

export default Registration