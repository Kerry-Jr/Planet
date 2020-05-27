import React, { Component } from "react";
import './sidebar.css';

function Sidebar() {
  return (
    <div>
      <div>
        <div className='sideBuffer'>
        </div>
      </div>
      ​
      <div className="sidebar">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  )
}

export default Sidebar;