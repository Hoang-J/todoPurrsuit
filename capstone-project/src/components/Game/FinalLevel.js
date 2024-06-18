import React from 'react'
import Dungeon1 from '../../images/metal-fence-background.jpg'
import Dungeon2 from '../../images/metal-fence-background.jpg'
import { useState, useEffect } from 'react'
import './FinalLevel.css'
import Kitty from '../../images/catrunning.gif'
import Doggy from '../../images/dog.gif'
import Cloud from '../../images/thoughtcloud.png'
import { useHistory } from 'react-router-dom';
import stick from '../../images/stick.png';
import Pausemenu from '../../images/pausemenu.png'
import Close from '../../images/close.png'
import Quit from '../../images/quit.png'

function FinalLevel() {
  // Position state helps us move character on X axis
  const [position, setPosition] = useState(0)
  // left state helps us flip character when moving left or right
  const [left, isLeft] = useState(false)
  // jumping and jump height states helpe us initiate jumping animation and falling
  const [jumping, setJumping] = useState(false)
  const [jumpHeight, setJumpHeight] = useState(0)

  // Pause state allowing us to display the pause menu
  const [pause, setPause] = useState(false)

  // index tracks the state of the text and remaining text
  const [index, setIndex] = useState(0);
  const history = useHistory()
  // dialogue for the dog character
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
  // we use useEffect to track key presses on the keyboard to trigger movement and other functionalities 
  useEffect(() => {
    const handleKeyPress = e => {
      if (e.key === 'ArrowLeft') {
        setPosition((prev) => prev - 100)
        isLeft(true)

      } else if (e.key === 'ArrowRight') {
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
      // summons the pause menu
      else if ( e.key === 'p'){
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
   history.push('/Story5')
    }, 500);
    
  }
  //function allowing us to close pause menu
  const close = () =>{
   setPause(false)
  }
  //function allowing us to navigage to the home page
  const quitter = () => {
    history.push('/home')
  }
//transform allowing us to move from left to right, and to jump
  const transform = `translateX(${position}px) translateY(${jumpHeight}px) ${left ? 'scaleX(-1)' : ''}`;
  // transition smooths our jump//falling animation
  const transition = jumping ? 'transform 0.3s ease-out' : 'transform 0.3s ease-out'

  return (
    <>
        <div className='fake-nav'></div>
        <div className='level2body'>
          <img id='Dungeon1' src={Dungeon1}></img> 
        </div>
        <img className='Cat2' style={{ transform, transition }} src={Kitty}></img>
        <img id='dog' src={Doggy}></img>
        <p id='dogtext'>{texts[index]}</p>
        <img src={stick} name="stick" onClick={freedom} className='freedom'></img>
        <img id='cloud' src={Cloud}></img>
        {/* conditional rendering allowing next text to appear then button disapears when we reached equal to arrays length */}
        {index < texts.length -1 && (
              <button id='button1' onClick={handleNextText}>Next</button>
        )}
        {/* conditional rendering allowing the pause menu to be displayed */}
        {pause && (
          <div>
              <img style={{
                transform: `translateX(${position}px)`, transition}} 
                className='pauseMenu' src={Pausemenu}>
              </img>
              <img style={{
                transform: `translateX(${position}px)`, transition}}
                id='X' onClick={close} src={Close}>
              </img>
              <img onClick={quitter} style={{
                transform: `translateX(${position}px)`, transition}} className='quit' src={Quit}>
              </img>
          </div>
        )}
    </>
  )
}

export default FinalLevel