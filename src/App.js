import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./container/Home/Home";
import MovieDetails from "./container/MovieDetails/MovieDetails";

function App() {
    return (
        <Router>
            <Header />

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/:id">
                    <MovieDetails />
                </Route>
                <Route>
                    <p> No page rendered</p>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
