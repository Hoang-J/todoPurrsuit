


































import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Store from './components/Store/Store';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Todo from './components/TodoPage/Todo';
import Level1 from './components/Game/Level1';
import { Routes, Route, Switch } from 'react-router-dom'
import Level2 from './components/Game/Level2'



// import Home from './components/Homepage/Home';


import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Home from './components/Homepage/Home';
import Sidenavbar from './components/Sidenav/Sidenavbar';
import Registration from './components/Registration/Registration';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Sidenavbar />}>
              <Route index element={<Home />} />
              <Route path="/registration" element={<Registration />} />
            </Route>
          </Routes>
      </BrowserRouter> 




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
