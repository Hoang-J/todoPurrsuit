import React from 'react'
import './Login.css'

function Login() {
  return (
    <div id='logForm'>
      {/* <!-- Login form --> */}
      <form action="http://localhost:3000/register" method="post"/>
      {/* <!--Container with inputs and labels(email,password,repeat password)and register submit button --> */}
        <div class="logcontainer">
          <h1>Login</h1>
             <hr/>
              <label for="Username"><b>Username</b></label>
              <input type="text" name="userName" class="form-control" id="username" minlength="8" maxlength="30" required/>

              <label for="Email"><b>Email</b></label>
              <input type="email" name="email" class="form-control" id="email" minlength="10" maxlength="50" required/>

              <label for="Password"><b>Password</b></label>
              <input type="password" name="password"  class="form-control" id="password" minlength="8" maxlength="30" required/>

              <a class="home" href="../index.html">Home</a>
          
          {/* Login submit button  */}
          <button type="submit" class="loginbtn">Login</button>
        </div>
      <form/> 
    </div>
  )
}

export default Login