import React, { useState } from 'react'
import './Story.css'
import { useHistory } from 'react-router-dom';
import catStretch from '../../images/white-cat-expression-stretch.png'
import catLook from '../../images/white-cat-expression-move-right.png'
import catWave from '../../images/white-cat-expression-wave.png'
import catPaw from '../../images/white-cat-up-paw.png'



function Story1() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  const texts = [
    "Where am I? I need to find a way out!",
    "Maybe if I look around, I'll find an escape.",
    "Oh! The door up these stairs is open!"
  ];
  const pics = [
    catStretch,
    catLook,
    catWave

  ]
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      setFading(true);
      setTimeout(()=> {
        history.push('/story2')
      },1000)
    }
  }

  return (
    <>
      {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
      <div className={`level1body ${fading ? 'fade-out' : ''}`}>
        <div className='textbox'>
          <p>{texts[index]}</p>
          <img className='cat-talk' src={pics[index]} />
        </div>
        {/* Add conditional rendering, as long as the index is less than our text array length the button will be rendered */}
        {index < texts.length -1 && (
          <img id='button' onClick={handleNextText} src={catPaw}/>
          /* <button id='button' onClick={handleNextText}>Next</button> */
        )}
        {/* using conditoinal rendering once our index is equal to our arrays length our go button will be available, allowing us to transition to the next scene */}
        {index === texts.length - 1 && (
          <img id='GO' onClick={handleNextText} src={catPaw}/>
          /* <button id='GO' onClick={handleNextText}>GO!</button> */
        )}
      </div>
    </>
  )
}

export default Story1