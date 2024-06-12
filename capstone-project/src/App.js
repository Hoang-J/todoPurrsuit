import Home from './components/Homepage/Home';
import Store from './components/Store/Store';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Todo from './components/TodoPage/Todo';
import Level1 from './components/Game/Level1';
import Level2 from './components/Game/Level2'
import Sidenavbar from './components/Sidenav/Sidenavbar';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
     <Sidenavbar />
      <Switch>
        <Route path='/' component={Todo} exact/>
        <Route path='/todo' component={Todo}/> 
        <Route path='/home' component={Home} />
        {/* <Route path='/' component={} /> */}
        {/* <Route path='/' component={} /> */}
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
        <Route path='/store' component={Store} />
        <Route path="/level1" component={Level1} />
        <Route path='/level2' component={Level2} />
      </Switch>
    </>
  );
}

export default App;



