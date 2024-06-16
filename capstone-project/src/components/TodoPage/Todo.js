import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import './Todo.css' 
import charHappy from '../../images/main-character.png'
import charCry from '../../images/main-character-sad.png'
import charFrown from '../../images/main-character-frown.png'
import catPaw from '../../images/white-cat-up-paw.png'

// Todo page
function Todo() {

  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false)

  const history = useHistory()
  const texts = [
    "Todo! Todo! Time to eat! Where did you go?",
    "Oh no...Where did Todo go??",
    "Please come back home, Todo!"
  ];
  const pics = [
    charHappy,
    charFrown,
    charCry

  ]
  // Set condition that as long as index is less than our text array length increment + 1
  const handleNextText = () => {
    if (index < texts.length - 1){
      setIndex(index + 1)
    } else {
      setFading(true);
      setTimeout(()=> {
        history.push('/home')
      },1000)
    }
  }

  const [feedCatTask, setFeedCatTask] = useState(false)


  function tasksClicked(e) {
    let num = e.target.value
    document.getElementById(`task${num}`).disabled = true;
  }

  // function tasksClicked(num) {
  //   document.getElementById(`task${num}`).disabled = true;
  // }

  function task3Clicked() {
    setFeedCatTask(true)
    document.getElementById('task3').disabled = true;
  }


return ( 
  <>
<div className={`bodytext ${fading ? 'fade-out' : ''}`}>
  <div id='todopaper'>
      <div id='notepadImg'>
          <div id='notepadText'>
          <h1>To-Do List</h1>
          <input type="checkbox" id="task1" name="task1" onClick={tasksClicked} value={1}/>
          <label for="task1">Wash the car</label><br/>
          <input type="checkbox" id="task2" name="task2" onClick={tasksClicked} value={2}/>
          <label for="task2">Grocery Shop</label><br/>
          {/* <input type="checkbox" id="task3" name="task3" onClick={task3Clicked}/> */}
          {/* <label for="task3">Feed the cat</label><br/> */}
          {/* <input type="submit" value="Submit"/> */}
          <input type="checkbox" id="task3" name="task3" onClick={task3Clicked}/>
          <label for="task3" style={{color: "red"}}>Feed the cat</label><br/>
          {/* <input type="submit" value="Submit"/> */}
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
          /* <button id='GO' onClick={handleNextText}>GO!</button> */
        )}
      </div>
    </>     
        )}
  </>


  );
}

export default Todo