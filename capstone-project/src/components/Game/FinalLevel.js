import React from 'react'
import Dungeon1 from '../../images/metal-fence-background.jpg'
import Dungeon2 from '../../images/metal-fence-background.jpg'
import { useState, useEffect } from 'react'
import './FinalLevel.css'
import Kitty from '../../images/catrunning.gif'
import Doggy from '../../images/dog.gif'
import Cloud from '../../images/thoughtcloud.png'
import { useHistory } from 'react-router-dom';

function FinalLevel() {
  // Position state helps us move character on X axis
  const [position, setPosition] = useState(0)
  // left state helps us flip character when moving left or right
  const [left, isLeft] = useState(false)
  // jumping and jump height states helpe us initiate jumping animation and falling
  const [jumping, setJumping] = useState(false)
  const [jumpHeight, setJumpHeight] = useState(0)

  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)
  const history = useHistory()
  const texts = [
    "Hey Kitty, you lost?",
    "The boss has been a little stingy with the kibble lately so...",
    "I might not be the best guard dog today...",
    "I'll show you some mercy.",
    "If you want to get out, you have to solve this riddle:",
    "I usually fetch this, but now it's for you. Grab this for me to let freedom = true."
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
        setPosition((prev) => prev - 100)
        isLeft(true)

      } else if (e.key === 'ArrowRight') {
        console.log(`Do right action`);
        setPosition((prev) => prev + 100)
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
  const freedom = () =>{
    setFading(true)
    setTimeout(() => {
   history.push('/Story5')
    }, 500);
    
  }

  const transform = `translateX(${position}px) translateY(${jumpHeight}px) ${left ? 'scaleX(-1)' : ''}`;
  const transition = jumping ? 'transform 0.3s ease-out' : 'transform 0.3s ease-out'

  return (
    <>
    <div className='level2body'>
      <img id='Dungeon1' src={Dungeon1}></img> 
      <img id='Dungeon2' src={Dungeon2}></img>
    </div>
    <img className='Cat2' style={{ transform, transition }} src={Kitty}></img>
    <img id='dog' src={Doggy}></img>
    <p id='dogtext'>{texts[index]}</p>
    <div onClick={freedom} className='freedom'></div>
    <img id='cloud' src={Cloud}></img>
    {index < texts.length -1 && (
          <button id='button1' onClick={handleNextText}>Next</button>
        )}
      
    
    
    </>
  )
}

export default FinalLevel