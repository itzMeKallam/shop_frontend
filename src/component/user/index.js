import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

// Routes
import Signup from './signup/'
export default function Index() {
    return (
        <Router>
            <Switch>
                {/* <Route path="/about">
                    <About />
                </Route> */}
                {/* <Route path="/users">
                    <Users />
                </Route> */}
                <Route path="/signup">
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}
