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
					<li onClick={() => this.props.changePage("home")} className="nav-links__one"><Link to="/"><FaHome className="home"/></Link></li>
          <li onClick={() => this.props.changePage("about")}><Link to="/about">About Me</Link></li>
          <li onClick={() => this.props.changePage("my-work")}><Link to="/my-work">My Work</Link></li>
          <li onClick={() => this.props.changePage("student-work")}><Link to="/student-work">Student Work</Link></li>
        </ul>
        <Link onClick={() => this.props.changePage("contact")} to="/contact" className="nav-contact" href="#">Contact</Link>
      </nav>
		)
	}
}

export default Navbar;

// onClick={() => this.props.changePage("my-work")}
// onClick={() => this.props.changePage("about")}
