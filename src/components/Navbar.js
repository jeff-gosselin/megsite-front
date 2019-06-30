import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<nav>
        <ul class="nav-links">
          <li><a href="#">About Me</a></li>
          <li><a href="#">My Work</a></li>
          <li><a href="#">Student Work</a></li>
        </ul>
        <a class="nav-contact" href="#">Contact</a>
      </nav>
		)
	}
}

export default Navbar;
