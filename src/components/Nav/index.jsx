import React from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'

const Nav = () => {
    return (
        <Router>
        <Styles.Nav>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/page2">
                        page2
                    </Link>
                </li>
            </ul>
        </Styles.Nav>
        

        <Switch>
            <Route exact path="/" >
                {/* <Home/> */}
                <h1>Home</h1>
            </Route>
            <Route exact path="/page2">
                {/* <TicTacToe/> */}
                <h1>Page2</h1>
            </Route>
        </Switch>

    </Router>
 
    )
}

export default Nav
