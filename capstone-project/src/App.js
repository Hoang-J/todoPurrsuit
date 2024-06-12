
import Home from './components/Homepage/Home';
import Store from './components/Store/Store';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Todo from './components/TodoPage/Todo';
import Level1 from './components/Game/Level1';
import { Routes, Route, Switch } from 'react-router-dom'
import Level2 from './components/Game/Level2'



// import Home from './components/Homepage/Home';


function App() {
  return (
    <>
      <Switch>
      <Route path="/level1" component={Level1} />
      <Route path='/level2' component={Level2} />
      </Switch>
      {/* <Home /> */}
      {/* <Store /> */}
      <Level1 />
      {/* <Todo /> */}
      {/* <Registration /> */}
      {/* <Login /> */}

    </>
  );
}

export default App;
