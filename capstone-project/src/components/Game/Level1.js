import React, { useState } from 'react'
import './Level.css'
import Cloud from '../../images/thoughtcloud.png'
import { useHistory } from 'react-router-dom';


function Level1() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  const texts = [
    "This is not how I imagined hanging out on a Wednesday...",
    "Maybe if I look around, I'll find an escape.",
    "Thats an interesting crack on the wall..." 
  ];
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      setFading(true);
      setTimeout(()=> {
        history.push('/level2')
      },1000)
    }
  }

  return (
    <>
      {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
      <div className={`level1body ${fading ? 'fade-out' : ''}`}>
        <img  src='https://33.media.tumblr.com/973cd8378c3b9be1c0dcaa2d92a22f04/tumblr_nur9nm4wWw1tlsxv1o1_250.gif' id='walkingcat' />
        <div className='thought-bubble'>
          <img src={Cloud} id='cloud' alt='ThoughtCloud' />
          <p>{texts[index]}</p>
        </div>
        {/* Add conditional rendering, as long as the index is less than our text array length the button will be rendered */}
        {index < texts.length -1 && (
          <button id='button' onClick={handleNextText}>Next</button>
        )}
        {/* using conditoinal rendering once our index is equal to our arrays length our go button will be available, allowing us to transition to the next scene */}
        {index === texts.length - 1 && (
          <button id='GO' onClick={handleNextText}>GO!</button>
        )}
      </div>
    </>
  )
}

export default Level1