import React from 'react'
import Dungeon1 from '../../images/backyard1.jpg'
import Dungeon2 from '../../images/backyard2.jpg'
import { useState, useEffect } from 'react'
import './Level.css'
import Kitty from '../../images/catrunning.gif'
import Doggy from '../../images/dog.gif'
import Cloud from '../../images/thoughtcloud.png'
import { useHistory } from 'react-router-dom';
import Pausemenu from '../../images/pausemenu.png'
import Close from '../../images/close.png'
import Quit from '../../images/quit.png'
import Sidenavbar from '../Sidenav/Sidenavbar'

function Level2() {
  // Position state helps us move character on X axis
  const [position, setPosition] = useState(0)
  // left state helps us flip character when moving left or right
  const [left, isLeft] = useState(false)
  // jumping and jump height states helpe us initiate jumping animation and falling
  const [jumping, setJumping] = useState(false)
  const [jumpHeight, setJumpHeight] = useState(0)
  const [index, setIndex] = useState(0);
  const [pause, setPause] = useState(false)
  const history = useHistory()
  const texts = [
    "Hello Kitty, you look lost",
    "The boss has been a little stingy with the kebble latley, so i'm feeling merciful today...",
    "If you want to get outta here you have to solve this riddle.",
    "I usually fetch this, but now it is you. Grab this for me and let freedom = true"
  ];
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    }
  }
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'ArrowLeft') {
        console.log(`Do left action`);
        setPosition((prev) => prev - 35)
        isLeft(true)

      } else if (e.key === 'ArrowRight') {
        console.log(`Do right action`);
        setPosition((prev) => prev + 35)
        isLeft(false)
      }
      else if ( e.key === ' ') {
         if(!jumping){
          setJumping(true);
          setJumpHeight(-250)
          
          setTimeout(()=>{
            setJumping(false) 
            setJumpHeight(0)
          }, 300) 
         }
      }
      else if (e.key === 'Escape') {
        setPause(true)
      }
    };
    document.addEventListener('keydown', handleKeyPress);
  
    return function () {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  const freedom = () =>{
    setTimeout(() => {
   history.push('/home')
    }, 500);
  }
  const handleX = () => {
    setPause(false)
  }

  const quitter = () => {
    history.push('/home')
  }
  const transform = `translateX(${position}px) translateY(${jumpHeight}px) ${left ? 'scaleX(-1)' : ''}`;
  const transition = jumping ? 'transform 0.3s ease-out' : 'transform 0.3s ease-out'
 
  return (
    <>
      <p id='esc'>Press Escape for pause menu</p>
    <div className='level2body'>
      <img id='Dungeon1' src={Dungeon1}></img> 
      <img id='Dungeon2' src={Dungeon2}></img>
    </div>
    <div className='nav'>
    <Sidenavbar />
    </div>

    <img className='Cat2' style={{ transform, transition }} src={Kitty}></img>
    <img id='dog' src={Doggy}></img>
    <p id='dogtext'>{texts[index]}</p>
     {/* our riddle, if you click on it your'e redirected towards the next level */}
    <div onClick={freedom} className='freedom'></div>
    <img id='cloud' src={Cloud}></img>
    {index < texts.length -1 && (
          <button id='button1' onClick={handleNextText}>Next</button>
        )}
        {/*Render image if pause = true */}
      {pause && (
        <div className='Pmenu'>
        <img src={Pausemenu} style={{
          transform: `translateX(${position}px)`, transition
        }} className='pauseMenu'></img>
        {/* Close pausemenu */}
        <img src={Close} style={{
          transform: `translateX(${position}px)`, transition
         }} onClick={handleX} id='X'></img>
         {/* Quit game and go to home page */}
         <img src={Quit} style={{
          transform: `translateX(${position}px)`, transition
        }} className='quit' onClick={quitter}></img> 
        </div>
      )}
      
    
    
    </>
  )
}

export default Level2