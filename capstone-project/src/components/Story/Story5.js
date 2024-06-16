import React, { useState } from 'react'
import './Story.css'
import { useHistory } from 'react-router-dom';
import catStand from '../../images/white-cat-expression-stand.png'
import catSearch from '../../images/white-cat-expression-move-right.png'
import catnapper from '../../images/catnapper-shadow-cropped.png'
import catPaw from '../../images/white-cat-up-paw.png'
import TypeWriter from '../TypeWriter/TypeWriter';



function Story5() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  const texts = [
    "That dog was weird but nice.",
    "I think I see the house!",
    <TypeWriter text={"Where do you think you're going Kitty..."}/>
  ];
  const pics = [
    catStand,
    catSearch,
    catnapper

  ]
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      setFading(true);
      setTimeout(()=> {
        history.push('/home')
      },1000)
    }
  }

  return (
    <>
      {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
      <div className={`level5body ${fading ? 'fade-out' : ''}`}>
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

export default Story5