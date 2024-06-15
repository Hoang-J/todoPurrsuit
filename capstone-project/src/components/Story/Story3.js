import React, { useState } from 'react'
import './Story.css'
import { useHistory } from 'react-router-dom';
import catWave from '../../images/white-cat-expression-wave.png'
import catLook from '../../images/white-cat-expression-move-right.png'
import catStretch from '../../images/white-cat-expression-stretch.png'
import catPaw from '../../images/white-cat-up-paw.png'



function Story3() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  const texts = [
    "I made it outside!",
    "Whiskers! It's pouring outside!",
    "Let's hurry! The catnapper might come back..."
  ];
  const pics = [
    catWave,
    catStretch,
    catLook

  ]
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      setFading(true);
      setTimeout(()=> {
        history.push('/level3')
      },1000)
    }
  }

  return (
    <>
      {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
      <div className={`level3body ${fading ? 'fade-out' : ''}`}>
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

export default Story3