import React from 'react';
import logo from './logo.svg';
import { slide as Menu } from 'react-burger-menu'
import Navbar from './components/Navbar';
import './App.css';
import './css/styles.css';
import './css/burger-menu.css'

function App() {
  return (
    <div className="App">
        <div className="landing-image">
        <Menu className={ "menu" } burgerButtonClassName={ "bm-burger-button" }>
        <a className="menu-item" href="#">About Us</a>
        <a className="menu-item" href="#">Gallery</a>
        <a className="menu-item" href="#">Services</a>
        <a className="menu-item" href="#">Testimonials</a>
        <a className="menu-item" href="#">Contact Us</a>
        </Menu>
          <Navbar />
          <div className="landing-image__content">
            <h1>Welcome to Chris P Cuts</h1>
            <button>Book Now</button>
          </div>
        </div>
    </div>
  );
}

export default App;
