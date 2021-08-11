import { React } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar } from './components/Nav-Bar';
import { AddNote } from './pages/Add-Note';
import { ViewNotes } from './pages/View-Notes';;

export default function App(){
    return(
        <section>
            <header><h1>Redux Note-Taker</h1></header>
            <NavBar/>
            <Router>
                <Switch>
                    <Route exact path="/" component={ViewNotes}/>
                    <Route exact path="/add-notes" component={AddNote}/>
                    <Route exact path="/view-notes" component={ViewNotes}/>
                    <Route path="/edit-note/:id"/>
                </Switch>
            </Router>
        </section>
    )
}