import React, { useState } from 'react'
import './Level1.css'
import { useHistory } from 'react-router-dom';
import Cat from '../../images/catrunning.gif';
import Downpaw from '../../images/downpaw.png';
import Uppaw from '../../images/uppaw.png';
import Rightpaw from '../../images/rightpaw.png';
import Leftpaw from '../../images/leftpaw.png';
import Wave from '../../images/white-cat-expression-wave.png'


function Level1() {
    // create a useState to track when to use the fading effect
    const [fading, setFading] = useState(false)
    //useHistory hook lets us access paths that we have set up before and after the current url
    const history = useHistory()
    // Set useState of fading to be true when the button is clicked to navigate to next page
    const handleNextText = () => {
      {
        setFading(true);
        setTimeout(()=> {
          history.push('/story2')
        },1000)
      }
    }


    // create useState to track and update the x-axis and y-axis positions of the character
    const [xAxisPosition, setXAxisPosition] = useState(0)
    const [yAxisPosition, setYAxisPosition] = useState(0)
    // the below uses useState to maintain the height and width of various divs
    const [parentWidth, setParentWidth] = useState(500)
    const [parentHeight, setParentHeight] = useState(500)

    const [wallWidth, setWallWidth] = useState(200)
    const [wallHeight, setWallHeight] = useState(300)

    const [catWidth, setCatWidth] = useState(100)
    const [catHeight, setCatHeight] = useState(100)
    // the below useStates maintain the position of the box divs to create walls in the maze
    const [rightBox, setRightBox] = useState(0)
    const [leftBox, setLeftBox] = useState(0)

    function movingRightAction() {
        // if the cat's position moving right is within the right wall of the maze...
        if(xAxisPosition + 100 < parentWidth) {
            // ... and if the position on the y-axis is less than the cat's height or greater than or equal to the bottom maze wall minus the cat's height...
            if (yAxisPosition < catHeight || yAxisPosition >= parentHeight - catHeight) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100)
            }
        }
    }

    function movingLeftAction() {
        // if the cat's position moving left is within the left wall of the maze...
        if(xAxisPosition - 100 >= 0) {
            // ... and if the position on the y-axis is less than the cat's height or greater than or equal to the bottom maze wall minus the cat's height...
            if (yAxisPosition < catHeight || yAxisPosition >= parentHeight - catHeight) {
                // ... then decrease the position on the x-axis by 100 (move left)
                setXAxisPosition(xAxisPosition - 100)
            }
        }
    }

    function movingDownAction() {
        // if the cat's position moving down is within the bottom wall of the maze...
        if(yAxisPosition + 100 < parentHeight) {
            // ... and if the position on the x-axis is greater than the width of the blocking wall and less than the maze width minus the blocking wall width...
            if (xAxisPosition + 100 > wallWidth && xAxisPosition < (parentWidth - wallWidth)) {
                // ... then increase the position on the y-axis by 100 (move down) (this may seem strange as increasing the position should move up on the y-axis, but this is how the code works)
                setYAxisPosition(yAxisPosition + 100)
            }
        }
    }

    function movingUpAction() {
        // if the cat's position moving up is within the top wall of the maze...
        if(yAxisPosition - 100 >= 0) {
            // ... and if the position on the x-axis is greater than the width of the blocking wall and less than the maze width minus the blocking wall width...
            if (xAxisPosition + 100 > wallWidth && xAxisPosition < (parentWidth - wallWidth)) {
                // ... then decrease the position on the y-axis by 100 (move up) 
                setYAxisPosition(yAxisPosition - 100)
            }
        }
    }

    return (
      <>
          {/*Using our tenerary operator if fading is false our classname will be only level1bg, if fading is true our classname will be fade-out initializing our animation */}
          <div className={`level1bg ${fading ? 'fade-out' : ''}`}></div>
          <div className='everything'>
              <div className='maze2'>
                  <div className='maze'>
                      {/* inline styling is implemented because the css file could not access the conditionally rendering modal */}
                      {/* below is the styling for the maze */}
                      <div className="game1-window" style={{ 
                            width: `${parentWidth}px`,
                            height: `${parentHeight}px`}} >
                            {/* below is the styling for the cat character */}
                            <img src={Cat}
                                className="cat-player" 
                                style={{ 
                                      width: `${catWidth}px`,
                                      height: `${catHeight}px`,
                                      position: "absolute",
                                      left: `${xAxisPosition}px`,
                                      right: `${xAxisPosition}px`,
                                      bottom: `${yAxisPosition}px`,
                                      top: `${yAxisPosition}px`}} >
                            </img> 
                            {/* below is the styling for the different boxes within the maze game */}
                            <div className = "leftBox" style={{ 
                                height: `${wallHeight}px`,
                                width: `${wallWidth}px`,
                                position: "absolute",
                                left: `${leftBox}px`,
                                top: 100 }}>
                            </div>
                            <div className = "rightBox"
                                style={{ 
                                    height: `${wallHeight}px`,
                                    width: `${wallWidth}px`,
                                    position: "absolute",
                                    right: `${rightBox}px`,
                                    top: 100 }}>
                            </div>
                      </div>
                  </div>
                  {/* below is the div containing the d-pad for the game */}
                  <div className="pawpad" style={{ width: "450px"}}>
                      <img src={Uppaw} onClick={movingUpAction} ></img>
                      <div className= "left-right-pad">
                          <img src={Leftpaw} onClick={movingLeftAction} ></img>
                          <img src={Rightpaw} onClick={movingRightAction} ></img>
                      </div>
                      <img src={Downpaw} onClick={movingDownAction} ></img>
                  </div>
              </div>
          </div>

      {/* conditional rendering for a modal */}
      {(xAxisPosition >= 400 && yAxisPosition >=400 ) && (
          /* the below div determines the positioning of the modal */
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
              "z-index": "2" }}>
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
                      <h1 style={{"font-family": "Gloria Hallelujah, cursive" }}>
                          Level Complete!
                      </h1>
                      <img src={Wave}/>
                      <br />
                      <button style={{
                          background: "pink",
                          width: "40%",
                          border: "2px solid grey",
                          "border-radius": "50%",
                          padding: "5%",
                          "font-size": "x-large",
                          "box-shadow": "0 0 3px 3px white",
                          "font-family": "Gloria Hallelujah, cursive"}} 
                          onClick={handleNextText}>
                              Next Level
                      </button>
                  </center>
              </div>
          </div>
      )}
    </>
  )
}

export default Level1