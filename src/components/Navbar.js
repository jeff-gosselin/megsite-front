import React, { Component } from 'react';
import '../css/Navbar.css';
import { FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons";

class Navbar extends Component {
	render() {
		return (
			<nav>
        <ul className="nav-links">
					<li className="nav-links__one"><a href="#"><FaHome className="home"/></a></li>
          <li><a href="#">About Me</a></li>
          <li><a href="#">My Work</a></li>
          <li><a href="#">Student Work</a></li>
        </ul>
        <a className="nav-contact" href="#">Contact</a>
      </nav>
		)
	}
}

export default Navbar;
