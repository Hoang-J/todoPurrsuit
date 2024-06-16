import React, {useState} from 'react';
import './Level3.css';
import { useHistory } from 'react-router-dom';
import Cat from '../../images/catrunning.gif';
import Downpaw from '../../images/downpaw.png';
import Uppaw from '../../images/uppaw.png';
import Rightpaw from '../../images/rightpaw.png';
import Leftpaw from '../../images/leftpaw.png';
import Wave from '../../images/white-cat-expression-wave.png'

function Level3() {
  const [fading, setFading] = useState(false)
  //useHistory hook lets us access paths that we have set up
  const history = useHistory()
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    {
      setFading(true);
      setTimeout(()=> {
        history.push('/finallevel')
      },1000)
    }
  }
  const [xAxisPosition, setXAxisPosition] = useState(0)
    const [yAxisPosition, setYAxisPosition] = useState(0)

    const [parentWidth, setParentWidth] = useState(1000)
    const [parentHeight, setParentHeight] = useState(500)

    const [catWidth, setCatWidth] = useState(100)
    const [catHeight, setCatHeight] = useState(100)

    const [leftBox, setleftBox] = useState(100)
    const [rightBox, setrightBox] = useState(0)


    const [wallWidth, setWallWidth] = useState(100)
    const [wallHeight, setWallHeight] = useState(300)

    const [wallWidth2, setWallWidth2] = useState(100)
    const [wallHeight2, setWallHeight2] = useState(200)

    const [wallWidth3, setWallWidth3] = useState(700)
    const [wallHeight3, setWallHeight3] = useState(100)

    const [wallWidth4, setWallWidth4] = useState(200)
    const [wallHeight4, setWallHeight4] = useState(100)

    const [wallWidth5, setWallWidth5] = useState(600)
    const [wallHeight5, setWallHeight5] = useState(100)

    const [wallWidth6, setWallWidth6] = useState(200)
    const [wallHeight6, setWallHeight6] = useState(50)


    function movingRightAction() {
        if(xAxisPosition + 100 < parentWidth) {
            if(xAxisPosition + 100 < (parentWidth - wallWidth3) && (yAxisPosition < 100)) {
                setXAxisPosition(xAxisPosition + 100)
            }
            if(xAxisPosition + 100 < (parentWidth - wallWidth5 - 100) && (yAxisPosition >= 400)) {
                setXAxisPosition(xAxisPosition + 100)
            }
            if((yAxisPosition >= 100 && yAxisPosition < 200) && (xAxisPosition + 100 < 500 && xAxisPosition >= 200)) {
                setXAxisPosition(xAxisPosition + 100)
            }
            if((yAxisPosition >= 300 && yAxisPosition < 400) && xAxisPosition >= 200) {
                setXAxisPosition(xAxisPosition + 100);
            }
            if(xAxisPosition >= 600 && yAxisPosition >= 100 && yAxisPosition < 200) {
                setXAxisPosition(xAxisPosition + 100);
            }
            // if(yAxisPosition >= 100 && yAxisPosition <200) {
            //     setXAxisPosition(xAxisPosition + 100)
            // }
        }
    }

    function movingLeftAction() {
        if(xAxisPosition - 100 >= 0) {
            if(xAxisPosition >= wallWidth && (yAxisPosition < 100 || (yAxisPosition >= parentHeight - catHeight && xAxisPosition < 300))) {
                setXAxisPosition(xAxisPosition - 100)
            }
            if(yAxisPosition >= 100 && yAxisPosition < 200 && (xAxisPosition - 100 >= 200 && xAxisPosition < 500)) {
                setXAxisPosition(xAxisPosition - 100)
            }
            if((yAxisPosition >= 300 && yAxisPosition < 400) && xAxisPosition - 100 >= 200) {
                setXAxisPosition(xAxisPosition - 100)
            }
            if(yAxisPosition >= 100 && yAxisPosition < 200 && xAxisPosition - 100 >= 600) {
                setXAxisPosition(xAxisPosition - 100)
            }
        }
        
    }

    function movingDownAction() {
        if(yAxisPosition + 100 < parentHeight) {
            if(xAxisPosition < 100 || (xAxisPosition >= 200 && xAxisPosition < 300)) {
                setYAxisPosition(yAxisPosition + 100)
            }
            if((xAxisPosition >= 600 && xAxisPosition < 700) && yAxisPosition + 100 < 400) {
                setYAxisPosition(yAxisPosition + 100)
            }
            if(xAxisPosition >= 900) {
                setYAxisPosition(yAxisPosition + 100)
            }
        }
    }

    function movingUpAction() {
        if(yAxisPosition - 100 >= 0 ) {
            if((xAxisPosition >= 200 && xAxisPosition < 300) || (xAxisPosition < 100)) {
                setYAxisPosition(yAxisPosition - 100)
            }
            if((xAxisPosition >= 600 && xAxisPosition < 700) && yAxisPosition - 100 >= 100) {
                setYAxisPosition(yAxisPosition - 100)
            }
            if(xAxisPosition >= 900 && yAxisPosition - 100 >= 100) {
                setYAxisPosition(yAxisPosition - 100)
            }
        }   
    }

return (
  <>
    {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
    <div className={`level3bg ${fading ? 'fade-out' : ''}`}></div>
    <div className='everything'>
        <div className='maze2'>
            <div className='maze'>
                <div className="game-window" style={{ 
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
                    <div className = "box1" style={{ 
                        height: `${wallHeight}px`,
                        width: `${wallWidth}px`,
                        position: "absolute",
                        left: `${leftBox}px`,
                        top: 100,
                    }}></div>
                    <div className = "box2" style={{ 
                        height: `${wallHeight2}px`,
                        width: `${wallWidth2}px`,
                        position: "absolute",
                        left: 500,
                        top: 100,
                    }}></div>
                    <div className = "box3" style={{ 
                        height: `${wallHeight3}px`,
                        width: `${wallWidth3}px`,
                        position: "absolute",
                        right: `${rightBox}px`,
                        }}></div>
                    <div className = "box4" style={{ 
                        height: `${wallHeight4}px`,
                        width: `${wallWidth4}px`,
                        position: "absolute",
                        right: 100,
                        top: 200
                        }}></div>
                    <div className = "box5" style={{ 
                        height: `${wallHeight5}px`,
                        width: `${wallWidth5}px`,
                        position: "absolute",
                        right: 100,
                        top: 400
                        }}></div>
                    <div className = "box6" style={{ 
                        height: `${wallHeight6}px`,
                        width: `${wallWidth6}px`,
                        position: "absolute",
                        right: 500,
                        top: 225
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

    {(xAxisPosition >= 900 && (yAxisPosition >= 100 && yAxisPosition < 200)) && (
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
                border: "10px solid lightyellow",
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

export default Level3