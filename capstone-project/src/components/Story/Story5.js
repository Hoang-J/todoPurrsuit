import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import catStand from '../../images/white-cat-expression-stand.png'
import catSearch from '../../images/white-cat-expression-move-right.png'
import catnapper from '../../images/catnapper-shadow-cropped.png'
import catPaw from '../../images/white-cat-up-paw.png'
import TypeWriter from '../TypeWriter/TypeWriter'
import './Story.css'

function Story5() {
  // setting up useState for index for the handleNextText function
  const [index, setIndex] = useState(0)
  // setting up useState for fading for the screen to have a fading effect after the button with the "GO" id is clicked
  const [fading, setFading] = useState(false)
  // setting up the useState for the "To be continue" modal to appear to show end of story
  const [finalClick, setFinalClick] = useState(false)
  // useHistory hook lets us access different paths that we have set up
  // used it to help navigate users to the correct path created with the react-router
  // have to initialize it first in order to use it
  const history = useHistory()
  // array of text to loop through to display in the textbox
  const texts = [
    "That dog was weird but nice.",
    "I think I see the house!",
    // Using the TypeWriter component to give text a video game effect where the words are appearing slowly and one letter at a time
    <TypeWriter text={"Where do you think you're going, Kitten..."}/>
  ]
  // array of pictures to loop through to display in the textbox
  const pics = [
    catStand,
    catSearch,
    catnapper

  ]
  // Set condition that as long as index is less than our text array length then will increment + 1
  // this function will help the text go to the next one inside the array after a button click
  // it will also change the pictures to reflect the emotions of the cat based on the text
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      // Once all the text has been looped through, will update the finalClick state to true to trigger conditional rendering of the "To be continued" modal
      setFinalClick(true)
    }
  }

  function handleClose() {
    setFading(true);
      setTimeout(()=> {
        // set a delay to show the fade-out effect and then reroute the user to a different path
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
        )}
        {/* using conditoinal rendering once our index is equal to our arrays length our go button will be available, allowing us to transition to the next scene */}
        {index === texts.length - 1 && (
            <img id='GO' onClick={handleNextText} src={catPaw}/> 
        )}  
        {/* conditional rendering for a modal */}
        {finalClick && (
          /* the below div determines the positioning of the modal */
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
              {/* the below div styles the modal itself */}
              <div className= "modal" style={{
                  background: "lightskyblue",
                  height: "50%",
                  width: "30%",
                  margin: "auto",
                  padding: "2%",
                  border: "10px solid lightyellow",
                  borderRadius: "10px",
                  "box-shadow": "0 0 5px 5px rgb(220, 220, 220)" }}> 
                  {/* the below styles the contents within the modal */}
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