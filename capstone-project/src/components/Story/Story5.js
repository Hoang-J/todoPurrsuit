import React, { useState } from 'react'
import './Story.css'
import { useHistory } from 'react-router-dom';
import catStand from '../../images/white-cat-expression-stand.png'
import catSearch from '../../images/white-cat-expression-move-right.png'
import catnapper from '../../images/catnapper-shadow-cropped.png'
import catPaw from '../../images/white-cat-up-paw.png'
import TypeWriter from '../TypeWriter/TypeWriter';
import Wave from '../../images/white-cat-expression-wave.png'



function Story5() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)
  const [finalClick, setFinalClick] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  const texts = [
    "That dog was weird but nice.",
    "I think I see the house!",
    <TypeWriter text={"Where do you think you're going, Kitten..."}/>
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
      setFinalClick(true)
    }
  }

  function handleClose() {
    setFading(true);
      setTimeout(()=> {
        history.push('/home')
      },1000)
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
          <>
            <img id='GO' onClick={handleNextText} src={catPaw}/> 
            {/* <button id='GO' onClick={handleNextText}>GO!</button>  */}
          </>
        )}  
        {finalClick && (
          <>  
            <div style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "z-index": "2"}}>
              <div className= "modal" style={{
                  background: "lightskyblue",
                  height: "50%",
                  width: "30%",
                  margin: "auto",
                  padding: "2%",
                  border: "10px solid lightyellow",
                  borderRadius: "10px",
                  "box-shadow": "0 0 5px 5px rgb(220, 220, 220)" }}> 
                  <center>
                      <h1 style={{
                          "font-family": "Gloria Hallelujah, cursive",
                          "font-size": "x-large"

                      }}>... TO BE CONTINUED.</h1>
                      <img src={catSearch}/>
                      <br />
                      <button style={{
                          background: "pink",
                          width: "40%",
                          border: "2px solid grey",
                          "border-radius": "50%",
                          padding: "5%",
                          "margin-top": "13%",
                          "font-size": "x-large",
                          "box-shadow": "0 0 3px 3px white",
                          "font-family": "Gloria Hallelujah, cursive",
                      }} onClick={handleClose}>Back to Start</button>
                  </center>
              </div>
            </div>
          </>
          
        )}
      </div>
    </>
  )
}

export default Story5