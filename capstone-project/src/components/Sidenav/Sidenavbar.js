import React from 'react'
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import './Sidenavbar.css' 
import { Link } from "react-router-dom";



function Sidenavbar() {
    const [toggled, setToggled] = React.useState(false);
  return (
    <>
    <div id='sidebar'>
    <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always"  backgroundColor='rgba(0, 255, 255, 0.622)'>
      <Menu>
        <MenuItem component={<Link to="/todo" />}>Todo</MenuItem>
        <MenuItem component={<Link to="/home" />}> Home </MenuItem>
        <MenuItem component={<Link to="/registration" />}> Register </MenuItem>
        <MenuItem component={<Link to="/login" />}> Login </MenuItem>
        <MenuItem component={<Link to="/store" />}> Store </MenuItem>
        <MenuItem component={<Link to="/Level1" />}> Level 1 </MenuItem>
        {/* <MenuItem component={<Link to="/" />}> New Route</MenuItem> */}
      </Menu>
    </Sidebar>
    <main style={{ display: 'flex', padding: 10 }}>
      <div>
        <button className="sb-button" onClick={() => setToggled(!toggled)}>
          |||
        </button>
      </div>
    </main>
  </div>
  {/* <Outlet /> */}
    </>
  )
}

export default Sidenavbar