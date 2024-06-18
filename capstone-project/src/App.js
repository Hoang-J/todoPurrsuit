import Home from './components/Homepage/Home';
import Store from './components/Store/Store';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Todo from './components/TodoPage/Todo';
import Level1 from './components/Game/Level1';
import Level2 from './components/Game/Level2';
import Level3 from './components/Game/Level3';
import FinalLevel from './components/Game/FinalLevel';
import Sidenavbar from './components/Sidenav/Sidenavbar';
import Story1 from './components/Story/Story1';
import Story2 from './components/Story/Story2';
import Story3 from './components/Story/Story3';
import Story4 from './components/Story/Story4';
import Story5 from './components/Story/Story5';

import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  // Paths created with react router dom
    <>
     <Sidenavbar />
      <Switch>
        <Route path='/' component={Todo} exact/>
        <Route path='/todo' component={Todo}/> 
        <Route path='/home' component={Home} />
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
        <Route path='/store' component={Store} />
        <Route path="/level1" component={Level1} />
        <Route path='/level2' component={Level2} />
        <Route path='/level3' component={Level3} />
        <Route path='/finallevel' component={FinalLevel} />
        <Route path='/story1' component={Story1} />
        <Route path='/story2' component={Story2} />
        <Route path='/story3' component={Story3} />
        <Route path='/story4' component={Story4} />
        <Route path='/story5' component={Story5} />
      </Switch>
    </>
  );
}

export default App;







