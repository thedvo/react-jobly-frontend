import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import JoblyApi from './api';

import Nav from './Nav';
import Routes from './Routes';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Nav />
				<main>
					<Routes />
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
