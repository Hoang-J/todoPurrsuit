import React from 'react'
import './Todo.css' 


function Todo() {
return (
  <div id='todopaper'>
      <div id='notepadImg'>
          <div id='notepadText'>
          <h1>To-Do List</h1>
          <input type="checkbox" id="task1" name="task1"/>
          <label for="task1">Wash the car</label><br/>
          <input type="checkbox" id="task2" name="task2"/>
          <label for="task2">Grocery Shop</label><br/>
          <input type="checkbox" id="task3" name="task3"/>
          <label for="task3">Feed the cat</label><br/>
          <input type="submit" value="Submit"/>
          </div>
      </div>
  </div>


);
}

export default Todo