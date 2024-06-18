import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import catAngry from '../../images/white-cat-expression-angry.png'
import catLook from '../../images/white-cat-expression-turn-right.png'
import catSearch from '../../images/white-cat-expression-move-right.png'
import catPaw from '../../images/white-cat-up-paw.png'
import './Story.css'

function Story2() {
  // setting up useState for index for the handleNextText function
  const [index, setIndex] = useState(0)
  // setting up useState for fading for the screen to have a fading effect after the button with the "GO" id is clicked
  const [fading, setFading] = useState(false)
  // useHistory hook lets us access different paths that we have set up
  // used it to help navigate users to the correct path created with the react-router
  // have to initialize it first in order to use it
  const history = useHistory()
  // array of text to loop through to display in the textbox
  const texts = [
    "Oh meow! This house is so messy!",
    "Okay, focus. I need to find the front door.",
    "I gotta keep searching!"
  ]
  // array of pictures to loop through to display in the textbox
  const pics = [
    catAngry,
    catLook,
    catSearch

  ]
  // Set condition that as long as index is less than our text array length then will increment + 1
  // this function will help the text go to the next one inside the array after a button click
  // it will also change the pictures to reflect the emotions of the cat based on the text
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      setFading(true);
      setTimeout(()=> {
        // set a delay to show the fade-out effect and then reroute the user to a different path
        history.push('/level2')
      },1000)
    }
  }

  return (
    <>
      {/* Using a conditional ternary operator if fading is false our classname will be only level2body, if fading is true our classname will be fade-out initializing our animation */}
      <div className={`level2body ${fading ? 'fade-out' : ''}`}>
        <div className='textbox'>
          <p>{texts[index]}</p>
          <img className='cat-talk' src={pics[index]} />
        </div>
        {/* Add conditional rendering, as long as the index is less than our text array length the button will be rendered */}
        {index < texts.length -1 && (
          <img id='button' onClick={handleNextText} src={catPaw}/>
        )}
        {/* Using conditional rendering once our index is equal to our arrays length our go button will be available, allowing us to transition to the next scene */}
        {index === texts.length - 1 && (
          <img id='GO' onClick={handleNextText} src={catPaw}/>
        )}
      </div>
    </>
  )
}

export default Story2