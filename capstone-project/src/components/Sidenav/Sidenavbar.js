import React from 'react'
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import './Sidenavbar.css' 
import { Link } from "react-router-dom";
import paw from '../../images/uppaw.png'

function Sidenavbar() {
  const [toggled, setToggled] = React.useState(false);

  return (
    <>
      {/* Side-bar with links for router in App.js imported from react-pro sidebar */}
      <div id='sidebar'>
        <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always"  backgroundColor='rgba(135, 207, 235, 0.852)'>
          <Menu>
            <br/>
            <p/>
            <br />
            <MenuItem component={<Link to="/home" />}> Start Screen </MenuItem>
            <p/>
            <MenuItem component={<Link to="/store" />}> Store </MenuItem>
            <p/>
            <MenuItem component={<Link to="/login" />}> Sign Out </MenuItem>
          </Menu>
        </Sidebar>
        {/* container for button at top of webpages */}
        <main style={{ display: 'flex', padding: 10 }}>
          <div>
              {/* paw image used to open side bar routing options */}
              <img src={paw} className='sb-button' onClick={() => setToggled(!toggled)} style={{ width: "8%" }}></img>
          </div>
        </main>
      </div>
    </>
  )
}

export default Sidenavbar