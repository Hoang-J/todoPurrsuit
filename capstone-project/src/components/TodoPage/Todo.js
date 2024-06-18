import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Todo.css' 
import charHappy from '../../images/main-character.png'
import charCry from '../../images/main-character-sad.png'
import charFrown from '../../images/main-character-frown.png'
import catPaw from '../../images/white-cat-up-paw.png'

// Todo page
function Todo() {

  // setting up useState for index for the handleNextText function
  const [index, setIndex] = useState(0);
  // setting up useState for fading for the screen to have a fading effect after the button with the "GO" id is clicked
  const [fading, setFading] = useState(false)
  // useHistory hook lets us access different paths that we have set up
  // used it to help navigate users to the correct path created with the react-router
  // have to initialize it first in order to use it
  const history = useHistory()
  // array of text to loop through to display in the textbox
  const texts = [
    "Todo! Todo! Time to eat! Where did you go?",
    "Oh no...Where did Todo go??",
    "Please come back home, Todo!"
  ]
  // array of pictures to loop through to display in the textbox
  const pics = [
    charHappy,
    charFrown,
    charCry
  ]
  // Set condition that as long as index is less than our text array length then will increment + 1
  // this function will help the text go to the next one inside the array after a button click
  // it will also change the pictures to reflect the emotions of the cat based on the text
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      setFading(true);
      setTimeout(()=> {
        // set a delay to show the fade-out effect and then reroute the user to a different path
        history.push('/home')
      },1000)
    }
  }
  // setting up useState for feedCatTask for the task3Clicked function
  const [feedCatTask, setFeedCatTask] = useState(false)
  // function to disable the button for the other tasks after clicked
  function tasksClicked(e) {
    let num = e.target.value
    document.getElementById(`task${num}`).disabled = true;
  }
  // function to disable the button and make the textbox appear from conditional rendering
  function task3Clicked() {
    setFeedCatTask(true)
    document.getElementById('task3').disabled = true;
  }

return ( 
  <>
    {/* Using a conditional ternary operator if fading is false our classname will be only bodytext, if fading is true our classname will be fade-out initializing our animation */}
    <div className={`bodytext ${fading ? 'fade-out' : ''}`}>
      {/* Cotainer for to-do list complete to-do list component */}
      <div id='todopaper'>
          {/* Container for to-do list clipboard image */}
          <div id='notepadImg'>
              {/* to-do list text,checkboxes, and submit button  */}
              <div id='notepadText'>
                <h1>To-Do List</h1>
                <input type="checkbox" id="task1" name="task1" onClick={tasksClicked} value={1}/>
                <label for="task1">Wash the car</label><br/>
                <input type="checkbox" id="task2" name="task2" onClick={tasksClicked} value={2}/>
                <label for="task2">Grocery Shop</label><br/>
                <input type="checkbox" id="task3" name="task3" onClick={task3Clicked}/>
                <label for="task3" style={{color: "red"}}>Feed the cat</label><br/>
                <button id='todoButton'>Submit</button>
              </div>
          </div>
      </div>
    </div>
      
    {/* using conditoinal rendering once our index is equal to our arrays length our go button will be available, allowing us to transition to the next scene */}
    {feedCatTask == true && (
      <>
          {/*Using our tenerary operator if fading is false our classname will be only level1body, if fading is true our classname will be fade-out initializing our animation */}
          <div className={`textbox bodytext ${fading ? 'fade-out' : ''}`}>
              <p>{texts[index]}</p>
              <img className='char-talk' src={pics[index]} />
              {/* Add conditional rendering, as long as the index is less than our text array length the button will be rendered */}
              {index < texts.length -1 && (
                <img id='button' onClick={handleNextText} src={catPaw}/>
                /* <button id='button' onClick={handleNextText}>Next</button> */
              )}
              {/* using conditoinal rendering once our index is equal to our arrays length our go button will be available, allowing us to transition to the next scene */}
              {index === texts.length - 1 && (
                <img id='GO' onClick={handleNextText} src={catPaw}/>
              )}
          </div>
      </>     
    )}
  </>


  );
}

export default Todo