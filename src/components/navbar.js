import React, { Component } from "react";
import logo from "../images/logo.svg";
import { FaAlignRight } from "react-icons/fa";
import { Link } from "react-router-dom";

class navbar extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
           <Link to="/">
            <img src={logo} alt="Assinie Beach"/>
           </Link> 
           <button type="button" className="nav-btn" onClick={this.handleToggle}>
             <FaAlignRight className="nav-icon"/>
           </button>
          </div>
          <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
            <li>
              <Link to="/">ACCUEIL</Link>
            </li>
            <li>
            <Link to="/rooms">CHAMBRES</Link> 
            </li>
          </ul>
        </div>   
      </nav>
    );
  }
}

export default navbar;