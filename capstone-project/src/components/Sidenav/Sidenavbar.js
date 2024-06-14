import React from 'react'
import { Sidebar, Menu, MenuItem, } from 'react-pro-sidebar';
import './Sidenavbar.css' 
import { Link } from "react-router-dom";


function Sidenavbar() {
    const [toggled, setToggled] = React.useState(false);
  return (
    <>
    <div id='sidebar'>
    <Sidebar onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" image="https://i.pinimg.com/736x/8e/6c/06/8e6c064f57f94838263d7ba9ad80f353.jpg">
      <Menu>
        <MenuItem component={<Link to="/todo" />}>Todo</MenuItem>
        <MenuItem component={<Link to="/home" />}> Home </MenuItem>
        <MenuItem component={<Link to="/registration" />}> Register </MenuItem>
        <MenuItem component={<Link to="/login" />}> Login </MenuItem>
        <MenuItem component={<Link to="/store" />}> Store </MenuItem>
        <MenuItem component={<Link to="/Level1" />}> Level 1 </MenuItem>
        {/* <MenuItem component={<Link to="/" />}> New Route</MenuItem> */}
        <MenuItem component={<Link to="/story1" />}> Story1 </MenuItem>
        <MenuItem component={<Link to="/story2" />}> Story2 </MenuItem>
        <MenuItem component={<Link to="/story3" />}> Story3 </MenuItem>
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
  {/* <Outlet /> */}
    </>
  )
}

export default Sidenavbar