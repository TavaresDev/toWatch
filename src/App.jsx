import React from 'react';
import { Box, Container, Grid } from '@material-ui/core';
import Nav from './components/Nav';
import Boxx from './components/shared/box'



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

				</Grid>
			</Grid>

		</Grid>

	);
}

export default App;
