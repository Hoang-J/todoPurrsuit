import React, {useState} from 'react';
import './Level2.css';
import { useHistory } from 'react-router-dom';
import Cat from '../../images/catrunning.gif';
import Downpaw from '../../images/downpaw.png';
import Uppaw from '../../images/uppaw.png';
import Rightpaw from '../../images/rightpaw.png';
import Leftpaw from '../../images/leftpaw.png';
import Wave from '../../images/white-cat-expression-wave.png'

function Level2() {
  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    {
      setFading(true);
      setTimeout(()=> {
        history.push('/story3')
      },1000)
    }
  }
  const [xAxisPosition, setXAxisPosition] = useState(0)
  const [yAxisPosition, setYAxisPosition] = useState(0)

  const [parentWidth, setParentWidth] = useState(800)
  const [parentHeight, setParentHeight] = useState(500)

  const [catWidth, setCatWidth] = useState(100)
  const [catHeight, setCatHeight] = useState(100)

  const [leftBox, setleftBox] = useState(0)
  const [rightBox, setrightBox] = useState(0)


  const [wallWidth, setWallWidth] = useState(100)
  const [wallHeight, setWallHeight] = useState(300)

  const [wallWidth2, setWallWidth2] = useState(600)
  const [wallHeight2, setWallHeight2] = useState(100)

  const [wallWidth3, setWallWidth3] = useState(500)
  const [wallHeight3, setWallHeight3] = useState(300)


  function movingRightAction() {
      if(xAxisPosition + 100 < parentWidth) {
          if(yAxisPosition >= 100 && yAxisPosition <200) {
              setXAxisPosition(xAxisPosition + 100)
          }
          if(xAxisPosition + 100 < (parentWidth - wallWidth2) && (yAxisPosition < 100 || yAxisPosition >= 200)) {
              setXAxisPosition(xAxisPosition + 100)
          }
      }
  }

  function movingLeftAction() {
      if(xAxisPosition - 100 >= 0) {
          if(xAxisPosition >= wallWidth && (yAxisPosition < 100 || (yAxisPosition >= parentHeight - catHeight && xAxisPosition < 200))) {
              setXAxisPosition(xAxisPosition - 100)
          }
      }
      if(yAxisPosition >= 100 && yAxisPosition < 200 && xAxisPosition - 100 >= 100) {
          setXAxisPosition(xAxisPosition - 100)
      }
  }

  function movingDownAction() {
      if(yAxisPosition + 100 < parentHeight) {
          if((xAxisPosition >= 100 && xAxisPosition < 200) || xAxisPosition >= 700) {
              setYAxisPosition(yAxisPosition + 100)
          }
      }
  }

  function movingUpAction() {
      if(yAxisPosition - 100 >= 0 ) {
          if((xAxisPosition >= 100 && xAxisPosition < 200) || (xAxisPosition >= 700 && yAxisPosition > 100)) {
              setYAxisPosition(yAxisPosition - 100)
          }
      }   
  }

return (
  <>
    {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
    <div className={`level2bg ${fading ? 'fade-out' : ''}`}></div>
    <div className='everything'>
        <div className='maze2'>
            <div className='maze'>
                <div className="game2-window" style={{ 
                        width: `${parentWidth}px`,
                        height: `${parentHeight}px`,
                    }} >
                    <img src={Cat} className="cat-player" style={{ 
                        width: `${catWidth}px`,
                        height: `${catHeight}px`,
                        position: "absolute",
                        left: `${xAxisPosition}px`,
                        right: `${xAxisPosition}px`,
                        bottom: `${yAxisPosition}px`,
                        top: `${yAxisPosition}px`
                        }} >   
                        </img> 
                        <div className = "leftDiv" style={{ 
                            height: `${wallHeight}px`,
                            width: `${wallWidth}px`,
                            position: "absolute",
                            left: `${leftBox}px`,
                            top: 100,
                        }}></div>
                        <div className = "topBox"
                        style={{ 
                            height: `${wallHeight2}px`,
                            width: `${wallWidth2}px`,
                            position: "absolute",
                            right: `${rightBox}px`,
                            
                        }}></div>
                        <div className = "bottomBox"
                        style={{ 
                            height: `${wallHeight3}px`,
                            width: `${wallWidth3}px`,
                            position: "absolute",
                            right: 100,
                            top: 200
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

    {(xAxisPosition >= 700 && yAxisPosition >=400 ) && (
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

export default Level2