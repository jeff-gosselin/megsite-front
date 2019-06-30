import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './css/App.css';
import Navbar from './components/Navbar';
import Brand from './components/Brand';

class App extends Component {
	render() {
		return (
			<Router>
				<div className="App">
					<header>
						<Navbar />
						<Route path="/" Component={Brand} />

					</header>
				</div>
			</Router>

	  );
	}
}

export default App;
