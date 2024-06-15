import React from 'react'
import Dungeon1 from '../../images/backyard1.jpg'
import Dungeon2 from '../../images/backyard2.jpg'
import { useState, useEffect } from 'react'
import './Level.css'
import Kitty from '../../images/catrunning.gif'
import Doggy from '../../images/dog.gif'

function FinalLevel() {
  // Position state helps us move character on X axis
  const [position, setPosition] = useState(0)
  // left state helps us flip character when moving left or right
  const [left, isLeft] = useState(false)
  // jumping and jump height states helpe us initiate jumping animation and falling
  const [jumping, setJumping] = useState(false)
  const [jumpHeight, setJumpHeight] = useState(0)
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
    };
    document.addEventListener('keydown', handleKeyPress);
  
    return function () {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const transform = `translateX(${position}px) translateY(${jumpHeight}px) ${left ? 'scaleX(-1)' : ''}`;
  const transition = jumping ? 'transform 0.3s ease-out' : 'transform 0.3s ease-out'
 
  return (
    <>
    <div className='level2body'>
      <img id='Dungeon1' src={Dungeon1}></img> 
      <img id='Dungeon2' src={Dungeon2}></img>
    </div>
    <img className={`Cat2 ${jumping ? 'jump' : ''}`} style={{ transform, transition }} src={Kitty}></img>
    <img id='dog' src={Doggy}></img>
    
    
    </>
  )
}

export default FinalLevel