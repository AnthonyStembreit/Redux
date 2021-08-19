import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './utils/store';

import AddNote from './pages/AddNote';
import ViewNotes from './pages/View-Notes';
import NavBar from './components/Nav-Bar';

export default function App() {

    return (
        <Router>
            <header>
                <h1>Redux Counter</h1>
                <NavBar/>
            </header>
            <div>
                <Provider store={store}>
                    <Switch>
                        <Route exact path="/" component={AddNote} />
                        <Route path="/view-notes" component={ViewNotes} />
                        <Route path="/add-notes" component={AddNote} />
                    </Switch>
                </Provider>
            </div>
        </Router>
    )
}