import React, { useState } from 'react'
import missingcat from '../images/missingcat.png'
import logo from '../images/TodoPursuit.png'
import '../Home.css'
import { useEffect } from 'react'
function Home() {
  return (
    <>
    <div>NavBar</div>
    <div className='homeBody'>
      <img src={missingcat}  alt='Missingcat' id='cat'></img>
      <img src={logo} alt='logo' id='logo'></img>
      <img src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjFxdThhNGhpend3dDI3ODR4Y3NsNGRhZjB5dWpkM3V0cHZ4cmZxbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/C3ADmBThxaNdS/giphy.gif' id='catgif' alt='catgif'></img>
    </div>
    </>
  )
}

export default Home