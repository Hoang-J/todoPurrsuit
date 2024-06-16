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
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    {
      setFading(true);
      setTimeout(()=> {
        history.push('/story2')
      },1000)
    }
  }


  // justin's maze code
    const [xAxisPosition, setXAxisPosition] = useState(0)
    const [yAxisPosition, setYAxisPosition] = useState(0)

    const [parentWidth, setParentWidth] = useState(500)
    const [parentHeight, setParentHeight] = useState(500)

    const [wallWidth, setWallWidth] = useState(200)
    const [wallHeight, setWallHeight] = useState(300)

    const [catWidth, setCatWidth] = useState(100)
    const [catHeight, setCatHeight] = useState(100)

    const [rightBox, setRightBox] = useState(0)
    const [leftBox, setLeftBox] = useState(0)


    function movingRightAction() {
        
        if(xAxisPosition + 100 < parentWidth) {
            if (yAxisPosition < catHeight || yAxisPosition >= parentHeight - catHeight) {
                setXAxisPosition(xAxisPosition + 100)
            }
        }
    }

    function movingLeftAction() {
        if(xAxisPosition - 100 >= 0) {
            if (yAxisPosition < catHeight || yAxisPosition >= parentHeight - catHeight) {
                setXAxisPosition(xAxisPosition - 100)
            }
        }
    }

    function movingDownAction() {
        if(yAxisPosition + 100 < parentHeight) {
            if (xAxisPosition + 100 > wallWidth && xAxisPosition < (parentWidth - wallWidth)) {
                setYAxisPosition(yAxisPosition + 100)
            }
        }
    }

    function movingUpAction() {
        if(yAxisPosition - 100 >= 0) {
            if (xAxisPosition + 100 > wallWidth && xAxisPosition < (parentWidth - wallWidth)) {
                setYAxisPosition(yAxisPosition - 100)
            }
        }
    }

  return (
    <>

      {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
      <div className={`level1bg ${fading ? 'fade-out' : ''}`}></div>
      <div className= 'everything'> 
        <div className="maze1">
          <div className="testing">
            <div className="maze">
                <div className="game1-window" style={{ 
                    width: `${parentWidth}px`,
                    height: `${parentHeight}px`}} >
                    <img src={Cat}
                    className="cat-player" 
                    style={{ 
                        width: `${catWidth}px`,
                        height: `${catHeight}px`,
                        position: "absolute",
                        left: `${xAxisPosition}px`,
                        right: `${xAxisPosition}px`,
                        bottom: `${yAxisPosition}px`,
                        top: `${yAxisPosition}px`
                    }} ></img> 
                    <div className = "leftBox" style={{ 
                        height: `${wallHeight}px`,
                        width: `${wallWidth}px`,
                        position: "absolute",
                        left: `${leftBox}px`,
                        top: 100,
                    }}></div>
                    <div className = "rightBox"
                    style={{ 
                        height: `${wallHeight}px`,
                        width: `${wallWidth}px`,
                        position: "absolute",
                        right: `${rightBox}px`,
                        top: 100,
                    }}></div>
                </div>
            </div>
            <div className="pawpad" style={{
              width: "450px"
            }}>
                <img src={Uppaw} onClick={movingUpAction} ></img>
                <div className= "left-right-pad">
                    <img src={Leftpaw} onClick={movingLeftAction} ></img>
                    <img src={Rightpaw} onClick={movingRightAction} ></img>
                </div>
                <img src={Downpaw} onClick={movingDownAction} ></img>
            </div>
          </div>
        </div>
      </div>
      {/* conditional rendering for a modal */}
      {(xAxisPosition >= 400 && yAxisPosition >=400 ) && (

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
            "z-index": "2"
        }}>
            <div className= "modal" style={{
                background: "lightskyblue",
                height: "50%",
                width: "30%",
                margin: "auto",
                padding: "2%",
                border: "2px solid #000",
                borderRadius: "10px",
                "box-shadow": "0 0 5px 5px rgb(220, 220, 220)",
            }}> 
              <center>
                <h1 style={{
                  "font-family": "Gloria Hallelujah, cursive",
                }}>Level Complete!</h1>
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
                  "font-family": "Gloria Hallelujah, cursive",
                }} onClick={handleNextText}>Next Level</button>
              </center>
            </div>
        </div>
        
      )}
    </>
  )
}

export default Level1