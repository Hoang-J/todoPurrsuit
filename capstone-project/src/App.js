


































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
    </>
  );
}

export default App;
