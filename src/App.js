import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./container/Home/Home";
import MovieDetails from "./container/MovieDetails/MovieDetails";
import AppContext, { useAppContext } from "./AppContext/Appcontext";

function App() {
    const contextValue = useAppContext();
    return (
        <Router>
            <AppContext.Provider value={{ ...contextValue }}>
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
            </AppContext.Provider>
        </Router>
    );
}

export default App;
