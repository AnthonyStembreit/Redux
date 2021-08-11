import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from './utils/store';

export default function App(){
    return(
        <section>
            <header><h1>Redux Note-Taker</h1></header>
            <Router>
                <Switch>
                    <Route exact-path="/"></Route>
                    <Route path="/add-notes"></Route>
                    <Route path="/view-notes"></Route>
                </Switch>
            </Router>
        </section>
    )
}