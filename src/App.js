import React from 'react';
import './css/App.css';
import Navbar from './components/Navbar';
import Brand from './components/Brand';

function App() {
  return (
    <div className="App">
		<header>
			<Navbar />
			<Brand />
		</header>
    </div>
  );
}

export default App;
