import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import './Sidenavbar.css' 
import { Outlet, Link } from "react-router-dom";


function Sidenavbar() {
    const [toggled, setToggled] = React.useState(false);
  return (
    <>
    <div id='sidebar'>
    <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg">
      <Menu>
        <MenuItem element={<Link to="/registration" />}> Documentation</MenuItem>
        <MenuItem> E-commerce</MenuItem>
        <MenuItem> Examples</MenuItem>
      </Menu>
    </Sidebar>
    <main style={{ display: 'flex', padding: 10 }}>
      <div>
        <button className="sb-button" onClick={() => setToggled(!toggled)}>
          Nav
        </button>
      </div>
    </main>
  </div>
  <Outlet />
    </>
  )
}

export default Sidenavbar