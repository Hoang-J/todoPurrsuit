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
    // Set useState of fading to be true when the button is clicked to navigate to next page
    const handleNextText = () => {
        {
            setFading(true);
            setTimeout(()=> {
                history.push('/story4')
            },1000)
        }
    }
    // create useState to track and update the x-axis and y-axis positions of the character
    const [xAxisPosition, setXAxisPosition] = useState(0)
    const [yAxisPosition, setYAxisPosition] = useState(0)

    // maintains the width and height of the maze borders
    const [parentWidth, setParentWidth] = useState(1000)
    const [parentHeight, setParentHeight] = useState(500)

    // maintains the width and height of the cat character within the maze
    const [catWidth, setCatWidth] = useState(100)
    const [catHeight, setCatHeight] = useState(100)
    
    // the below useStates maintain the position of the box divs to create walls in the maze
    const [leftBox, setleftBox] = useState(100)
    const [rightBox, setrightBox] = useState(0)

    // the below uses useState to maintain the height and width of various divs
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
        // if the cat's position moving right is within the right wall of the maze...
        if(xAxisPosition + 100 < parentWidth) {
            // ... and x-axis moving right is less than the maze width minus the top box width AND y-axis is less than 100...
            if(xAxisPosition + 100 < (parentWidth - wallWidth3) && (yAxisPosition < 100)) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100)
            }
            // ... and x-axis moving right is less than the maze width minus the bottom box width minus an additional 100 AND y-axis is greater than or equal to 400...
            if(xAxisPosition + 100 < (parentWidth - wallWidth5 - 100) && (yAxisPosition >= 400)) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100)
            }
            // ... and y-axis is between 100 and 200 AND x-axis moving right is between 200 and 500...
            if((yAxisPosition >= 100 && yAxisPosition < 200) && (xAxisPosition + 100 < 500 && xAxisPosition >= 200)) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100)
            }
            // ... and y-axis is between 300 and 400 AND x-axis is greater than or equal to 200...
            if((yAxisPosition >= 300 && yAxisPosition < 400) && xAxisPosition >= 200) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100);
            }
            // ... and x-axis is greater than or equal to 600 AND y-axis is between 100 and 200
            if(xAxisPosition >= 600 && yAxisPosition >= 100 && yAxisPosition < 200) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100);
            }
        }
    }

    function movingLeftAction() {
        // if the cat's position moving left is within the left wall of the maze...
        if(xAxisPosition - 100 >= 0) {
            // ... and x-axis is greater than or equal to the the box width AND y-axis is less than 100 or y-axis is greater than or equal to the maze height minus the cat height and x-axis is less than 300 ...
            if(xAxisPosition >= wallWidth && (yAxisPosition < 100 || (yAxisPosition >= parentHeight - catHeight && xAxisPosition < 300))) {
                // ... then decrease the position on the x-axis by 100 (move left)
                setXAxisPosition(xAxisPosition - 100)
            }
            // ... and y-axis is between 100 and 200 and x-axis moving left is between 200 and 500...
            if(yAxisPosition >= 100 && yAxisPosition < 200 && (xAxisPosition - 100 >= 200 && xAxisPosition < 500)) {
                // ... then decrease the position on the x-axis by 100 (move left)
                setXAxisPosition(xAxisPosition - 100)
            }
            // ... and y-axis is between 300 and 400 AND x-axis moving left is greater than 200...
            if((yAxisPosition >= 300 && yAxisPosition < 400) && xAxisPosition - 100 >= 200) {
                // ... then decrease the position on the x-axis by 100 (move left)
                setXAxisPosition(xAxisPosition - 100)
            }
            // ... and y-axis is between 100 and 200 AND x-axis moving left is greater than or equal to 600...
            if(yAxisPosition >= 100 && yAxisPosition < 200 && xAxisPosition - 100 >= 600) {
                // ... then decrease the position on the x-axis by 100 (move left)
                setXAxisPosition(xAxisPosition - 100)
            }
        }
        
    }

    function movingDownAction() {
        // if the cat's position moving down is within the bottom wall of the maze...
        if(yAxisPosition + 100 < parentHeight) {
            // ... and x-axis is less than 100 OR between 200 and 300 ...
            if(xAxisPosition < 100 || (xAxisPosition >= 200 && xAxisPosition < 300)) {
                // ... then increase the position on the y-axis by 100 (move down) (this may seem strange as increasing the position should move up on the y-axis, but this is how the code works)
                setYAxisPosition(yAxisPosition + 100)
            }
            // ... and x-axis is between 600 and 700 AND y-axis is less than 400...
            if((xAxisPosition >= 600 && xAxisPosition < 700) && yAxisPosition + 100 < 400) {
                // ... then increase the position on the y-axis by 100 (move down) 
                setYAxisPosition(yAxisPosition + 100)
            }
            // ... and x-axis is greater than or equal to 900
            if(xAxisPosition >= 900) {
                // ... then increase the position on the y-axis by 100 (move down) 
                setYAxisPosition(yAxisPosition + 100)
            }
        }
    }

    function movingUpAction() {
        // if the cat's position moving up is within the top wall of the maze...
        if(yAxisPosition - 100 >= 0 ) {
            // and x-axis is between 200 and 300 OR less than 100...
            if((xAxisPosition >= 200 && xAxisPosition < 300) || (xAxisPosition < 100)) {
                // ... then decrease the position on the y-axis by 100 (move up) 
                setYAxisPosition(yAxisPosition - 100)
            }
            // ... and x-axis is between 600 and 700 AND y-axis is greater than or equal to 100
            if((xAxisPosition >= 600 && xAxisPosition < 700) && yAxisPosition - 100 >= 100) {
                // ... then decrease the position on the y-axis by 100 (move up) 
                setYAxisPosition(yAxisPosition - 100)
            }
            // ... and x-axis is greater than or equal to 900 AND y-axis is greater than or equal to 100
            if(xAxisPosition >= 900 && yAxisPosition - 100 >= 100) {
                // ... then decrease the position on the y-axis by 100 (move up) 
                setYAxisPosition(yAxisPosition - 100)
            }
        }   
    }

return (
  <>
    {/*Using our tenerary operator if fading is false our classname will be only level3bg, if fading is true our classname will be fade-out initializing our animation */}
    <div className={`level3bg ${fading ? 'fade-out' : ''}`}></div>
    <div className='everything'>
        <div className='maze2'>
            <div className='maze'>
                {/* inline styling is implemented because the css file could not access the conditionally rendering modal */}
                {/* below is the styling for the maze */}
                <div className="game-window" style={{ 
                    width: `${parentWidth}px`,
                    height: `${parentHeight}px` }} >
                    {/* below is the styling for the cat character */}
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
                    {/* below is the styling for the different boxes within the maze game */}
                    <div className = "box1" style={{ 
                        height: `${wallHeight}px`,
                        width: `${wallWidth}px`,
                        position: "absolute",
                        left: `${leftBox}px`,
                        top: 100 }}>
                    </div>
                    <div className = "box2" style={{ 
                        height: `${wallHeight2}px`,
                        width: `${wallWidth2}px`,
                        position: "absolute",
                        left: 500,
                        top: 100 }}>
                    </div>
                    <div className = "box3" style={{ 
                        height: `${wallHeight3}px`,
                        width: `${wallWidth3}px`,
                        position: "absolute",
                        right: `${rightBox}px` }}>
                    </div>
                    <div className = "box4" style={{ 
                        height: `${wallHeight4}px`,
                        width: `${wallWidth4}px`,
                        position: "absolute",
                        right: 100,
                        top: 200}}>
                    </div>
                    <div className = "box5" style={{ 
                        height: `${wallHeight5}px`,
                        width: `${wallWidth5}px`,
                        position: "absolute",
                        right: 100,
                        top: 400 }}>
                    </div>
                    <div className = "box6" style={{ 
                        height: `${wallHeight6}px`,
                        width: `${wallWidth6}px`,
                        position: "absolute",
                        right: 500,
                        top: 225}}>
                    </div>
                </div>
            </div>
            {/* below is the div containing the d-pad for the game */}
            <div className="pawpad" style={{
                width: "450px"}}>
                <img src={Uppaw} onClick={movingUpAction} ></img>
                <div className= "left-right-pad">
                    <img src={Leftpaw} onClick={movingLeftAction} ></img>
                    <img src={Rightpaw} onClick={movingRightAction} ></img>
                </div>
                <img src={Downpaw} onClick={movingDownAction} ></img>
            </div>
        </div>
    </div>

    {/* Set conditional rendering to have a modal appear when the character's x-axis position is greater than or equal to 900 and in between 100 and 200 on the y-axis */}
    {(xAxisPosition >= 900 && (yAxisPosition >= 100 && yAxisPosition < 200)) && (
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
                "box-shadow": "0 0 5px 5px rgb(220, 220, 220)"}}> 
                {/* the below styles the contents within the modal */}
                <center>
                    <h1 style={{ "font-family": "Gloria Hallelujah, cursive"}}>Level Complete!</h1>
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

export default Level3