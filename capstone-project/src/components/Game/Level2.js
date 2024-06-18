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
    // Set useState of fading to be true when the button is clicked to navigate to next page
    const handleNextText = () => {
        {
            setFading(true);
            setTimeout(()=> {
                history.push('/story3')
            },1000)
        }
    }
    // create useState to track and update the x-axis and y-axis positions of the character
    const [xAxisPosition, setXAxisPosition] = useState(0)
    const [yAxisPosition, setYAxisPosition] = useState(0)
    // maintains the width and height of the maze borders
    const [parentWidth, setParentWidth] = useState(800)
    const [parentHeight, setParentHeight] = useState(500)
    // maintains the width and height of the cat character within the maze
    const [catWidth, setCatWidth] = useState(100)
    const [catHeight, setCatHeight] = useState(100)
    // the below useStates maintain the position of the box divs to create walls in the maze
    const [leftBox, setleftBox] = useState(0)
    const [rightBox, setrightBox] = useState(0)

    // the below uses useState to maintain the height and width of various divs
    const [wallWidth, setWallWidth] = useState(100)
    const [wallHeight, setWallHeight] = useState(300)

    const [wallWidth2, setWallWidth2] = useState(600)
    const [wallHeight2, setWallHeight2] = useState(100)

    const [wallWidth3, setWallWidth3] = useState(500)
    const [wallHeight3, setWallHeight3] = useState(300)


    function movingRightAction() {
        // if the cat's position moving right is within the right wall of the maze...
        if(xAxisPosition + 100 < parentWidth) {
            // ... and the y-axis position is between 100 and 200 ...
            if(yAxisPosition >= 100 && yAxisPosition <200) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100)
            }
            // ... and x-axis is less than the maze width minus the upper box width AND y-axis is between 100 & 200 ...
            if(xAxisPosition + 100 < (parentWidth - wallWidth2) && (yAxisPosition < 100 || yAxisPosition >= 200)) {
                // ... then increase the position on the x-axis by 100 (move right)
                setXAxisPosition(xAxisPosition + 100)
            }
        }
    }

    function movingLeftAction() {
        // if the cat's position moving left is within the left wall of the maze...
        if(xAxisPosition - 100 >= 0) {
            // if x-axis position is greater than or equa to the left box width AND y-axis is less than 100 or y-axis is greater than or equal to the maze height minus the cat height and x-axis position is less than 200 (this is pathing around the brown box) ...
            if(xAxisPosition >= wallWidth && (yAxisPosition < 100 || (yAxisPosition >= parentHeight - catHeight && xAxisPosition < 200))) {
                // ... then decrease the position on the x-axis by 100 (move left)
                setXAxisPosition(xAxisPosition - 100)
            }
        }
        // if y-axis is between 100 and 200 and x-axis is always above 100...
        if(yAxisPosition >= 100 && yAxisPosition < 200 && xAxisPosition - 100 >= 100) {
            // ... then decrease the position on the x-axis by 100 (move left)
            setXAxisPosition(xAxisPosition - 100)
        }
    }

    function movingDownAction() {
        // if the cat's position moving down is within the bottom wall of the maze...
        if(yAxisPosition + 100 < parentHeight) {
            // ... and the x-axis is between 100 and 200 OR above 700...
            if((xAxisPosition >= 100 && xAxisPosition < 200) || xAxisPosition >= 700) {
                // ... then increase the position on the y-axis by 100 (move down) (this may seem strange as increasing the position should move up on the y-axis, but this is how the code works)
                setYAxisPosition(yAxisPosition + 100)
            }
        }
    }

    function movingUpAction() {
        // if the cat's position moving up is within the top wall of the maze...
        if(yAxisPosition - 100 >= 0 ) {
            // ... and x-axis is between 100 and 200 OR x-axis is greater than or equal to 700 and y-axis is greater than 100 ...
            if((xAxisPosition >= 100 && xAxisPosition < 200) || (xAxisPosition >= 700 && yAxisPosition > 100)) {
                // ... then decrease the position on the y-axis by 100 (move up) 
                setYAxisPosition(yAxisPosition - 100)
            }
        }   
    }

return (
  <>
    {/*Using our tenerary operator if fading is false our classname will be only level2bg, if fading is true our classname will be fade-out initializing our animation */}
    <div className={`level2bg ${fading ? 'fade-out' : ''}`}></div>
    <div className='everything'>
        <div className='maze2'>
            <div className='maze'>
                {/* inline styling is implemented because the css file could not access the conditionally rendering modal */}
                {/* below is the styling for the maze */}
                <div className="game2-window" style={{ 
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
                        top: `${yAxisPosition}px` }} >   
                    </img> 
                    {/* below is the styling for the different boxes within the maze game */}
                    <div className = "leftDiv" style={{ 
                        height: `${wallHeight}px`,
                        width: `${wallWidth}px`,
                        position: "absolute",
                        left: `${leftBox}px`,
                        top: 100 }}>
                    </div>
                    <div className = "topBox" style={{ 
                        height: `${wallHeight2}px`,
                        width: `${wallWidth2}px`,
                        position: "absolute",
                        right: `${rightBox}px` }}>
                    </div>
                    <div className = "bottomBox" style={{ 
                        height: `${wallHeight3}px`,
                        width: `${wallWidth3}px`,
                        position: "absolute",
                        right: 100,
                        top: 200 }}>
                    </div>
                </div>
            </div>
            {/* below is the div containing the d-pad for the game */}
            <div className="pawpad" style={{
                width: "450px" }}>
                <img src={Uppaw} onClick={movingUpAction} ></img>
                <div className= "left-right-pad">
                    <img src={Leftpaw} onClick={movingLeftAction} ></img>
                    <img src={Rightpaw} onClick={movingRightAction} ></img>
                </div>
                <img src={Downpaw} onClick={movingDownAction} ></img>
            </div>
        </div>
    </div>

    {/* Set conditional rendering to have a modal appear when the character's x-axis position is greater than or equal to 700 and the y-axis position is greater than or equal to 400 */}
    {(xAxisPosition >= 700 && yAxisPosition >=400 ) && (
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
                    <h1 style={{ "font-family": "Gloria Hallelujah, cursive" }}>
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
                        "font-family": "Gloria Hallelujah, cursive" }}
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

export default Level2