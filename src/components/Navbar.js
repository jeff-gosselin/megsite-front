import React, { Component } from 'react';
import {Link} from 'react-router-dom';

// CSS
import '../css/Navbar.scss';

// Icons
import { FaHome } from 'react-icons/fa';

class Navbar extends Component {
	render() {
		return (
			<nav>
        <ul className="nav-links">
					<li className="nav-links__one"><Link to="/"><FaHome className="home"/></Link></li>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/my-work">My Work</Link></li>
          <li><Link to="/student-work">Student Work</Link></li>
        </ul>
        <Link to="/contact" className="nav-contact" href="#">Contact</Link>
      </nav>
		)
	}
}

export default Navbar;
