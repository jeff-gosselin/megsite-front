import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

// CSS
import './css/App.scss';
import './css/animations.scss';

// Components
import Navbar from './components/Navbar';
import Brand from './components/Brand';
import Footer from './components/Footer';

// Pages
import About from './components/pages/About';
import MyWork from './components/pages/MyWork';
import StudentWork from './components/pages/StudentWork';
import Contact from './components/pages/Contact';
import Login from './components/pages/Login';

class App extends Component {
	state = {
		prevPage: '',
		currPage: ''
	}

	changePage = (page) => {
		if (this.state.currPage.length > 0) {
			this.setState({
				prevPage: this.state.currPage
			})
		}
		this.setState({
			currPage: page
		})
	}

	render() {
		console.log("Page: ", this.state.prevPage);
		console.log("Page: ", this.state.currPage);
		
		return (

			<div className="App">
				<div className="main">
					<Navbar changePage={this.changePage} />

					<div className="main__content">
						<Switch>
							<Route path="/about" component={About} />
							<Route path="/my-work" component={MyWork} />
							<Route path="/student-work" component={StudentWork} />
							<Route path="/login" component={Login} />
							<Route path="/contact" component={Contact} />
							<Route path="/" component={Brand} />
						</Switch>
					</div>

				</div>
				<Footer />
			</div>


	  );
	}
}

export default App;
