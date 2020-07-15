import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./container/Home/Home";

function App() {
    return (
        <Router>
            <Switch>
                <Header />
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
