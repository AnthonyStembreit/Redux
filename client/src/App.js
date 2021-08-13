import React from 'react';
import { BrowserRouter as Router,  Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux';
import store from './utils/store';

import AddNote from './pages/AddNote';
import ViewNotes from './pages/View-Notes'

export default function App() {

    return (
        <Router>
            <header><h1>Redux Counter</h1></header>
            <div>
                <Provider store={store}>
                    <Switch>
                        <Route exact path="/" component={AddNote} />
                        <Route exact path="/all-notes" component={ViewNotes} />
                        <Route exact path="/add-notes" component={AddNote} />
                    </Switch>
                </Provider>
            </div>
        </Router>
    )
}