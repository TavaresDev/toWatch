import { AppBar, Button, List, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import Home from '../Home/Home'
import ListPg from '../List/ListPG'

const Nav = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <nav>
                        <Link to="/"> Home </Link>
                        <Link to="/about"> About </Link>
                        <Link to="/list"> List </Link>
                        {/* <Button color="inherit">Login</Button> */}
                    </nav>

                </Toolbar>
            </AppBar>



            <Switch>
                <Route exact path="/" >
                    <Home/>
                </Route>
                <Route exact path="/about">
                    <h1>About</h1>
                </Route>
                <Route exact path="/list">
                    <ListPg/>  
 
                </Route>
            </Switch>
        </Router>
    )
}

export default Nav
