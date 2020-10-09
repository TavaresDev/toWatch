import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Nav from './components/Nav';
import Boxx from './components/shared/box'
import Home from './components/Home/Home';


function App() {
	return (

		<Grid container direction="column">
			{/* NAV */}
			<Grid item  > 
				<Nav />
			</Grid>
			<Grid item container>
				{/* Home */}
				<Grid item sm={8}>
					<Home />
				</Grid>
			</Grid>

		</Grid>

	);
}

export default App;
