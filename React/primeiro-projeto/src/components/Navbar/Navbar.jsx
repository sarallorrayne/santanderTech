/* eslint-disable jsx-a11y/anchor-has-content */

import React from "react";
import logoImg from "../../assets/images/logo.png";

import "./styles.css";

export class Navbar extends React.Component {
    render() {
        return (
            <header>
            <nav id="nav-bar">
              <div className = "nav-brand">
                <img src={logoImg} alt="Space Flight News Logo - A planet with dark blue backgorund" />
                <h1>Space Flight News</h1>
              </div>
    
              <ul className="nav-list">
                <li><a href="/"></a>Home</li>
                <li><a href="/"></a>Trending</li>
                <li><a href="/"></a>Categories</li>
                <li><a href="/"></a>About Us</li>
              </ul>
            </nav>
    
          </header>
        );
    }
}