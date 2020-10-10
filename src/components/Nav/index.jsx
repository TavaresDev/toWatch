import { AppBar, Button, List, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import Content from '../Content/Content'



const Nav = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <nav>
                        <Link to="/"> Home </Link>
                        <Link to="/about"> About </Link>
                    </nav>
                </Toolbar>
            </AppBar>



            <Switch>
                <Route exact path="/" >
                    <Content/>
                </Route>
                <Route exact path="/about">
                    <h1>About</h1>
                    <Content/>
        
                </Route>
            </Switch>
        </Router>
    )
}

export default Nav
